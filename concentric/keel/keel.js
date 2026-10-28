/* Keel member page. Answers stay in this browser until submitted, then go to
   /.netlify/functions/keel, which checks the member link and writes to Airtable. */
(function () {
  var SPEC = window.KEEL_SPEC;
  var app = document.getElementById("keel-app");
  if (!SPEC || !app) return;

  var params = new URLSearchParams(location.search);
  var access = (params.get("m") || "").trim();
  var isRetake = params.get("t") === "retake";
  var KEY = "keel:" + access + (isRetake ? ":retake" : "");

  var steps = SPEC.steps.map(function (s) {
    return Object.assign({}, s, { questions: s.questions.filter(function (q) { return !q.retakeOnly || isRetake; }) });
  });

  var state = load() || { step: -1, info: { name: "", email: "", country: "", consent: false }, answers: {}, order: {} };
  // Timing: seconds spent on each section, kept with the saved answers so a reload does not reset it.
  state.times = state.times || {};
  var stepStarted = Date.now();
  function tick() {
    if (state.step >= 0 && state.step < steps.length) {
      var id = steps[state.step].id, secs = Math.round((Date.now() - stepStarted) / 1000);
      if (secs > 0 && secs < 3600) state.times[id] = (state.times[id] || 0) + secs;
    }
    stepStarted = Date.now();
  }
  // Fix option order once per person so a reload does not reshuffle.
  steps.forEach(function (s) { s.questions.forEach(function (q) {
    if (q.shuffle && !state.order[q.id]) state.order[q.id] = Math.random() < 0.5 ? [0, 1] : [1, 0];
  }); });

  function load() { try { var r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }

  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === "text") e.textContent = v;
      else if (k === "class") e.className = v;
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    });
    (kids || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }
  function shell(kids) { return h("section", { class: "keel-shell" }, kids); }
  function show(node, focusSel) {
    app.innerHTML = ""; app.appendChild(node);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    var f = node.querySelector(focusSel || "h1,h2");
    if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); }
  }

  // ---------- completeness ----------
  function answered(q) {
    var a = state.answers[q.id];
    if (q.long) return !!(a && String(a).trim());
    if (q.pick) return Array.isArray(a) && a.length === q.pick;
    if (!a) return false;
    if (a === "other:") return false;
    if (q.conf && !state.answers[q.conf]) return false;
    return true;
  }
  function remaining(s) { return s.questions.filter(function (q) { return !answered(q); }).length; }

  // ---------- screens ----------
  function locked() {
    show(shell([
      h("p", { class: "eyebrow", text: "Keel" }),
      h("h1", { text: "Keel is part of Concentric membership." }),
      h("p", { class: "deck", text: "Your personal link arrives with your welcome email. If you cannot find it, reply to that email and we will send it again." }),
      h("a", { class: "btn", href: "/concentric/council/" }, ["About the Council"])
    ]));
  }

  function intro() {
    var i = state.info;
    var status = h("p", { class: "k-status", role: "status" });
    function field(id, label, type, val, auto) {
      return h("div", { class: "k-field" }, [
        h("label", { for: id, text: label }),
        h("input", { class: "k-input", id: id, type: type, value: val, autocomplete: auto, required: true,
          oninput: function (e) { i[id.replace("k-", "")] = e.target.value; save(); } })
      ]);
    }
    var countryOpts = h("div", { class: "k-opts" }, SPEC.countries.map(function (c) {
      return optionEl("k-country", c, c, i.country === c, "radio", function () { i.country = c; save(); refreshOpts(countryOpts, i.country); });
    }));
    var consent = h("label", { class: "k-check" }, [
      h("input", { type: "checkbox", checked: i.consent, onchange: function (e) { i.consent = e.target.checked; save(); } }),
      h("span", { text: "I agree to my answers being used this way: to write my personal report and shape my debrief, seen by me and my facilitator, stored securely, and used anonymously and in aggregate to improve the program." })
    ]);
    var start = h("button", { class: "btn solid", type: "button", onclick: function () {
      if (!i.name.trim()) return say(status, "Please add your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email.trim())) return say(status, "Please add a valid email.");
      if (!i.country) return say(status, "Please say where you are based.");
      if (!i.consent) return say(status, "Please confirm consent to continue.");
      state.step = 0; stepStarted = Date.now(); save(); render();
    } }, [state.step > -1 ? "Continue where you left off" : "Begin"]);

    show(shell([
      h("p", { class: "eyebrow", text: isRetake ? "Keel · Six month retake" : "Keel" }),
      h("h1", { text: isRetake ? "Six months on." : "How you decide, applied to what you are deciding." }),
      h("p", { class: "deck", text: isRetake
        ? "The same questions as before, plus one about what you decided. Your new report compares the two."
        : "Keel is the Concentric decision profile. It looks at how you think, solve problems and make decisions, then applies that to what you are facing right now." }),
      h("div", { class: "keel-meta" }, [h("span", { text: "About five minutes" }), h("span", { text: "Six short sections" }), h("span", { text: "Saves as you go" })]),
      h("p", { class: "keel-note", text: "There are no trick questions and no right type to be. Answer as you are, not as you think you should be." }),
      h("div", { style: "height:22px" }),
      field("k-name", "Your full name", "text", i.name, "name"),
      field("k-email", "Your email", "email", i.email, "email"),
      h("fieldset", { class: "k-q", style: "padding-bottom:0;border:0;margin-bottom:24px" }, [h("legend", { class: "k-legend", style: "font-family:var(--sans);font-size:12px", text: "Where are you based?" }), countryOpts]),
      consent,
      h("div", { class: "k-nav", style: "border-top:0" }, [h("span"), start]),
      status
    ]), "h1");
  }

  function say(el, msg, err) { el.textContent = msg; el.dataset.state = err === false ? "" : "error"; }

  function optionEl(name, value, label, on, type, onpick, disabled) {
    var input = h("input", { type: type, name: name, value: value, checked: on, disabled: disabled, onchange: onpick });
    return h("label", { class: "k-opt" + (type === "checkbox" ? " k-box" : "") + (on ? " is-on" : "") + (disabled ? " is-off" : ""), "data-value": value }, [
      input, h("span", { class: "k-dot", "aria-hidden": "true" }), h("span", { text: label })
    ]);
  }
  function refreshOpts(box, current) {
    Array.prototype.forEach.call(box.querySelectorAll(".k-opt"), function (l) {
      var on = Array.isArray(current) ? current.indexOf(l.dataset.value) > -1 : l.dataset.value === current;
      l.classList.toggle("is-on", on); l.querySelector("input").checked = on;
    });
  }

  function questionEl(q, n, onchange) {
    var A = state.answers;
    var kids = [h("legend", {}, [h("span", { class: "k-num", text: "Question " + n }), q.text])];
    if (q.hint) kids.push(h("p", { class: "k-hint", text: q.hint }));

    if (q.long) {
      var count = h("div", { class: "k-count" });
      var ta = h("textarea", { class: "k-textarea", maxlength: q.max || 3000, "aria-label": q.text,
        oninput: function (e) { A[q.id] = e.target.value; count.textContent = e.target.value.length + " / " + (q.max || 3000); save(); onchange(); } });
      ta.value = A[q.id] || ""; count.textContent = ta.value.length + " / " + (q.max || 3000);
      kids.push(ta, count);
      return h("fieldset", { class: "k-q" }, kids);
    }

    if (q.pick) {
      var box = h("div", { class: "k-opts" });
      var cur = Array.isArray(A[q.id]) ? A[q.id] : [];
      var draw = function () {
        box.innerHTML = "";
        q.options.forEach(function (o) {
          var on = cur.indexOf(o) > -1;
          box.appendChild(optionEl(q.id, o, o, on, "checkbox", function (e) {
            if (e.target.checked && cur.length < q.pick) cur.push(o);
            else if (!e.target.checked) cur = cur.filter(function (x) { return x !== o; });
            A[q.id] = cur.slice(); save(); draw(); onchange();
          }, !on && cur.length >= q.pick));
        });
      };
      draw(); kids.push(box);
      return h("fieldset", { class: "k-q" }, kids);
    }

    var order = q.shuffle ? state.order[q.id].map(function (i) { return q.options[i]; }) : q.options.slice();
    var opts = h("div", { class: "k-opts" + (q.scale ? " k-scale" : "") });
    var otherWrap = null, otherInput = null;
    var curVal = A[q.id] || "";
    var isOther = curVal.indexOf("other:") === 0;
    order.forEach(function (o) {
      opts.appendChild(optionEl(q.id, o, o, curVal === o, "radio", function () {
        A[q.id] = o; save(); refreshOpts(opts, o); if (otherWrap) otherWrap.hidden = true; afterPick(); onchange();
      }));
    });
    if (q.other) {
      opts.appendChild(optionEl(q.id, "__other", "Something else", isOther, "radio", function () {
        A[q.id] = "other:" + (otherInput.value || ""); save(); refreshOpts(opts, "__other"); otherWrap.hidden = false; otherInput.focus(); onchange();
      }));
      otherInput = h("input", { class: "k-input", type: "text", maxlength: 200, placeholder: "In a few words", "aria-label": "Something else, in your words",
        oninput: function (e) { A[q.id] = "other:" + e.target.value.trim(); save(); onchange(); } });
      otherInput.value = isOther ? curVal.slice(6) : "";
      otherWrap = h("div", { class: "k-other" }, [otherInput]); otherWrap.hidden = !isOther;
    }
    kids.push(opts); if (otherWrap) kids.push(otherWrap);

    var confBox = null;
    function afterPick() { if (confBox) confBox.classList.remove("is-waiting"); }
    if (q.conf) {
      var cOpts = h("div", { class: "k-opts" });
      SPEC.conf.forEach(function (c) {
        cOpts.appendChild(optionEl(q.conf, c, c, A[q.conf] === c, "radio", function () { A[q.conf] = c; save(); refreshOpts(cOpts, c); onchange(); }));
      });
      confBox = h("fieldset", { class: "k-conf" + (A[q.id] ? "" : " is-waiting"), style: "border:0;border-left:2px solid var(--gold)" },
        [h("legend", { class: "k-legend", text: "How sure are you?" }), cOpts]);
      kids.push(confBox);
    }
    return h("fieldset", { class: "k-q" }, kids);
  }

  function stepScreen() {
    var s = steps[state.step], last = state.step === steps.length - 1;
    var start = 0; for (var i = 0; i < state.step; i++) start += steps[i].questions.length;
    var left = h("span", { class: "k-left" });
    var next = h("button", { class: "btn solid", type: "button" }, [last ? "Submit my answers" : "Continue"]);
    var status = h("p", { class: "k-status", role: "status" });
    var hp = h("input", { class: "k-hp", type: "text", name: "website", tabindex: "-1", autocomplete: "off", "aria-hidden": "true" });
    function update() {
      var r = remaining(s);
      left.textContent = r ? r + (r === 1 ? " question left on this page" : " questions left on this page") : "All answered";
      next.disabled = !!r;
    }
    next.addEventListener("click", function () {
      if (remaining(s)) return;
      if (!last) { tick(); state.step++; save(); render(); return; }
      tick(); save(); submit(next, status, hp.value);
    });
    var pct = Math.round((state.step / steps.length) * 100);
    var kids = [
      h("div", { class: "k-step-top" }, [h("p", { class: "eyebrow", style: "margin:0", text: "Section " + (state.step + 1) + " of " + steps.length }), h("span", { class: "k-left", text: "About five minutes, plus your own words" })]),
      h("div", { class: "k-bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(pct) }, [h("i", { style: "width:" + pct + "%" })]),
      h("h2", { text: s.title })
    ];
    if (s.intro) kids.push(h("p", { class: "k-intro", text: s.intro }));
    s.questions.forEach(function (q, k) { kids.push(questionEl(q, start + k + 1, update)); });
    kids.push(hp);
    kids.push(h("div", { class: "k-nav" }, [
      h("button", { class: "textlink k-back", type: "button", onclick: function () { tick(); state.step--; save(); render(); } }, ["Back"]),
      h("div", { style: "display:flex;gap:18px;align-items:center;flex-wrap:wrap" }, [left, next])
    ]));
    kids.push(status);
    update();
    show(shell(kids), "h2");
  }

  function submit(btn, status, honeypot) {
    btn.disabled = true; btn.textContent = "Sending…"; say(status, "", false);
    var payload = {
      m: access, type: isRetake ? "retake" : "baseline", website: honeypot,
      name: state.info.name.trim(), email: state.info.email.trim(), country: state.info.country, consent: !!state.info.consent,
      answers: state.answers, times: state.times
    };
    fetch("/.netlify/functions/keel", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok && j.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.j.error || "We could not save your answers. Please try again.");
        clear(); done();
      })
      .catch(function (e) {
        say(status, e.message || "We could not save your answers. Please try again; nothing on this page has been lost.");
        btn.disabled = false; btn.textContent = "Submit my answers";
      });
  }

  function done() {
    show(shell([
      h("p", { class: "eyebrow", text: "Keel" }),
      h("h1", { text: "Thank you." }),
      h("p", { class: "deck", text: "Your report will be with you before your debrief. Your facilitator will have read it first, so your 30 minutes go straight to what matters." }),
      h("a", { class: "btn", href: "/concentric/" }, ["Back to Concentric"])
    ]));
  }

  function render() {
    if (!access) return locked();
    if (state.step < 0) return intro();
    if (state.step >= steps.length) state.step = steps.length - 1;
    stepScreen();
  }
  render();
})();
