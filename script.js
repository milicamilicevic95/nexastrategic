const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.transform = (y > lastY && y > 180) ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
}, {passive:true});
header.style.transition = 'transform .28s ease';

// Nexa tool waitlist. The server stores the waitlist independently of newsletter consent.
(() => {
  const form = document.getElementById('tool-waitlist-form');
  if (!form) return;
  const status = document.getElementById('tool-waitlist-status');
  const submit = form.querySelector('button[type="submit"]');
  document.querySelectorAll('[data-tool-choice]').forEach(link => link.addEventListener('click', () => {
    const choice = form.querySelector(`input[name="tool"][value="${link.dataset.toolChoice}"]`);
    if (choice) choice.checked = true;
  }));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    submit.disabled = true;
    status.textContent = 'Submitting…';
    try {
      const response = await fetch('/api/tool-waitlist', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name: data.get('name'), email: data.get('email'), tool: data.get('tool'),
          newsletterOptIn: data.get('updates') === 'yes', website: data.get('website') || ''
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || 'Unable to join the waitlist. Please try again.');
      status.textContent = 'You’re on the waitlist. We’ll email you when tools become available.';
      form.reset();
      form.querySelector('input[value="both"]').checked = true;
    } catch (error) {
      status.textContent = error.message || 'Something went wrong. Please try again.';
    } finally { submit.disabled = false; }
  });
})();
