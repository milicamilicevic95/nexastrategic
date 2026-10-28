/* Keel question spec. One source for the page and the Netlify function.
   Option text must match the Report Studio scoring exactly. Do not reword an option
   without updating the studio. Field ids are the Airtable Diagnostics table. */
(function (root) {
  var CONF = ["Guessing", "Fairly sure", "Very sure", "Certain"];
  var LIKERT = ["Very inaccurate", "Moderately inaccurate", "Neither accurate nor inaccurate", "Moderately accurate", "Very accurate"];

  var SPEC = {
    fields: {
      Submission: "fld2YPgBv04s2hK37", Email: "flddYgP5SNnyjLBkx", Member: "fldK6vItlz5XEicoj",
      Submitted: "fldNd8WCKgKKFbhhd", Type: "fldzqll5EBKNX9UB2", Country: "fldcGWCFi9ips8NDC",
      Consent: "fldAT28W55Z1xP05j", Status: "fldz6SgUghLagXRo2",
      Q1: "fldbOxP3NYHBeDdMM", Q3: "fldmM0MwouEDtaAAh", Q4: "fldYC9EjN9UHdyy05",
      Q5: "fldcHicZXzGyfaE3y", Q6: "fldKoCHzNRXvOdxnL", Q8: "fldtMoAlCEVHTXeuP",
      Q9: "fldRYlOAgNaeK2AiL", Q10: "fldXO25lS4O3W9dQw", Q11: "fldFlFiP0AmlyZAJP",
      Q13: "fld8tk8dcBED6MMgB", Q14: "fldkTc60UHLljbcpW", Q15: "fldnEF9xpBiOtBMQl",
      Q32: "fldqyhs2TCQ93Di62", Q35: "fldJl8oVurn8iz8kl", Q38: "fld4cpPuZK4BgIO27", Q40: "fldIlP74WSa8L9ikJ",
      Q19: "fldEuW3H9Zy1bR6Ug", C19: "fldWX7iBtoHCi3Nt7", Q20: "fld2OjQO5RnxKWHrA", C20: "fldpjBSq3MLaQPYat",
      Q21: "flddgGqj3K4tHBAnB", C21: "fldBCLijxdhZT21lq", Q41: "fldDboHbVvIyV4CmJ", C41: "fldUKX90bfq4JqSiD",
      Q43: "flde3H64UJIOJ6OkW", C43: "fld96iBLuZwhM3lEE", Q44: "fld6WLAwbmCCVKfxd", C44: "fldfW6V3NCjEEERaX",
      Q22: "fldmmSscNQlhclkTK", Q24: "fld04Hxwz2veYQFQ6", Q26: "fldTx5NuISyLHggpa", Q27: "fldEDfqA6Hv0NwPUb",
      Q25: "fldnXCUH4oqKWkZmh", Q28: "fldJDoOJNHFvNavto",
      Duration: "fld9WXXJ32V8oLll2", SectionTimes: "fldJkfw0fyH5TJIDO",
      Q45: "fld4thBKkSx0Si2kc", Q46: "fldMkFNxO0GYxm2mQ", Q47: "fldzb3I6BLhOKoSRu",
      Q48: "fldcWZoEURhzrEAlQ", Q49: "fldNvQsVdfEmVAhlv", Q50: "fldz6T3KbnvGEhE8w"
    },
    countries: ["United States", "Somewhere else"],
    conf: CONF,
    steps: [
      {
        id: "work", title: "How you work",
        intro: "Each situation has two reasonable responses. Choose the one closest to what you have done, or would do, in your current role.",
        questions: [
          { id: "Q1", shuffle: true, text: "Ten minutes before you present to the executive team, a colleague sends you a statistic that would win the room. You can't trace the source in time. You:", options: ["Leave it out and make the case without it", "Use it, say it is still being verified, and check it afterwards"] },
          { id: "Q3", shuffle: true, text: "A consultant's report backs the restructure you have argued for all year. You:", options: ["Ask the biggest skeptic on your team to find what it got wrong before you rely on it", "Take it to the CEO this week while the case is strong"], store: { "Ask the biggest skeptic on your team to find what it got wrong before you rely on it": "Ask the biggest sceptic on your team to find what it got wrong before you rely on it" } },
          { id: "Q4", shuffle: true, text: "Your three closest competitors have moved their teams onto AI tools in the last six months. You:", options: ["Run a small pilot and wait for your own results before committing", "Commit now; waiting a year for proof would leave you behind"] },
          { id: "Q5", shuffle: true, text: "You are asked to cut 15% from a budget you have never managed. You start by:", options: ["Breaking it into lines and finding out what each one pays for", "Asking what worked the last time you saw a cut like this"] },
          { id: "Q6", shuffle: true, text: "Your flagship project is six weeks late, and each team lead blames someone else. You:", options: ["Rebuild the timeline yourself to find exactly where it slipped", "Talk to each lead one to one and follow what doesn't add up"] },
          { id: "Q8", shuffle: true, text: "Client retention has fallen for two quarters and you have a week to propose a fix. You would rather:", options: ["Spend the first two days getting the numbers and defining the problem", "Call five clients on day one and adjust as you learn"] },
          { id: "Q9", shuffle: true, text: "In a board meeting, the CEO asks for your view on an acquisition you first heard about that morning. You:", options: ["Give a clear view now and say you will refine it", "Say you will come back with a considered view by Friday"] },
          { id: "Q10", shuffle: true, text: "Think of the best decision you made in the last year. You made it:", options: ["In the room, under some pressure", "After stepping away and coming back to it"] },
          { id: "Q11", shuffle: true, text: "A 40 page board pack lands the night before the meeting. You:", options: ["Read the summary and the sections that matter, then form a view", "Read it in full before forming a view"] },
          { id: "Q13", shuffle: true, text: "A senior hire you need is available now. Two of her three references are back and both are strong. You:", options: ["Make the offer now", "Wait for the third, even if you risk losing her"] },
          { id: "Q14", shuffle: true, text: "A week after you announce a restructure, a respected peer raises a concern you had not considered. You:", options: ["Hold the decision unless the concern changes the facts", "Reopen the decision and test it properly"] },
          { id: "Q15", shuffle: true, text: "Two finalists for a key role are close, and both teams are waiting on your decision. You:", options: ["Choose one this week and make it work", "Bring both back for another round, even if it slows things down"] }
        ]
      },
      {
        id: "others", title: "Deciding with others",
        intro: "Six more situations, about the people around a decision. Again, both responses are reasonable. Choose the one closest to what you would do.",
        questions: [
          { id: "Q45", shuffle: true, text: "You have decided how to restructure your team. Before you announce it, you:", options: ["Test the plan with two or three of the people it affects", "Finalize it yourself and brief people once it is settled"] },
          { id: "Q46", shuffle: true, text: "You are choosing your deputy from two strong internal candidates. You:", options: ["Ask the people who will work with them most for their read before you choose", "Choose on your own judgment, since you will be the one managing them"] },
          { id: "Q47", shuffle: true, text: "You are seriously considering a new role elsewhere. Before you decide, you:", options: ["Talk it through with the people it would affect", "Decide first, then tell the people it affects"] },
          { id: "Q48", shuffle: true, text: "In a leadership meeting, a senior colleague presents a plan you think will fail. You:", options: ["Say so in the meeting and explain why", "Raise it with them privately afterward"] },
          { id: "Q49", shuffle: true, text: "A high performer on your team has started missing deadlines. You:", options: ["Name the pattern in your next one to one and ask what is going on", "Ask how things are going and give them room to raise it"] },
          { id: "Q50", shuffle: true, text: "Your CEO asks for honest feedback on a strategy you have doubts about. You:", options: ["Give your doubts plainly, most serious first", "Lead with what works, then raise your main concern carefully"] }
        ]
      },
      {
        id: "self", title: "How you would describe yourself",
        intro: "Describe yourself as you generally are now, not as you wish to be.",
        questions: [
          { id: "Q32", scale: true, text: "I am sure of my ground.", options: LIKERT },
          { id: "Q35", scale: true, text: "I am easily intimidated.", options: LIKERT },
          { id: "Q38", scale: true, text: "I know immediately what to do.", options: LIKERT },
          { id: "Q40", scale: true, text: "I have a low opinion of myself.", options: LIKERT }
        ]
      },
      {
        id: "reasoning", title: "Reasoning",
        intro: "Six short questions, each with one best answer. After each, say how sure you are. How sure you are matters as much as the answer.",
        questions: [
          { id: "Q19", conf: "C19", text: "Every board member approved the merger. Sarah did not. What follows?", options: ["Sarah is not on the board", "The merger did not go ahead", "Nothing can be concluded"] },
          { id: "Q20", conf: "C20", text: "Eight months and $40,000 into a project, new data shows a different project would now deliver clearly better results for the same remaining cost. You:", options: ["Switch to the new project", "Finish, given what you have already invested", "Finish, because changing course now would look inconsistent"] },
          { id: "Q21", conf: "C21", text: "A price is cut by 20%, then raised by 20%. Compared with the original, it is now:", options: ["The same", "4% lower", "4% higher"] },
          { id: "Q41", conf: "C41", text: "Complaints fell 30% in the six months after a new returns policy. In the same period, the company changed its call center provider. How likely is it that the policy caused the fall?", options: ["Definitely true", "Probably true", "Not enough information", "Probably false", "Definitely false"] },
          { id: "Q43", conf: "C43", text: "Your board chair says: “New York hit target in its first year, so Chicago will too.” Which assumption does this rely on?", options: ["Chicago clients will behave like New York clients", "New York will hit target again", "Chicago is a bigger market"] },
          { id: "Q44", conf: "C44", text: "70% of 400 managers at your company say hybrid working improved their team's output. Does it follow, beyond reasonable doubt, that it did?", options: ["Yes, it follows", "It follows for most teams, not all", "No, it does not follow"] }
        ]
      },
      {
        id: "now", title: "Where you are now",
        intro: "",
        questions: [
          { id: "Q22", other: true, text: "Which best describes the next 12 months for you?", options: ["I am moving into a new role, sector or stage", "I am established and need to be seen and to accelerate", "I am reassessing what I want and whether my path still fits", "I am building or running my own business", "I am stepping up to lead at a senior or board level", "I am returning after a break or a major life change"] },
          { id: "Q26", pick: 2, text: "What matters most to you in your next move? Choose two.", options: ["Recognition: being seen and credited for my work", "Influence: shaping decisions and directing others", "Impact: making things better for other people", "Belonging: working with people I like and trust", "Security: stability for me and the people who depend on me", "Reward: earning well and building wealth", "Mastery: learning and getting really good at something hard", "Freedom: control over how, when and what I do", "Balance: a life outside work that I protect"] },
          { id: "Q27", text: "Under real pressure, people who know you well would say you:", options: ["Take over and decide alone", "Keep analyzing and delay the call", "Smooth things over and avoid the conflict", "Push harder and get sharper with people", "Go quiet and withdraw until it is resolved"] }
        ]
      },
      {
        id: "words", title: "In your words",
        intro: "",
        questions: [
          { id: "Q28", retakeOnly: true, long: true, max: 3000, text: "Six months on: what did you decide about the challenge you brought last time, and how has it turned out?", hint: "A few sentences is plenty." },
          { id: "Q25", long: true, max: 3000, text: "What is the decision or challenge on your mind right now, and what makes it hard?", hint: "Two or three sentences is plenty. Add anything we didn't ask that you would like us to know. Please leave out confidential details about your employer or other people." }
        ]
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) module.exports = SPEC;
  else root.KEEL_SPEC = SPEC;
})(this);
