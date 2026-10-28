/* Two-question Keel sample on the homepage. Nothing is stored or sent. */
(function () {
  var box = document.getElementById("try-card");
  if (!box) return;
  var QS = [
    { q: "In a survey of founders who raised a funding round, 90% had worked with a pitch coach. Does this show pitch coaching helps founders raise money?",
      opts: ["Yes. 90% is a strong signal", "No. We don't know how many founders who failed to raise also had a coach", "Only if the survey was large enough"], correct: 1,
      why: "The survey only looked at founders who succeeded. If 90% of founders who failed also had a coach, coaching tells you nothing. The missing comparison is the whole argument." },
    { q: "Your team hit its target in four of the last five quarters. A new hire joined in the one quarter you missed. What can you conclude about the new hire?",
      opts: ["They probably hurt performance", "They need more support", "Nothing yet"], correct: 2,
      why: "One quarter and one coincidence is not evidence. Reading cause into timing is one of the most common reasoning traps in senior decisions." }
  ];
  var CONF = [["Guessing", 25], ["Fairly sure", 60], ["Very sure", 85], ["Certain", 100]];
  var step = 0, phase = "q", answers = [];

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function btn(label, cls, fn) { var b = el("button", cls, label); b.type = "button"; b.addEventListener("click", fn); return b; }
  function focusFirst() { var f = box.querySelector("button"); if (f && box.dataset.started) f.focus({ preventScroll: true }); }

  function render() {
    box.innerHTML = "";
    if (phase === "result") return result();
    var Q = QS[step];
    box.appendChild(el("p", "try-step", "Question " + (step + 1) + " of " + QS.length + (phase === "conf" ? " · How sure are you?" : "")));
    box.appendChild(el("p", "try-q", phase === "conf" ? "How sure are you of that answer?" : Q.q));
    var wrap = el("div", phase === "conf" ? "try-opts try-conf" : "try-opts");
    if (phase === "q") Q.opts.forEach(function (o, i) { wrap.appendChild(btn(o, "try-opt", function () { box.dataset.started = 1; answers[step] = { pick: i }; phase = "conf"; render(); })); });
    else CONF.forEach(function (c) { wrap.appendChild(btn(c[0], "try-opt", function () { answers[step].conf = c[1]; step++; phase = step < QS.length ? "q" : "result"; render(); })); });
    box.appendChild(wrap); focusFirst();
  }

  function result() {
    var right = 0, sum = 0, sureWrong = false, doubtRight = false;
    answers.forEach(function (a, i) { var ok = a.pick === QS[i].correct; if (ok) right++; sum += a.conf; if (!ok && a.conf >= 85) sureWrong = true; if (ok && a.conf <= 60) doubtRight = true; });
    var conf = sum / QS.length, gap = conf - (right / QS.length) * 100, title, body;
    if (sureWrong) { title = "You were sure, and you were wrong."; body = "That gap between confidence and accuracy is one of the costliest in a senior role, because it is invisible from the inside. It is what Keel measures."; }
    else if (gap <= -20 || doubtRight) { title = "You were right, and you doubted yourself."; body = "Underconfidence costs as much as overconfidence: decisions slow down and other voices fill the gap. Keel shows where your judgment is stronger than you give it credit for."; }
    else if (right === QS.length) { title = "Accurate, and your confidence matched."; body = "Two questions is a small sample. Keel tests this properly, alongside how you weigh evidence, solve problems and commit."; }
    else { title = "Your confidence was in the right place."; body = "You knew when you were unsure. That is rarer than getting every answer right, and Keel maps it in depth."; }
    var r = el("div", "try-result");
    r.appendChild(el("p", "try-tally", right + " of " + QS.length + " correct · average confidence " + Math.round(conf) + "%"));
    r.appendChild(el("h3", null, title));
    r.appendChild(el("p", null, body));
    var why = el("div", "try-why");
    QS.forEach(function (Q, i) { var p = el("p"); var s = el("strong", null, "Q" + (i + 1) + ": " + Q.opts[Q.correct] + ". "); p.appendChild(s); p.appendChild(document.createTextNode(Q.why)); why.appendChild(p); });
    r.appendChild(why);
    var acts = el("div", "try-actions");
    var w = el("a", "btn solid", "Become a founding member →"); w.href = "/concentric/#membership"; w.rel = "noopener"; acts.appendChild(w);
    var a = el("a", "textlink", "See membership"); a.href = "#membership"; acts.appendChild(a);
    acts.appendChild(btn("Start again", "try-btn", function () { step = 0; phase = "q"; answers = []; render(); }));
    r.appendChild(acts);
    box.appendChild(r);
    var h = r.querySelector("h3"); h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true });
  }
  render();
})();
