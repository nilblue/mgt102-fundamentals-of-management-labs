/* MGT102 worksheets — Weeks 13–16 (Lectures 25–32). Authored teaching content. */
(function(){
const {add,fmt,money}=Lab;
const rs=(n,d=0)=>money(n,d,'Rs ');

/* ---------------- L25 ---------------- */
add(25,{
 primer:[
  "<b>Communication</b> is the transfer and understanding of meaning. Its functions are <b>control</b>, <b>motivation</b>, <b>emotional expression</b> and <b>information</b>.",
  "The <b>interpersonal communication process</b>: sender → encoding → message → channel → decoding → receiver, with <b>noise</b> at every step and <b>feedback</b> to check understanding.",
  "<b>Barriers</b>: filtering, emotions, information overload, defensiveness, language and national culture. Overcome them with feedback, simplified language, active listening, controlling emotions and watching nonverbal cues.",
  "<b>Organizational communication</b> can be formal or informal (including the <b>grapevine</b>). Directions: <b>downward</b>, <b>upward</b>, <b>lateral</b> and <b>diagonal</b>. Networks: chain, wheel and all-channel.",
  "<b>Channel richness</b>: face-to-face is richest; written, impersonal channels are leanest."
 ],
 discussion:["How accurate is the campus grapevine? Give an example.","Which barrier causes the most misunderstanding between students and faculty?","When should a manager use WhatsApp, email or face-to-face meetings?"],
 calc:{title:"What-if: a message passed down the chain",
  intro:"A policy passes from the CEO down several levels to front-line staff. Each link keeps only part of the meaning (filtering, noise). Feedback at each step recovers some of the loss.",
  inputs:[
   {k:"links",label:"Number of links in the chain",min:1,max:8,v:5},
   {k:"keep",label:"Meaning kept at each link without feedback (%)",min:50,max:100,step:1,v:80,f:x=>x+"%"},
   {k:"fb",label:"Feedback used at each link",type:"select",options:[["0","No feedback (one-way)"],["1","Some feedback (questions allowed)"],["2","Full two-way feedback"]],v:0}
  ],
  run(v){
   const k=v.keep/100, f=+v.fb, eff=k+(1-k)*[0,0.4,0.7][f];
   const rows=[]; for(let i=0;i<=v.links;i++) rows.push({label:i===0?"CEO (sender)":"Level "+i,value:Math.pow(eff,i)*100,color:i===v.links?"--c4":"--c1"});
   const end=Math.pow(eff,v.links)*100;
   return {stats:[["Meaning reaching the front line",fmt(end)+"%"],["Effective accuracy per link",fmt(eff*100)+"%"]],
    bars:rows,barsOpt:{max:100,fmt:x=>fmt(x)+"%",rowH:24},
    fb:end>=70?["good","Most of the message survives. Short chains and two-way feedback protect meaning."]
     :end>=40?["warn","Much of the message is lost. Reduce the levels it passes through, use simple language and ask for feedback."]
     :["bad","Most of the meaning is lost — like the 'telephone' game. Communicate key messages directly (town halls, video) and confirm understanding."]};
  }},
 sort:{title:"Sort the communication barriers",
  bins:["Filtering","Emotions","Information overload","Defensiveness","Language","National culture"],
  items:[
   ["A manager tells the boss only the good news about a project",0,"Deliberately manipulating information to make it appear more favourable."],
   ["An angry customer misreads a polite reply as sarcastic",1,"Feelings change how a message is interpreted."],
   ["Receiving 200 emails a day and missing the important one",2,"Information exceeds processing capacity."],
   ["An employee responds to feedback by attacking the supervisor",3,"Feeling threatened leads to verbal attacks or sarcasm."],
   ["Technical jargon confuses new staff",4,"Words mean different things to different people."],
   ["A Pakistani manager's indirect 'we'll see' is read as 'yes' by a foreign partner",5,"Cultural differences in communication style."]
  ],
  then:{title:"Sort: which direction of communication?",
   bins:["Downward","Upward","Lateral","Diagonal"],
   items:[
    ["A manager explains new targets to the team",0,"From manager to employees."],
    ["An employee sends a suggestion to the head of department",1,"From employees to managers."],
    ["Two branch managers coordinate a joint promotion",2,"Among employees at the same level."],
    ["A finance officer emails the marketing director directly about a budget",3,"Across work areas and levels."]
   ]}},
 dilemma:{title:"Dilemma: delivering difficult news",
  intro:"You manage a branch of a bank. Head office has decided to close your branch in three months; staff will be transferred.",
  meters:[["clarity","Clarity"],["trust","Trust"],["rumour","Rumour control"]],
  steps:[
   {t:"Choosing the channel",x:"The decision is final. How do you tell the staff?",
    c:[["Send a formal email",{clarity:5,trust:-12,rumour:-5},"A lean channel for a rich, emotional message.","bad"],
       ["Meet the whole team face-to-face, then follow up with written details",{clarity:15,trust:15,rumour:10},"Rich channel for an emotional message, plus a written record.","good"],
       ["Tell a few senior staff and let them pass it on",{clarity:-10,trust:-10,rumour:-15},"Feeds the grapevine and distorts the message.","bad"]]},
   {t:"Handling questions",x:"Staff are worried about transfers and respond defensively.",
    c:[["Answer only 'it's head office's decision'",{clarity:-5,trust:-10,rumour:-8},"Shuts down feedback.","bad"],
       ["Listen actively, answer what you can and promise dates for what you can't",{clarity:12,trust:12,rumour:12},"Active listening and feedback overcome defensiveness.","good"],
       ["Postpone questions to a later meeting",{clarity:-3,trust:-3,rumour:-10},"The grapevine fills the gap.","warn"]]}
  ],
  lesson:"Match channel richness to the message, and use feedback and active listening to make sure meaning gets through."},
 select:{title:"Selector: which communication channel?",
  intro:"Rate the message (0–10). The selector reflects channel richness.",
  criteria:[["The message is complex or ambiguous",5],["The message is emotional or sensitive",5],["A permanent record is needed",5],["It must reach many people",5],["It is urgent",5]],
  options:[
   ["Face-to-face meeting",[5,5,1,2,3],"Richest channel: immediate feedback and nonverbal cues."],
   ["Video call",[4,4,1,3,4],"Rich and fast across locations."],
   ["Phone call",[3,3,1,1,5],"Quick, personal, no record."],
   ["Email",[2,1,5,5,3],"Lean but documented and scalable."],
   ["Formal memo or notice",[1,1,5,4,1],"Official record for policies."],
   ["Instant messaging (e.g. WhatsApp group)",[1,1,2,4,5],"Fast for short, simple updates."]
  ]},
 quiz:{q:[
  ["The deliberate manipulation of information to make it appear more favourable is…",["Defensiveness","Filtering","Noise","Encoding"],1,"Filtering."],
  ["Communication that flows from employees to managers is…",["Downward","Upward","Lateral","Diagonal"],1,"Upward."],
  ["Which is the richest channel?",["Email","Formal report","Face-to-face","Bulletin"],2,"Face-to-face."],
  ["Disturbances that interfere with the transmission or understanding of a message are…",["Feedback","Noise","Channels","Decoding"],1,"Noise."],
  ["The informal organizational communication network is the…",["Chain","Grapevine","Wheel","Hierarchy"],1,"Grapevine."]
 ]}
});

/* ---------------- L26 ---------------- */
add(26,{
 primer:[
  "<b>Information technology</b> improves managers' ability to monitor performance and gives employees more complete information. Networked tools include email, instant messaging, intranets, extranets, voice and video conferencing and mobile communication.",
  "<b>Communication issues today</b>: managing communication in an internet world (legal and security issues; lack of personal interaction), managing the organization's <b>knowledge resources</b>, the role of communication in <b>customer service</b>, getting <b>employee input</b> and communicating <b>ethically</b>.",
  "An <b>intranet</b> is an internal network using internet technology accessible only to employees; an <b>extranet</b> also gives access to authorized outsiders such as suppliers and customers.",
  "<b>Information overload</b> and constant interruptions reduce productivity; good managers set norms for digital communication."
 ],
 discussion:["Should employers monitor employees' WhatsApp groups used for work? Where is the line?","How could COMSATS use an intranet to manage knowledge between departments?","What makes a customer-service message on social media 'ethical'?"],
 calc:{title:"What-if: hours lost to information overload",
  intro:"Estimate how much of a manager's 40-hour week goes to email, messaging, meetings and refocusing after interruptions.",
  inputs:[
   {k:"em",label:"Emails and work messages per day",min:0,max:300,step:5,v:80},
   {k:"mpm",label:"Average minutes per message",min:0.5,max:5,step:0.5,v:1.5,f:x=>x+" min"},
   {k:"meet",label:"Meeting hours per week",min:0,max:30,step:1,v:10},
   {k:"intr",label:"Interruptions per day",min:0,max:60,step:1,v:20},
   {k:"refocus",label:"Minutes to refocus after each interruption",min:0,max:20,step:1,v:5}
  ],
  run(v){
   const msg=v.em*v.mpm*5/60, intr=v.intr*v.refocus*5/60, tot=msg+v.meet+intr, deep=Math.max(0,40-tot);
   return {stats:[["Messaging (h/week)",fmt(msg,1)],["Meetings (h/week)",fmt(v.meet,1)],["Lost to interruptions (h/week)",fmt(intr,1)],["Left for focused work",fmt(deep,1)+" h"]],
    bars:[{label:"Messaging",value:msg,color:"--c1"},{label:"Meetings",value:v.meet,color:"--c4"},{label:"Refocusing",value:intr,color:"--c5"},{label:"Focused work",value:deep,color:"--c3"}],barsOpt:{max:40,fmt:x=>fmt(x,1)+"h"},
    fb:deep>=20?["good","Over half the week is left for focused work."]
     :deep>=10?["warn","Only "+fmt(deep,1)+" hours a week for focused work. Batch messages, shorten meetings and set 'quiet hours'."]
     :["bad","Almost no time left for real work. Information overload is a serious communication barrier — agree team norms on channels, response times and meeting length."]};
  }},
 sort:{title:"Sort the situations into today's communication issues",
  bins:["Legal & security","Lack of personal interaction","Managing knowledge","Customer service","Employee input","Ethical communication"],
  items:[
   ["An employee forwards confidential client data to a personal email",0,"Legal and security risks of electronic communication."],
   ["Offensive jokes shared on a company chat group",0,"Legal risk (harassment)."],
   ["A remote team never meets and misunderstandings grow",1,"Technology can reduce personal interaction."],
   ["Experienced engineers retire and their know-how is lost",2,"Knowledge resources must be captured and shared."],
   ["Building an online library of solved customer cases",2,"Knowledge management."],
   ["Call-centre scripts that let agents respond personally",3,"Communication shapes service quality."],
   ["A suggestion app where staff can share improvement ideas",4,"Getting employee input."],
   ["Hiding product risks in fine print",5,"Unethical communication — misleading by omission."]
  ],
  then:{title:"Sort: intranet or extranet?",
   bins:["Intranet (employees only)","Extranet (authorized outsiders too)"],
   items:[
    ["HR policies and leave forms for staff",0,"Internal."],
    ["Internal knowledge base of best practices",0,"Internal."],
    ["Supplier portal to view purchase orders",1,"Outside partners."],
    ["Distributor portal for stock and orders",1,"Outside partners."]
   ]}},
 dilemma:{title:"Dilemma: the leaked screenshot",
  intro:"A staff member posts a screenshot of an internal WhatsApp group discussing a customer complaint. It includes the customer's phone number.",
  meters:[["security","Data security"],["trust","Employee trust"],["cust","Customer trust"]],
  steps:[
   {t:"Immediate response",x:"The post is spreading online.",
    c:[["Ignore it",{security:-15,trust:0,cust:-15},"Privacy breaches create legal and reputational risk.","bad"],
       ["Ask for removal, contact the customer to apologize and investigate calmly",{security:10,trust:5,cust:12},"Fast, honest and respectful.","good"],
       ["Fire the employee publicly the same day",{security:5,trust:-15,cust:3},"Harsh public action without due process damages trust.","warn"]]},
   {t:"Preventing a repeat",x:"How do you stop this happening again?",
    c:[["Ban all phones at work",{security:5,trust:-12,cust:0},"Over-reaction that hurts productivity and morale.","warn"],
       ["Move customer work to a secure official platform and train staff on a clear communication policy",{security:15,trust:8,cust:8},"Managers must manage legal and security issues in an internet world.","good"],
       ["Read everyone's private chats",{security:5,trust:-20,cust:0},"Monitoring private messages raises ethical and legal concerns.","bad"]]}
  ],
  lesson:"Digital tools make communication fast but create legal, security and ethical responsibilities."},
 select:{title:"Selector: how should we manage knowledge?",
  intro:"Rate the organization's knowledge problems (0–10).",
  criteria:[["Know-how leaves when experts retire",5],["Departments repeat each other's mistakes",5],["New hires take too long to become productive",5],["Staff ideas are never collected",5],["Information is scattered across emails",5]],
  options:[
   ["Intranet knowledge base",[3,4,3,1,5],"A searchable store of documents and solutions."],
   ["Communities of practice",[4,5,2,2,2],"Groups who share expertise on a topic."],
   ["Mentoring and job shadowing",[5,2,5,1,1],"Transfers tacit knowledge person to person."],
   ["Suggestion and idea systems",[1,2,1,5,1],"Collects employee input."],
   ["Enterprise collaboration platform",[2,4,3,3,4],"Shared channels replace scattered emails."]
  ]},
 quiz:{q:[
  ["An internal communication network accessible only to employees is an…",["Extranet","Intranet","Internet","Grapevine"],1,"Intranet."],
  ["A network that also lets authorized suppliers and customers in is an…",["Intranet","Extranet","LAN","Email list"],1,"Extranet."],
  ["A major drawback of IT-based communication is…",["Too much personal interaction","Legal and security issues and reduced personal interaction","No speed","No records"],1,"Both are listed by Robbins."],
  ["Organizing and sharing an organization's know-how is…",["Knowledge management","Filtering","Grapevine","Downsizing"],0,"Knowledge management."],
  ["Communicating ethically means…",["Including all relevant information, being true in every sense and not deceptive","Only telling good news","Using technical jargon","Avoiding feedback"],0,"Ethical communication."]
 ]}
});

/* ---------------- L27 ---------------- */
add(27,{
 primer:[
  "<b>Motivation</b> is the process by which a person's efforts are energized, directed and sustained towards a goal.",
  "<b>Early theories</b>: Maslow's hierarchy of needs (physiological, safety, social, esteem, self-actualization); McGregor's Theory X and Theory Y; Herzberg's two-factor theory (<b>hygiene factors</b> prevent dissatisfaction; <b>motivators</b> create satisfaction); McClelland's needs for achievement, power and affiliation.",
  "<b>Contemporary theories</b>: goal-setting, reinforcement, job design, equity and expectancy.",
  "<b>Job characteristics model (JCM)</b>: skill variety, task identity, task significance, autonomy and feedback. Motivating Potential Score = [(SV + TI + TS) ÷ 3] × A × F."
 ],
 discussion:["Which of Maslow's needs does a fresh graduate's first job satisfy?","Is a Pakistani government office more Theory X or Theory Y? Why?","Redesign the job of a bank teller to raise its MPS."],
 calc:{title:"What-if: Motivating Potential Score (job characteristics model)",
  intro:"Rate a job on the five core dimensions (1–7). Because autonomy and feedback multiply the score, a job low on either has low motivating potential however varied it is.",
  inputs:[
   {k:"sv",label:"Skill variety",min:1,max:7,v:3},
   {k:"ti",label:"Task identity (doing a whole piece of work)",min:1,max:7,v:4},
   {k:"ts",label:"Task significance (impact on others)",min:1,max:7,v:5},
   {k:"a",label:"Autonomy",min:1,max:7,v:2},
   {k:"f",label:"Feedback from the job",min:1,max:7,v:3}
  ],
  run(v){
   const mps=(v.sv+v.ti+v.ts)/3*v.a*v.f, low=[["skill variety",v.sv],["task identity",v.ti],["task significance",v.ts],["autonomy",v.a],["feedback",v.f]].sort((x,y)=>x[1]-y[1])[0];
   return {stats:[["Motivating Potential Score",fmt(mps)+" / 343"],["Weakest dimension",low[0]]],
    bars:[{label:"Skill variety",value:v.sv},{label:"Task identity",value:v.ti},{label:"Task significance",value:v.ts},{label:"Autonomy",value:v.a,color:"--c4"},{label:"Feedback",value:v.f,color:"--c4"}],barsOpt:{max:7},
    fb:mps>=125?["good","<b>High motivating potential.</b> People in this job are more likely to experience meaningful work, responsibility and knowledge of results."]
     :mps>=50?["info","<b>Moderate.</b> Improve the weakest dimension ("+low[0]+"). Raising autonomy or feedback has the biggest effect because they multiply the score."]
     :["warn","<b>Low motivating potential.</b> Redesign: combine tasks, form natural work units, establish client relationships, expand jobs vertically (more autonomy) and open feedback channels."]};
  }},
 sort:{title:"Sort Herzberg's factors",
  bins:["Hygiene factors (prevent dissatisfaction)","Motivators (create satisfaction)"],
  items:[
   ["Salary",0,"Extrinsic, job-context factor."],
   ["Company policy and administration",0,"Hygiene."],
   ["Working conditions",0,"Hygiene."],
   ["Relationship with supervisor",0,"Hygiene."],
   ["Job security",0,"Hygiene."],
   ["Achievement",1,"Intrinsic, job-content factor."],
   ["Recognition",1,"Motivator."],
   ["Responsibility",1,"Motivator."],
   ["Growth and advancement",1,"Motivator."],
   ["The work itself",1,"Motivator."]
  ],
  then:{title:"Sort workplace examples into Maslow's hierarchy",
   bins:["Physiological","Safety","Social","Esteem","Self-actualization"],
   items:[
    ["A wage that covers food and rent",0,"Basic needs."],
    ["A permanent contract and health insurance",1,"Security and protection."],
    ["Friendly colleagues and team lunches",2,"Belonging and acceptance."],
    ["Employee-of-the-month award",3,"Status and recognition."],
    ["Leading a project that uses your full potential",4,"Growth and achieving one's potential."]
   ]}},
 dilemma:{title:"Dilemma: motivating the packing line",
  intro:"You supervise 30 workers packing biscuits in Hattar. The job is repetitive and absenteeism is high.",
  meters:[["motiv","Motivation"],["prod","Productivity"],["cost","Cost control"]],
  steps:[
   {t:"First move",x:"Head office suggests a pay rise.",
    c:[["Give a 10% pay rise and change nothing else",{motiv:5,prod:3,cost:-12},"Pay is a hygiene factor: it reduces dissatisfaction but rarely creates lasting motivation.","warn"],
       ["Rotate workers between packing, quality check and machine setup",{motiv:10,prod:5,cost:0},"Job rotation and enlargement add skill variety.","good"],
       ["Tighten supervision and dock pay for absence",{motiv:-15,prod:3,cost:3},"Theory X control increases resentment.","bad"]]},
   {t:"Going further",x:"Workers say they never know how they are doing.",
    c:[["Post daily output and quality results for each team and let teams plan their own breaks",{motiv:15,prod:12,cost:3},"Feedback and autonomy raise the MPS sharply.","good"],
       ["Give an annual appraisal only",{motiv:-3,prod:0,cost:0},"Feedback too late to change behaviour.","warn"],
       ["Install cameras to monitor workers",{motiv:-12,prod:2,cost:-5},"Control is not feedback.","bad"]]}
  ],
  lesson:"Hygiene factors prevent dissatisfaction; motivators such as responsibility, feedback and recognition create real motivation."},
 select:{title:"Selector: which job-design approach?",
  intro:"Rate the job and the people doing it (0–10).",
  criteria:[["The job is narrow and repetitive",5],["Workers want more responsibility and control",5],["Workers mainly want variety",5],["Workers rarely see the impact of their work",5],["Skills need to be broadened across tasks",5]],
  options:[
   ["Job enlargement (horizontal: more tasks)",[5,1,4,1,3],"Increases job scope."],
   ["Job enrichment (vertical: more planning and evaluation)",[3,5,2,3,2],"Increases job depth — the degree of control."],
   ["Job rotation",[4,1,5,1,5],"Moves workers between tasks."],
   ["Relational job design (contact with beneficiaries)",[2,2,2,5,1],"Shows people how their work helps others."]
  ]},
 quiz:{q:[
  ["In Herzberg's theory, salary and working conditions are…",["Motivators","Hygiene factors","Self-actualization needs","Achievement needs"],1,"Hygiene factors."],
  ["The assumption that employees dislike work and must be coerced is…",["Theory Y","Theory X","Equity theory","Expectancy theory"],1,"Theory X."],
  ["In the JCM, which two dimensions multiply the MPS?",["Skill variety and task identity","Autonomy and feedback","Task significance and variety","Pay and security"],1,"Autonomy and feedback."],
  ["The highest level of Maslow's hierarchy is…",["Esteem","Social","Self-actualization","Safety"],2,"Self-actualization."],
  ["Increasing the degree to which workers control the planning and evaluation of their work is…",["Job enlargement","Job enrichment","Job rotation","Job sharing"],1,"Job enrichment (job depth)."]
 ]}
});

/* ---------------- L28 ---------------- */
add(28,{
 primer:[
  "<b>Expectancy theory</b> (Vroom): motivation depends on <b>expectancy</b> (effort → performance), <b>instrumentality</b> (performance → reward) and <b>valence</b> (attractiveness of the reward). If any link is weak, motivation falls.",
  "<b>Equity theory</b>: employees compare their outcome/input ratio with a referent. Under-reward or over-reward leads people to change inputs or outcomes, distort perceptions, choose a different referent or leave.",
  "<b>Current issues</b>: motivating in tough economic times, cross-cultural challenges, unique groups (diverse workforce, professionals, contingent workers, low-skilled minimum-wage employees), and programmes such as <b>open-book management</b>, <b>employee recognition</b> and <b>pay-for-performance</b>.",
  "<b>Integrating</b> the theories: opportunity and effort lead to performance; performance must lead to rewards that are fair and satisfy dominant needs."
 ],
 discussion:["Why might a bonus fail to motivate if employees think targets are impossible?","Compare your effort and marks with a classmate's. How do you react if the ratio feels unfair?","What motivates freelance (contingent) workers in Pakistan's gig economy?"],
 calc:{title:"What-if: expectancy theory (M = E × I × V)",
  intro:"A sales officer is offered a bonus for reaching a target. Set the three links to see the motivational force.",
  inputs:[
   {k:"e",label:"Expectancy: 'If I try hard, I can reach the target' (0–1)",min:0,max:1,step:0.05,v:0.6,f:x=>x.toFixed(2)},
   {k:"i",label:"Instrumentality: 'If I reach it, I will really get the bonus' (0–1)",min:0,max:1,step:0.05,v:0.7,f:x=>x.toFixed(2)},
   {k:"vl",label:"Valence: how much the bonus is valued (−1 to +1)",min:-1,max:1,step:0.05,v:0.8,f:x=>x.toFixed(2)}
  ],
  run(v){
   const m=v.e*v.i*v.vl, weak=[["expectancy",v.e],["instrumentality",v.i],["valence",v.vl]].sort((a,b)=>a[1]-b[1])[0];
   const fix={expectancy:"Provide training, resources and realistic targets.",instrumentality:"Pay rewards reliably and transparently when targets are met.",valence:"Offer rewards people actually value (ask them)."}[weak[0]];
   return {stats:[["Motivational force",m.toFixed(2)],["Weakest link",weak[0]]],
    bars:[{label:"Expectancy",value:v.e},{label:"Instrumentality",value:v.i,color:"--c4"},{label:"Valence",value:v.vl,color:v.vl<0?"--c5":"--c3"},{label:"Motivation (E×I×V)",value:m,color:"--c2"}],barsOpt:{min:-1,max:1,fmt:x=>x.toFixed(2)},
    fb:m>=0.4?["good","Strong motivation — all three links are solid."]
     :m>0?["warn","Motivation is weak because the chain is only as strong as its weakest link — <b>"+weak[0]+"</b>. "+fix]
     :["bad","Zero or negative motivation: the person sees no reason (or a reason not) to try. "+fix]};
  }},
 sort:{title:"Sort: what motivates these unique groups?",
  bins:["Diverse workforce","Professionals","Contingent workers","Low-skilled, minimum-wage employees"],
  items:[
   ["Flexible schedules for employees caring for children or parents",0,"Flexibility suits different needs."],
   ["Respecting different holidays and cultural values",0,"Diverse workforce."],
   ["Challenging projects and up-to-date technology",1,"Professionals value challenging work and support."],
   ["Time and funding to attend conferences",1,"Professionals."],
   ["The chance to become a permanent employee",2,"Contingent workers often want permanence or skill-building."],
   ["Training that builds a portable skills portfolio",2,"Contingent workers."],
   ["Recognition programmes and respectful supervision",3,"Low-cost recognition matters when pay rises are limited."],
   ["Clear, fair schedules and job security",3,"Low-skilled employees."]
  ],
  then:{title:"Sort the equity comparisons",
   intro:"Compare your outcome/input ratio with your referent's.",
   bins:["Under-rewarded (inequity)","Equitable","Over-rewarded (inequity)"],
   items:[
    ["You work 50 hours for Rs 100k; a peer works 40 hours for Rs 100k",0,"Your ratio is lower."],
    ["You and a peer have equal experience, but they earn 20% more",0,"Under-rewarded."],
    ["You work 40 hours for Rs 80k; a peer works 50 hours for Rs 100k",1,"Equal ratios."],
    ["You get the same bonus as a colleague who sold twice as much",2,"Your ratio is higher."]
   ]}},
 dilemma:{title:"Dilemma: a small budget to motivate a team",
  intro:"Your 12-person customer-service team in Islamabad has a tiny rewards budget this year because of tough economic times.",
  meters:[["motiv","Motivation"],["fair","Perceived fairness"],["cost","Budget control"]],
  steps:[
   {t:"Using the budget",x:"You have Rs 120,000 for the year.",
    c:[["Give everyone Rs 10,000 at year end",{motiv:3,fair:5,cost:0},"Equal but unlinked to performance — weak instrumentality.","warn"],
       ["Run a monthly peer-nominated recognition award plus public thanks",{motiv:12,fair:10,cost:3},"Recognition is low-cost and strongly motivating when sincere.","good"],
       ["Give the whole amount to the top performer",{motiv:-3,fair:-12,cost:0},"Others may see the system as unfair.","bad"]]},
   {t:"Open-book management",x:"Staff ask why there are no pay rises.",
    c:[["Say 'company policy'",{motiv:-8,fair:-10,cost:0},"Secrecy breeds suspicion.","bad"],
       ["Share the branch's financial results and show how service quality affects them",{motiv:10,fair:12,cost:0},"Open-book management helps employees see how their work affects results.","good"],
       ["Promise rises next year without a basis",{motiv:5,fair:-5,cost:-5},"Broken promises destroy instrumentality later.","warn"]]}
  ],
  lesson:"When money is short, fairness, recognition and transparency become powerful motivators."},
 select:{title:"Selector: which motivation programme?",
  intro:"Rate the situation (0–10).",
  criteria:[["Pay budget is very limited",5],["Performance can be measured accurately",5],["Employees don't understand how the business makes money",5],["Good work often goes unnoticed",5],["Many employees juggle family responsibilities",5]],
  options:[
   ["Employee recognition programme",[5,2,1,5,2],"Personal attention, approval and appreciation."],
   ["Pay-for-performance",[1,5,2,2,1],"Pays based on a performance measure."],
   ["Open-book management",[4,3,5,2,1],"Shares financial statements with employees."],
   ["Flexible work arrangements",[4,1,1,1,5],"Flextime, telecommuting, compressed weeks."]
  ]},
 quiz:{q:[
  ["In expectancy theory, the belief that performance will lead to a reward is…",["Expectancy","Instrumentality","Valence","Equity"],1,"Instrumentality."],
  ["The persons, systems or selves against which individuals compare themselves are called…",["Referents","Valences","Hygiene factors","Motivators"],0,"Referents."],
  ["Sharing a company's financial statements with all employees is…",["Pay-for-performance","Open-book management","Recognition","Job enrichment"],1,"Open-book management."],
  ["If valence is zero, motivation is…",["Maximum","Zero","Negative","Unaffected"],1,"Any zero link makes the product zero."],
  ["Which is an inexpensive way to motivate in tough times?",["Large bonuses","Employee recognition","Stock options","Company cars"],1,"Recognition."]
 ]}
});

/* ---------------- L29 ---------------- */
add(29,{
 primer:[
  "A <b>leader</b> is someone who can influence others and has managerial authority. <b>Trait theories</b> look for characteristics that distinguish leaders (drive, desire to lead, honesty, self-confidence, intelligence, job knowledge, extraversion).",
  "<b>Behavioural theories</b>: Iowa studies (autocratic, democratic, laissez-faire), Ohio State (initiating structure, consideration), Michigan (employee-oriented, production-oriented) and the managerial grid.",
  "<b>Contingency theories</b>: <b>Fiedler's model</b> (leader-member relations, task structure, position power), <b>Hersey-Blanchard's situational leadership</b> (telling, selling, participating, delegating based on follower readiness) and <b>path-goal theory</b> (directive, supportive, participative, achievement-oriented behaviour).",
  "In Fiedler's model, task-oriented leaders do best in very favourable or very unfavourable situations; relationship-oriented leaders do best in moderately favourable ones."
 ],
 discussion:["Which leadership style did your best teacher use? Was it contingent on the class?","Can leadership traits be learned?","Apply path-goal theory to a cricket captain."],
 calc:{title:"What-if: Fiedler's situational control",
  intro:"Set the three situational factors. The worksheet finds the situation (I–VIII) and the leader style Fiedler predicts will perform best.",
  inputs:[
   {k:"lmr",label:"Leader–member relations",type:"select",options:[["1","Good"],["0","Poor"]],v:1},
   {k:"ts",label:"Task structure",type:"select",options:[["1","High (clear procedures)"],["0","Low (unclear)"]],v:1},
   {k:"pp",label:"Position power",type:"select",options:[["1","Strong (can hire, fire, reward)"],["0","Weak"]],v:0}
  ],
  run(v){
   const l=+v.lmr, t=+v.ts, p=+v.pp;
   const idx=(1-l)*4+(1-t)*2+(1-p); const oct=["I","II","III","IV","V","VI","VII","VIII"][idx];
   const fav=idx<=2?"Highly favourable":idx<=5?"Moderately favourable":"Highly unfavourable";
   const style=(idx<=2||idx>=6)?"Task-oriented leader":"Relationship-oriented leader";
   return {stats:[["Situation",oct],["Situational control",fav],["Best-fit leader",style]],
    bars:[{label:"Leader-member relations",value:l?10:2,color:"--c3"},{label:"Task structure",value:t?10:2,color:"--c1"},{label:"Position power",value:p?10:2,color:"--c4"}],barsOpt:{max:10,fmt:x=>x>5?"High":"Low"},
    fb:["info","<b>Situation "+oct+" — "+fav.toLowerCase()+".</b> Fiedler predicts a <b>"+style.toLowerCase()+"</b> performs best. Because Fiedler assumed a leader's style is fixed, the options are to change the leader or change the situation (e.g. restructure tasks, adjust position power)."]};
  }},
 sort:{title:"Sort the leadership theories",
  bins:["Trait theories","Behavioural theories","Contingency theories"],
  items:[
   ["Leaders have drive, honesty, self-confidence and intelligence",0,"Characteristics that distinguish leaders from non-leaders."],
   ["Iowa studies: autocratic, democratic and laissez-faire styles",1,"What leaders do."],
   ["Ohio State: initiating structure and consideration",1,"Behavioural."],
   ["Michigan: employee-oriented vs production-oriented",1,"Behavioural."],
   ["The managerial grid (concern for people × concern for production)",1,"Behavioural."],
   ["Fiedler's model of situational control",2,"Effectiveness depends on the situation."],
   ["Hersey-Blanchard situational leadership",2,"Style depends on follower readiness."],
   ["Path-goal theory",2,"Leader helps followers reach goals depending on the situation."]
  ],
  then:{title:"Sort: which path-goal leader behaviour?",
   bins:["Directive","Supportive","Participative","Achievement-oriented"],
   items:[
    ["Tells new staff exactly what to do and by when",0,"Lets followers know what is expected and how."],
    ["Shows concern for followers' needs and is friendly",1,"Supportive."],
    ["Consults the team and uses their suggestions",2,"Participative."],
    ["Sets challenging goals and expects top performance",3,"Achievement-oriented."]
   ]}},
 dilemma:{title:"Dilemma: leading two different followers",
  intro:"You manage a marketing team. Hamza joined last month from university; Ayesha has five years' experience but has lost enthusiasm after being passed over for promotion.",
  meters:[["perf","Performance"],["dev","Development"],["rel","Relationships"]],
  steps:[
   {t:"Hamza (unable, but willing)",x:"Hamza is eager but makes basic errors on campaign reports.",
    c:[["Leave him alone to learn by himself (delegating)",{perf:-12,dev:-5,rel:0},"Delegating suits able and willing followers, not beginners.","bad"],
       ["Explain decisions and give clear direction while encouraging him (selling)",{perf:12,dev:12,rel:8},"High task + high relationship fits followers who are willing but not yet able.","good"],
       ["Criticize every mistake publicly",{perf:3,dev:-10,rel:-15},"Damages motivation.","bad"]]},
   {t:"Ayesha (able, but unwilling)",x:"Ayesha delivers but without energy and avoids new tasks.",
    c:[["Give her detailed instructions (telling)",{perf:0,dev:-5,rel:-12},"She is able — micromanaging insults her.","bad"],
       ["Involve her in decisions and support her career goals (participating)",{perf:10,dev:10,rel:12},"Low task, high relationship suits able but unwilling followers.","good"],
       ["Ignore the attitude problem",{perf:-5,dev:-5,rel:-3},"Her readiness will fall further.","warn"]]}
  ],
  lesson:"Contingency theories say effective leaders adjust their style to the situation and the followers."},
 select:{title:"Selector: which Hersey-Blanchard style?",
  intro:"Rate the follower (0–10).",
  criteria:[["Follower lacks the skills for the task",5],["Follower lacks confidence or willingness",5],["Follower has strong skills",5],["Follower is motivated and confident",5]],
  options:[
   ["Telling (high task, low relationship)",[5,5,1,1],"For followers unable and unwilling (R1)."],
   ["Selling (high task, high relationship)",[5,2,1,4],"For followers unable but willing (R2)."],
   ["Participating (low task, high relationship)",[1,5,5,2],"For followers able but unwilling (R3)."],
   ["Delegating (low task, low relationship)",[1,1,5,5],"For followers able and willing (R4)."]
  ]},
 quiz:{q:[
  ["Which theory says leadership effectiveness depends on matching style to situational control?",["Path-goal","Fiedler's model","Trait theory","Managerial grid"],1,"Fiedler's contingency model."],
  ["In the Ohio State studies, structuring one's role and followers' roles to reach goals is…",["Consideration","Initiating structure","Laissez-faire","Delegating"],1,"Initiating structure."],
  ["A leader who lets the group make decisions and complete work however it sees fit is…",["Autocratic","Democratic","Laissez-faire","Directive"],2,"Laissez-faire."],
  ["For followers who are able and willing, Hersey-Blanchard recommend…",["Telling","Selling","Participating","Delegating"],3,"Delegating."],
  ["Path-goal theory's leader who sets challenging goals is…",["Supportive","Directive","Participative","Achievement-oriented"],3,"Achievement-oriented."]
 ]}
});

/* ---------------- L30 ---------------- */
add(30,{
 primer:[
  "<b>Transactional leaders</b> guide followers by exchanging rewards for productivity. <b>Transformational leaders</b> stimulate and inspire followers to achieve extraordinary outcomes.",
  "<b>Charismatic</b> leaders are enthusiastic, self-confident and influence people to behave in certain ways; <b>visionary</b> leaders create and articulate a realistic, credible and attractive vision of the future. <b>Team leaders</b> act as liaisons, troubleshooters, conflict managers and coaches.",
  "<b>21st-century issues</b>: managing power (legitimate, coercive, reward, expert and referent), developing <b>trust</b> (integrity, competence, consistency, loyalty, openness), empowering employees, leading across cultures and becoming an effective leader.",
  "Leading <b>virtual teams</b> and using <b>empowerment</b> are increasingly important."
 ],
 discussion:["Name a transformational leader in Pakistan's business or social sector. What did they do?","Which source of power does a university teacher rely on most?","How can a leader build trust with a team she has never met in person?"],
 calc:{title:"What-if: building a trust profile",
  intro:"Rate a leader on the five dimensions of trust (0–10). Integrity carries the most weight, followed by competence.",
  inputs:[
   {k:"int",label:"Integrity — honesty and truthfulness",min:0,max:10,v:7},
   {k:"com",label:"Competence — technical and interpersonal skills",min:0,max:10,v:8},
   {k:"con",label:"Consistency — reliability and good judgement",min:0,max:10,v:6},
   {k:"loy",label:"Loyalty — willingness to protect others",min:0,max:10,v:5},
   {k:"opn",label:"Openness — sharing ideas and information",min:0,max:10,v:4}
  ],
  run(v){
   const w=[["Integrity","int",0.3],["Competence","com",0.25],["Consistency","con",0.2],["Loyalty","loy",0.15],["Openness","opn",0.1]];
   const idx=w.reduce((s,[,k,x])=>s+v[k]*x,0)*10, low=w.slice().sort((a,b)=>v[a[1]]-v[b[1]])[0];
   return {stats:[["Trust index",fmt(idx)+"/100"],["Weakest dimension",low[0]]],
    bars:w.map(([l,k])=>({label:l,value:v[k],color:v[k]<5?"--c5":"--c3"})),barsOpt:{max:10},
    fb:v.int<5?["bad","<b>Integrity is low.</b> Without honesty, no amount of competence builds trust — it is the most critical dimension."]
     :idx>=70?["good","<b>High trust.</b> Followers will take risks, share information and accept change."]
     :["info","<b>Moderate trust.</b> Strengthen <b>"+low[0].toLowerCase()+"</b>: practise openness, be fair, speak your feelings, tell the truth, be consistent, keep promises and keep confidences."]};
  }},
 sort:{title:"Sort: transactional or transformational behaviour?",
  bins:["Transactional","Transformational"],
  items:[
   ["Pays a bonus for every target reached",0,"Exchange of rewards for productivity."],
   ["Monitors deviations from rules and corrects them",0,"Management by exception."],
   ["Sets clear role requirements and rewards compliance",0,"Transactional."],
   ["Inspires the team with a vision of making Pakistan's best fintech",1,"Inspiration."],
   ["Encourages followers to question old assumptions",1,"Intellectual stimulation."],
   ["Coaches each person according to their needs",1,"Individualized consideration."]
  ],
  then:{title:"Sort the sources of leader power",
   bins:["Legitimate","Coercive","Reward","Expert","Referent"],
   items:[
    ["Authority that comes from the position of branch manager",0,"Formal position."],
    ["Ability to issue warnings or suspend",1,"Power to punish or control."],
    ["Ability to give bonuses and promotions",2,"Power to give positive rewards."],
    ["Respected because she is the best data analyst in the firm",3,"Expertise, special skills or knowledge."],
    ["Followed because people admire and identify with him",4,"Desirable resources or personal traits."]
   ]}},
 dilemma:{title:"Dilemma: leading a virtual team",
  intro:"You lead a software team spread across Lahore, Karachi and Dubai that has never met in person. Deadlines are slipping.",
  meters:[["trust","Trust"],["perf","Performance"],["engage","Engagement"]],
  steps:[
   {t:"Building trust",x:"Team members rarely speak up in calls.",
    c:[["Require cameras on and track online time",{trust:-12,perf:3,engage:-10},"Surveillance signals distrust.","bad"],
       ["Hold short one-to-one calls, share information openly and keep every promise",{trust:15,perf:5,engage:10},"Openness, consistency and integrity build trust.","good"],
       ["Wait for an in-person meeting next year",{trust:-5,perf:-5,engage:-5},"Trust must be built now.","warn"]]},
   {t:"Empowerment",x:"The team asks to choose its own sprint goals.",
    c:[["Refuse — you set the goals",{trust:-8,perf:0,engage:-12},"Limits ownership.","warn"],
       ["Agree, within clear outcomes and quality standards you set together",{trust:10,perf:12,engage:15},"Empowerment increases decision discretion and commitment.","good"],
       ["Let them do whatever they want with no outcomes",{trust:5,perf:-12,engage:5},"Empowerment is not abandonment.","bad"]]}
  ],
  lesson:"Trust and empowerment are the foundation of leadership, especially when the team is virtual."},
 select:{title:"Selector: which leadership approach fits?",
  intro:"Rate the situation (0–10).",
  criteria:[["The organization needs a big change or turnaround",5],["Work is routine with clear targets",5],["Followers need a sense of purpose",5],["Work is done by self-managed teams",5],["The team is spread across locations",5]],
  options:[
   ["Transactional leadership",[1,5,1,2,2],"Clear exchanges of rewards for performance."],
   ["Transformational leadership",[5,2,4,3,3],"Inspires followers to exceed expectations."],
   ["Charismatic-visionary leadership",[5,1,5,2,2],"Articulates an attractive vision of the future."],
   ["Team leadership (coach, liaison, troubleshooter)",[2,2,2,5,4],"Supports teams to manage themselves."]
  ]},
 quiz:{q:[
  ["Leaders who exchange rewards for productivity are…",["Transformational","Transactional","Charismatic","Visionary"],1,"Transactional."],
  ["Power based on special skills or knowledge is…",["Legitimate","Coercive","Expert","Referent"],2,"Expert power."],
  ["The most critical dimension of trust is…",["Openness","Loyalty","Integrity","Consistency"],2,"Integrity."],
  ["Increasing the decision discretion of workers is…",["Delegation only","Empowerment","Coercion","Centralization"],1,"Empowerment."],
  ["Which role is NOT a team-leader role in Robbins?",["Liaison with external constituencies","Troubleshooter","Conflict manager","Auditor of every task"],3,"Team leaders act as liaison, troubleshooter, conflict manager and coach."]
 ]}
});

/* ---------------- L31 ---------------- */
add(31,{
 primer:[
  "<b>Controlling</b> monitors, compares and corrects work performance. The <b>control process</b>: (1) measure actual performance, (2) compare it with a standard, (3) take managerial action.",
  "Managers choose to <b>do nothing</b>, <b>correct actual performance</b> (immediate corrective action or basic corrective action that fixes the cause) or <b>revise the standard</b>. The <b>range of variation</b> is the acceptable deviation.",
  "Types of control by timing: <b>feedforward</b> (before the activity), <b>concurrent</b> (during — e.g. management by walking around) and <b>feedback</b> (after).",
  "Tools: financial controls (ratios, budgets), information controls, the <b>balanced scorecard</b> (financial, customer, internal processes, people/innovation & growth) and benchmarking of best practices."
 ],
 discussion:["Which controls does COMSATS use for academic quality? Classify them as feedforward, concurrent or feedback.","When should a manager revise a standard rather than push for better performance?","Design a balanced scorecard for a university cafeteria."],
 calc:{title:"What-if: comparing performance with the standard",
  intro:"A branch has a monthly sales standard. Set the actual result, the acceptable range of variation and the main cause of any deviation to see what managerial action fits.",
  inputs:[
   {k:"std",label:"Standard (Rs million)",min:10,max:200,step:5,v:100},
   {k:"act",label:"Actual (Rs million)",min:0,max:250,step:1,v:88},
   {k:"rng",label:"Acceptable range of variation (±%)",min:0,max:20,step:1,v:5,f:x=>"±"+x+"%"},
   {k:"cause",label:"Main cause of the deviation",type:"select",options:[["perf","Internal performance problem (training, effort, process)"],["std","The standard was unrealistic"],["ext","A one-off external event (e.g. strike, flood)"]],v:"perf"}
  ],
  run(v){
   const dev=(v.act-v.std)/v.std*100, inside=Math.abs(dev)<=v.rng;
   let act, tone;
   if(inside){ act="<b>Do nothing.</b> Performance is within the acceptable range of variation."; tone="good"; }
   else if(dev>0){ act=v.cause==="std"?"<b>Revise the standard upward</b> — it was too easy.":"<b>Do nothing, but learn.</b> Find out why performance exceeded the standard and spread the practice."; tone="good"; }
   else if(v.cause==="std") { act="<b>Revise the standard.</b> But be careful: employees often blame the standard when performance is the real problem."; tone="info"; }
   else if(v.cause==="ext") { act="<b>Immediate corrective action</b> to recover, then monitor. A one-off cause may not need a permanent change."; tone="warn"; }
   else { act="<b>Basic corrective action.</b> Find how and why performance deviated and fix the source (training, process redesign), not just the symptom."; tone="warn"; }
   return {stats:[["Deviation",(dev>0?"+":"")+fmt(dev,1)+"%"],["Within acceptable range?",inside?"Yes":"No"]],
    bars:[{label:"Lower limit",value:v.std*(1-v.rng/100),color:"--c6"},{label:"Standard",value:v.std,color:"--c1"},{label:"Upper limit",value:v.std*(1+v.rng/100),color:"--c6"},{label:"Actual",value:v.act,color:inside?"--c3":"--c5"}],barsOpt:{fmt:x=>fmt(x,1)},
    fb:[tone,act]};
  }},
 sort:{title:"Sort: feedforward, concurrent or feedback control?",
  bins:["Feedforward (before)","Concurrent (during)","Feedback (after)"],
  items:[
   ["Testing raw cotton quality before production begins",0,"Prevents problems before they occur."],
   ["Training new drivers before they take routes",0,"Feedforward."],
   ["Preventive maintenance on machines",0,"Feedforward."],
   ["A supervisor walking the shop floor and correcting errors",1,"Management by walking around."],
   ["Software that flags a spelling error as you type",1,"Concurrent."],
   ["A monthly financial report comparing budget and actual",2,"Information after the activity is done."],
   ["Customer-satisfaction survey after a hotel stay",2,"Feedback."]
  ],
  then:{title:"Sort the measures into the balanced scorecard",
   bins:["Financial","Customer","Internal processes","People / innovation & growth"],
   items:[
    ["Return on investment",0,"Financial."],
    ["Profit margin",0,"Financial."],
    ["Customer satisfaction score",1,"Customer."],
    ["Repeat-purchase rate",1,"Customer."],
    ["Order-processing time",2,"Internal processes."],
    ["Defect rate",2,"Internal processes."],
    ["Training hours per employee",3,"People/innovation and growth."],
    ["Number of new products launched",3,"Innovation."]
   ]}},
 dilemma:{title:"Dilemma: the falling quality score",
  intro:"You manage a restaurant in Islamabad. Online ratings have dropped from 4.5 to 3.8 in two months.",
  meters:[["quality","Quality"],["cost","Cost"],["team","Team"]],
  steps:[
   {t:"Measuring",x:"How do you find out what is wrong?",
    c:[["Assume it's the chef and replace him",{quality:-5,cost:-10,team:-15},"Acting before measuring.","bad"],
       ["Read every review, observe service at peak hours and track complaint types",{quality:12,cost:0,team:5},"Measure actual performance using several sources: personal observation, statistical reports, oral and written reports.","good"],
       ["Offer discounts to people who post good reviews",{quality:-5,cost:-8,team:0},"Manipulates the measure instead of improving performance.","bad"]]},
   {t:"Taking action",x:"Most complaints are about slow service on weekend nights.",
    c:[["Ask staff to work faster",{quality:3,cost:0,team:-8},"Immediate action that ignores the cause.","warn"],
       ["Redesign the weekend roster and kitchen order flow, then track waiting time weekly",{quality:15,cost:-3,team:8},"Basic corrective action plus ongoing control.","good"],
       ["Lower the standard to 3.8 stars",{quality:-10,cost:0,team:0},"Revising the standard only makes sense when it was unrealistic.","bad"]]}
  ],
  lesson:"Measure, compare with standards, find the cause and correct it — then keep monitoring."},
 select:{title:"Selector: which control tool?",
  intro:"Rate what you need to control (0–10).",
  criteria:[["Overall financial health",5],["Spending against plans",5],["A balanced view of strategy across areas",5],["Daily work quality on the floor",5],["How we compare with the best",5]],
  options:[
   ["Financial ratios",[5,2,2,1,2],"Liquidity, leverage, activity and profitability."],
   ["Budgets",[3,5,1,1,1],"Compare actual spending with the plan."],
   ["Balanced scorecard",[3,2,5,2,2],"Financial, customer, internal process and people measures."],
   ["Management by walking around",[1,1,2,5,1],"Concurrent, personal observation."],
   ["Benchmarking",[2,1,3,2,5],"Search for best practices."]
  ]},
 quiz:{q:[
  ["The three steps of the control process are…",["Plan, organize, lead","Measure, compare, take action","Hire, train, appraise","Scan, forecast, budget"],1,"Measure → compare → act."],
  ["Correcting an activity at once to get performance back on track is…",["Basic corrective action","Immediate corrective action","Feedforward","Revising the standard"],1,"Immediate corrective action."],
  ["Control that takes place while a work activity is in progress is…",["Feedforward","Concurrent","Feedback","Budgetary"],1,"Concurrent."],
  ["The acceptable parameters of variance between actual performance and the standard are the…",["Balanced scorecard","Range of variation","Budget","Benchmark"],1,"Range of variation."],
  ["Which is NOT a balanced-scorecard perspective?",["Financial","Customer","Internal processes","Competitor gossip"],3,"The fourth is people/innovation and growth."]
 ]}
});

/* ---------------- L32 ---------------- */
add(32,{
 primer:[
  "<b>Operations management</b> transforms inputs (people, materials, technology) into outputs (goods and services). <b>Productivity</b> = outputs ÷ inputs; it can be measured for labour alone or as multifactor productivity.",
  "The <b>value chain</b> is the entire series of work activities that add value at each step from raw materials to the finished product in end users' hands. <b>Value chain management</b> requires coordination & collaboration, technology investment, organizational processes, leadership, committed employees and a supportive culture.",
  "<b>Entrepreneurial ventures</b> (Appendix): entrepreneurship is starting new businesses, generally in response to opportunities. Ventures are planned (opportunities, feasibility, business plan), organized (legal form, structure), led (motivating employees) and controlled (managing growth and possible exit).",
  "In Pakistan, common legal forms are the <b>sole proprietorship</b>, <b>partnership</b> and the <b>private limited company</b> registered with the SECP."
 ],
 discussion:["Map the value chain for a cup of tea served at a Wah dhaba.","How could a Pakistani SME raise productivity without large investment?","What are the first three things you would do to test a business idea?"],
 calc:{title:"What-if: productivity this month vs last month",
  intro:"Last month a garment unit produced 10,000 shirts using 2,000 labour hours and Rs 8 million of total inputs (labour, materials, energy). Enter this month's figures to compare labour and multifactor productivity.",
  inputs:[
   {k:"out",label:"Shirts produced this month",min:2000,max:20000,step:100,v:11000},
   {k:"hrs",label:"Labour hours used",min:500,max:4000,step:50,v:2100},
   {k:"inp",label:"Total input cost (Rs million)",min:2,max:20,step:0.1,v:8.4},
   {k:"price",label:"Selling value per shirt (Rs)",min:400,max:3000,step:50,v:1000}
  ],
  run(v){
   const lp0=10000/2000, lp=v.out/v.hrs, mf0=10000*v.price/8e6, mf=v.out*v.price/(v.inp*1e6);
   const dl=(lp/lp0-1)*100, dm=(mf/mf0-1)*100;
   return {stats:[["Labour productivity",fmt(lp,2)+" shirts/hour"],["Change vs last month",(dl>0?"+":"")+fmt(dl,1)+"%"],["Multifactor productivity",fmt(mf,2)+" Rs out per Rs in"],["Change vs last month",(dm>0?"+":"")+fmt(dm,1)+"%"]],
    bars:[{label:"Labour productivity Δ%",value:dl,color:dl>=0?"--c3":"--c5"},{label:"Multifactor productivity Δ%",value:dm,color:dm>=0?"--c3":"--c5"}],barsOpt:{min:-50,max:50,fmt:x=>fmt(x,1)+"%"},
    fb:dl>=0&&dm>=0?["good","Productivity improved on both measures — more output from the inputs used."]
     :dl>=0?["warn","Workers are more productive, but other inputs (materials, energy) grew faster. Multifactor productivity gives the fuller picture."]
     :["warn","Labour productivity fell. Look at methods, equipment, training and scheduling — productivity is a function of people and operations variables."]};
  }},
 sort:{title:"Sort the actions by value-chain management requirement",
  bins:["Coordination & collaboration","Technology investment","Organizational processes","Leadership","Employees / HR","Culture & attitudes"],
  items:[
   ["Sharing sales forecasts with cotton suppliers every week",0,"Partners share information and plans."],
   ["An ERP system connecting suppliers, factory and distributors",1,"Technology supports the value chain."],
   ["Redesigning order handling from customer request to delivery",2,"Changing how work is done across the chain."],
   ["The CEO sets a clear vision for a customer-driven chain",3,"Leadership commitment."],
   ["Training staff to work flexibly across functions",4,"Committed, flexible employees."],
   ["Building trust and openness with partners",5,"Supportive culture and attitudes."]
  ],
  then:{title:"Sort: which legal form fits the description?",
   bins:["Sole proprietorship","Partnership","Private limited company"],
   items:[
    ["Owned by one person who bears unlimited liability",0,"Simple and cheap to start."],
    ["A small shop owned and run by its founder",0,"Sole proprietorship."],
    ["Two friends share ownership, profits and unlimited liability",1,"Partnership."],
    ["A law firm owned by several partners",1,"Partnership."],
    ["A separate legal entity whose owners have limited liability, registered with the SECP",2,"Private limited company."],
    ["A start-up that wants to raise money from investors",2,"Easier to issue shares."]
   ]}},
 dilemma:{title:"Dilemma: the fast-growing start-up",
  intro:"Your Islamabad start-up sells home-cooked meal boxes. Orders tripled in six months.",
  meters:[["growth","Growth"],["cash","Cash"],["quality","Quality"]],
  steps:[
   {t:"Managing growth",x:"Kitchen capacity is maxed out and delivery times are slipping.",
    c:[["Accept every order and hope to cope",{growth:10,cash:-5,quality:-18},"Uncontrolled growth damages quality and reputation.","bad"],
       ["Limit daily orders while you add a second kitchen shift and standard recipes",{growth:5,cash:3,quality:12},"Planned growth with process controls.","good"],
       ["Raise prices by 40% to cut demand",{growth:-10,cash:8,quality:5},"May work briefly but loses loyal customers.","warn"]]},
   {t:"Funding",x:"You need Rs 5 million for a central kitchen.",
    c:[["Use expensive short-term personal loans",{growth:5,cash:-15,quality:0},"Risky cash-flow strain.","bad"],
       ["Register as a private limited company and pitch to angel investors with a business plan",{growth:15,cash:10,quality:3},"A legal form and plan suited to raising capital.","good"],
       ["Stay small and fund growth from profits only",{growth:-5,cash:5,quality:5},"Safe but slow; a valid choice for some founders.","info"]]}
  ],
  lesson:"Entrepreneurial ventures must manage growth deliberately — plan, organize, lead and control."},
 select:{title:"Selector: which legal form for the venture?",
  intro:"Rate what matters to the founders (0–10).",
  criteria:[["Protecting personal assets (limited liability)",5],["Low cost and easy set-up",5],["Raising capital from investors",5],["Sharing decisions with co-founders",5],["Minimal paperwork and reporting",5]],
  options:[
   ["Sole proprietorship",[1,5,1,1,5],"Full control, unlimited liability."],
   ["Partnership",[1,4,2,5,4],"Shared ownership and decisions; unlimited liability."],
   ["Private limited company",[5,2,5,4,1],"Limited liability and easier fund-raising; more compliance."]
  ]},
 quiz:{q:[
  ["Productivity is…",["Inputs ÷ outputs","Outputs ÷ inputs","Profit ÷ sales","Sales − costs"],1,"Outputs ÷ inputs."],
  ["The entire series of activities that add value from raw materials to the end user is the…",["Supply","Value chain","Budget","Network"],1,"Value chain."],
  ["Which is a requirement for successful value-chain management?",["Secrecy with partners","Coordination and collaboration","Ignoring technology","No leadership"],1,"Coordination and collaboration."],
  ["Starting new businesses, generally in response to opportunities, is…",["Bureaucracy","Entrepreneurship","Downsizing","Benchmarking"],1,"Entrepreneurship."],
  ["A legal form that gives owners limited liability is the…",["Sole proprietorship","General partnership","Private limited company","Freelance"],2,"Private limited company."]
 ]}
});

})();
