/* MGT102 worksheets — Weeks 5–8 (Lectures 9–16). Authored teaching content. */
(function(){
const {add,fmt,money}=Lab;
const rs=(n,d=0)=>money(n,d,'Rs ');

/* ---------------- L9 ---------------- */
add(9,{
 primer:[
  "<b>Classical view</b>: management's only social responsibility is to maximize profits for shareholders (Milton Friedman). <b>Socioeconomic view</b>: managers' responsibility goes beyond profit to protecting and improving society's welfare.",
  "<b>Social obligation</b> = meeting economic and legal responsibilities. <b>Social responsiveness</b> = adapting to changing social conditions. <b>Social responsibility</b> = a business's intention, beyond legal and economic obligations, to do the right things that are good for society.",
  "<b>Green management</b>: four approaches range from light to dark green — <b>legal</b>, <b>market</b>, <b>stakeholder</b> and <b>activist</b>.",
  "<b>Ethics</b> refers to principles, values and beliefs that define right and wrong decisions. Ethical behaviour is shaped by moral development, individual characteristics (values, ego strength, locus of control), structural variables, organizational culture and issue intensity."
 ],
 discussion:["Should a Pakistani textile mill spend on water treatment beyond what the law requires? Argue both views.","Find a Pakistani company's sustainability report. Which green approach does it follow?","Why do people with an internal locus of control tend to act more ethically?"],
 calc:{title:"What-if: payback on a green investment",
  intro:"A Faisalabad mill is considering rooftop solar. Change the numbers to see the payback period, ten-year net saving and emissions avoided. Figures are illustrative.",
  inputs:[
   {k:"inv",label:"Investment (Rs million)",min:5,max:100,step:1,v:40},
   {k:"save",label:"Annual electricity saving (Rs million)",min:1,max:30,step:0.5,v:10},
   {k:"om",label:"Annual maintenance cost (Rs million)",min:0,max:5,step:0.1,v:0.8},
   {k:"tariff",label:"Expected yearly rise in grid tariff (%)",min:0,max:20,step:1,v:8,f:x=>x+"%"},
   {k:"co2",label:"CO₂ avoided per year (tonnes)",min:100,max:5000,step:50,v:1200}
  ],
  run(v){
   let cum=-v.inv, pay=null, yrs=[];
   for(let y=1;y<=10;y++){ const net=v.save*Math.pow(1+v.tariff/100,y-1)-v.om; const prev=cum; cum+=net; yrs.push(cum); if(pay===null&&cum>=0) pay=y-1+(-prev)/net; }
   return {stats:[["Payback period",pay===null?"> 10 years":fmt(pay,1)+" years"],["10-year net saving",rs(cum,1)+" m"],["CO₂ avoided over 10 years",fmt(v.co2*10)+" t"]],
    bars:yrs.map((c,i)=>({label:"Year "+(i+1),value:c,color:c>=0?"--c3":"--c5"})),barsOpt:{fmt:x=>fmt(x,1),rowH:22},
    fb:pay!==null&&pay<=5?["good","Payback in about <b>"+fmt(pay,1)+" years</b>. Here going green is also good business — the <b>market approach</b> to green management."]
     :pay!==null?["info","Payback takes "+fmt(pay,1)+" years. A firm with a <b>stakeholder</b> or <b>activist</b> approach may still invest because of its wider environmental goals."]
     :["warn","The project does not pay back within ten years on cost alone. Only a firm committed to the environment beyond profit (activist approach) would go ahead without other benefits."]};
  }},
 sort:{title:"Sort the actions by green-management approach",
  intro:"Approaches run from <b>light green</b> (do what the law requires) to <b>dark green</b> (actively look for ways to protect the earth).",
  bins:["Legal approach (light green)","Market approach","Stakeholder approach","Activist approach (dark green)"],
  items:[
   ["Treats effluent only to the minimum standard set by the EPA",0,"Simply complying with environmental laws."],
   ["Installs filters only after a court order",0,"Legal approach."],
   ["Launches an eco-friendly detergent because customers ask for it",1,"Responding to customers' environmental preferences."],
   ["Uses recycled packaging as a selling point",1,"Market approach."],
   ["Reduces water use after talks with local farmers, NGOs and investors",2,"Meeting the environmental demands of multiple stakeholders."],
   ["Publishes a sustainability report for investors and the community",2,"Stakeholder approach."],
   ["Commits to net-zero emissions and funds reforestation beyond any demand",3,"Looking for ways to protect the earth's resources — the darkest green."],
   ["Refuses suppliers that cannot prove sustainable sourcing, even at higher cost",3,"Activist approach."]
  ],
  then:{title:"Sort: classical or socioeconomic view?",
   bins:["Classical view","Socioeconomic view"],
   items:[
    ["Managers should maximize profit for shareholders",0,"Friedman's classical position."],
    ["Spending on social causes adds cost and lowers returns",0,"Classical view."],
    ["Firms are responsible to society, not just owners",1,"Socioeconomic view."],
    ["Firms should protect and improve society's welfare",1,"Socioeconomic view."]
   ]}},
 dilemma:{title:"Dilemma: the river behind the dyeing unit",
  intro:"You manage a dyeing unit near the Chenab. Wastewater is just within legal limits, but local farmers say their crops are suffering.",
  meters:[["profit","Profit"],["planet","Environment"],["comm","Community trust"]],
  steps:[
   {t:"The farmers' complaint",x:"A farmers' delegation arrives at the gate.",
    c:[["Tell them you meet all legal limits — nothing more to discuss",{profit:5,planet:-10,comm:-20},"Social obligation only. Legally correct, but trust collapses and media attention follows.","bad"],
       ["Commission an independent water test and share the results with them",{profit:-3,planet:5,comm:15},"Social responsiveness: listening and adapting to a changing social concern.","good"],
       ["Offer cash compensation without admitting anything",{profit:-8,planet:0,comm:5},"May calm things for now but does not fix the problem.","warn"]]},
   {t:"Investment decision",x:"Tests show some chemicals build up downstream. A better treatment plant costs Rs 60 million.",
    c:[["Delay until the law changes",{profit:5,planet:-15,comm:-10},"Light-green legal approach; the risk to your licence and reputation grows.","bad"],
       ["Build the plant in two phases and use treated water for your own processes",{profit:5,planet:15,comm:12},"Water reuse cuts costs too — an example of doing well by doing good.","good"],
       ["Build the full plant now and publish progress",{profit:-10,planet:20,comm:15},"An activist, dark-green choice: the strongest result for society at a higher short-term cost.","good"]]}
  ],
  lesson:"Social responsibility goes beyond what the law requires; the best green decisions often create business value too."},
 select:{title:"Selector: which green-management approach fits the company?",
  intro:"Rate the company's situation (0–10).",
  criteria:[["Strict, well-enforced environmental laws",5],["Customers pay more for green products",5],["Investors and communities demand action",5],["Founders are deeply committed to the environment",5],["Profit margins are thin",5]],
  options:[
   ["Legal approach",[5,1,1,1,5],"Obey the law; little more."],
   ["Market approach",[3,5,2,2,3],"Go green where customers reward it."],
   ["Stakeholder approach",[3,3,5,3,2],"Balance the demands of many stakeholders."],
   ["Activist approach",[2,3,4,5,1],"Seek every way to protect the earth, even at a cost."]
  ]},
 quiz:{q:[
  ["The view that management's only social responsibility is to maximize profits is the…",["Socioeconomic view","Classical view","Stakeholder view","Activist view"],1,"Associated with Milton Friedman."],
  ["A firm that meets its economic and legal responsibilities and nothing more shows…",["Social obligation","Social responsiveness","Social responsibility","Activism"],0,"Social obligation is the minimum."],
  ["The darkest shade of green management is the…",["Legal approach","Market approach","Stakeholder approach","Activist approach"],3,"Activist approach."],
  ["People who believe they control their own fate have an…",["External locus of control","Internal locus of control","Low ego strength","Weak culture"],1,"Internals tend to take responsibility for consequences."],
  ["Which factor is NOT a determinant of ethical behaviour in Robbins' model?",["Stage of moral development","Issue intensity","Organizational culture","Market share"],3,"Market share is not in the model."]
 ]}
});

/* ---------------- L10 ---------------- */
add(10,{
 primer:[
  "Managers encourage ethical behaviour through <b>employee selection</b>, a <b>code of ethics</b>, <b>ethical leadership</b> from the top, realistic <b>job goals and performance appraisal</b>, <b>ethics training</b>, <b>independent social audits</b> and <b>protective mechanisms</b> (e.g. ethics officers, hotlines).",
  "A <b>whistle-blower</b> is someone who raises ethical concerns or issues to others; managers must protect them from retaliation.",
  "<b>Social entrepreneurs</b> seek opportunities to improve society by using practical, innovative and sustainable approaches (e.g. microfinance, low-cost healthcare).",
  "Businesses promote positive social change through <b>corporate philanthropy</b> and <b>employee volunteering</b>."
 ],
 discussion:["Would a code of ethics alone stop bribery in public procurement? What else is needed?","Name a Pakistani social entrepreneur or social enterprise. What problem does it solve?","Why do unrealistic sales targets push employees towards unethical behaviour?"],
 calc:{title:"What-if: the expected cost of cutting corners",
  intro:"A manager is tempted to under-report taxes or falsify safety records. Compare the short-term gain with the expected cost if caught. This shows why <b>detection alone</b> is a weak safeguard and why culture and values matter.",
  inputs:[
   {k:"gain",label:"Short-term gain from misconduct (Rs million)",min:1,max:50,step:1,v:10},
   {k:"p",label:"Probability of being detected (%)",min:1,max:100,step:1,v:15,f:x=>x+"%"},
   {k:"fine",label:"Fines and legal costs if detected (Rs million)",min:0,max:200,step:5,v:30},
   {k:"rep",label:"Lost business from damaged reputation (Rs million)",min:0,max:300,step:5,v:40},
   {k:"prog",label:"Strength of ethics programme (0–10) — raises detection",min:0,max:10,v:3}
  ],
  run(v){
   const p=Math.min(1,v.p/100*(1+v.prog*0.15)), exp=p*(v.fine+v.rep), net=v.gain-exp;
   return {stats:[["Effective detection chance",fmt(p*100)+"%"],["Expected cost if caught","Rs "+fmt(exp,1)+" m"],["Expected 'net gain'","Rs "+fmt(net,1)+" m"]],
    bars:[{label:"Short-term gain",value:v.gain,color:"--c2"},{label:"Expected cost",value:exp,color:"--c5"}],barsOpt:{fmt:x=>"Rs "+fmt(x,1)+"m"},
    fb:net>0?["warn","On paper misconduct 'pays' by Rs "+fmt(net,1)+" m. This is exactly why organizations cannot rely on the threat of detection: they need ethical leaders, a strong code, realistic goals and protected whistle-blowers. And the calculation ignores harm to people and society."]
     :["good","The expected cost exceeds the gain. A stronger ethics programme (training, hotlines, audits) raises detection and makes misconduct unattractive — but the real aim is that people choose the right thing because it is right."]};
  }},
 sort:{title:"Sort the practices that encourage ethical behaviour",
  bins:["Selection","Code of ethics","Leadership at the top","Goals & appraisal","Training","Protective mechanisms"],
  items:[
   ["Integrity tests and reference checks before hiring",0,"Screening out ethically undesirable applicants."],
   ["Structured interviews that probe how candidates handled past ethical dilemmas",0,"Selection."],
   ["A formal document stating the organization's values and rules",1,"Code of ethics."],
   ["A clear 'no gifts above Rs 5,000' policy for purchasing staff",1,"Part of a code of ethics."],
   ["The CEO publicly rejects a lucrative but dishonest deal",2,"Top managers set the cultural tone and are role models."],
   ["Senior managers are disciplined for misconduct just like junior staff",2,"Leadership at the top."],
   ["Sales targets set at levels that can be reached honestly",3,"Unrealistic goals create pressure to cheat."],
   ["Appraisals assess how results were achieved, not only what",3,"Goals & appraisal."],
   ["Workshops on handling bribery requests",4,"Ethics training."],
   ["A confidential ethics hotline run by an independent party",5,"Protects people who raise concerns."],
   ["An ethics officer staff can consult without fear",5,"Protective mechanism."]
  ]},
 dilemma:{title:"Dilemma: the inflated invoices",
  intro:"You are an accounts officer at a construction firm. You notice that a supplier's invoices are regularly 20% higher than delivery notes, and they are approved by a senior manager.",
  meters:[["integrity","Integrity"],["career","Career safety"],["org","Organization health"]],
  steps:[
   {t:"What you noticed",x:"What do you do first?",
    c:[["Say nothing — it's above your level",{integrity:-20,career:5,org:-15},"Silence protects you briefly but lets the fraud grow.","bad"],
       ["Document the evidence carefully and check the code of ethics for the reporting channel",{integrity:12,career:5,org:5},"A careful, factual first step.","good"],
       ["Post about it anonymously on social media",{integrity:0,career:-10,org:-15},"Going public first can harm innocent people and the firm before facts are checked.","bad"]]},
   {t:"Reporting",x:"The code names an ethics officer and a confidential hotline.",
    c:[["Report through the confidential hotline with your evidence",{integrity:15,career:8,org:15},"Protective mechanisms exist so that whistle-blowers can raise concerns safely.","good"],
       ["Confront the senior manager directly",{integrity:8,career:-12,org:0},"Courageous, but risks retaliation and gives the person time to hide evidence.","warn"],
       ["Ask the supplier for a share to stay quiet",{integrity:-30,career:-20,org:-20},"You become part of the fraud.","bad"]]}
  ],
  lesson:"Ethical organizations make it safe and expected for people to raise concerns — through codes, hotlines, ethics officers and leaders who act."},
 select:{title:"Selector: what should the company fix first?",
  intro:"Rate the symptoms you see (0–10).",
  criteria:[["Staff hire friends without checks",5],["Nobody knows what is acceptable (gifts, conflicts of interest)",5],["Leaders bend rules when it suits them",5],["Targets are impossible to meet honestly",5],["People fear speaking up",5]],
  options:[
   ["Improve selection (integrity tests, references)",[5,1,1,1,1],"Keep ethically undesirable applicants out."],
   ["Write and communicate a code of ethics",[2,5,2,1,2],"Make expectations explicit."],
   ["Ethical leadership from the top",[2,3,5,3,4],"Role models change behaviour faster than rules."],
   ["Realistic goals and fair appraisal",[1,1,2,5,2],"Remove the pressure to cheat."],
   ["Protective mechanisms (hotline, ethics officer)",[1,2,3,2,5],"Make it safe to speak up."]
  ]},
 quiz:{q:[
  ["Individuals who raise ethical concerns or issues to others are…",["Social entrepreneurs","Whistle-blowers","Ethics officers","Stakeholders"],1,"Whistle-blowers."],
  ["Which is most likely to push employees to behave unethically?",["Realistic goals","Unrealistic goals","Ethics training","Integrity tests"],1,"Unrealistic goals create pressure."],
  ["A formal statement of an organization's primary values and the ethical rules it expects employees to follow is a…",["Mission","Code of ethics","Budget","Policy manual"],1,"Code of ethics."],
  ["Someone who seeks opportunities to improve society using practical, innovative and sustainable approaches is a…",["Whistle-blower","Social entrepreneur","Philanthropist only","Regulator"],1,"Social entrepreneur."],
  ["The most effective way to encourage ethics is usually…",["A code alone","Training alone","A comprehensive programme led by top management","Harsh punishments only"],2,"Several measures together, led from the top."]
 ]}
});

/* ---------------- L11 ---------------- */
add(11,{
 primer:[
  "<b>Organizational change</b> is any alteration of people, structure or technology.",
  "<b>Lewin's three steps</b> (the calm-waters metaphor): <b>unfreeze</b> the status quo, <b>change</b> to a new state, <b>refreeze</b> to make it permanent. Unfreezing means increasing driving forces, decreasing restraining forces, or both. The <b>white-water rapids</b> metaphor says change is constant and unpredictable.",
  "People resist change because of <b>uncertainty</b>, <b>habit</b>, <b>concern over personal loss</b> and the <b>belief that the change is not in the organization's best interest</b>.",
  "Techniques to reduce resistance: <b>education & communication</b>, <b>participation</b>, <b>facilitation & support</b>, <b>negotiation</b>, <b>manipulation & co-optation</b>, <b>selecting people who accept change</b> and <b>coercion</b>."
 ],
 discussion:["Think of a change at COMSATS (e.g. a new LMS or attendance system). Which forces drove it and which resisted it?","Is Pakistan's business environment 'calm waters' or 'white-water rapids'? Why?","When, if ever, is coercion an acceptable way to overcome resistance?"],
 calc:{title:"What-if: Lewin's force-field analysis",
  intro:"A hospital in Rawalpindi plans to replace paper patient files with an electronic system. Rate the strength of each force (0–10).",
  inputs:[
   {k:"d1",label:"Driving: faster access to patient records",min:0,max:10,v:7},
   {k:"d2",label:"Driving: pressure from regulators and insurers",min:0,max:10,v:5},
   {k:"d3",label:"Driving: fewer lost files and errors",min:0,max:10,v:6},
   {k:"r1",label:"Restraining: staff fear they lack computer skills",min:0,max:10,v:7},
   {k:"r2",label:"Restraining: habit of paper files",min:0,max:10,v:6},
   {k:"r3",label:"Restraining: cost and load-shedding risk",min:0,max:10,v:5}
  ],
  run(v){
   const D=v.d1+v.d2+v.d3, R=v.r1+v.r2+v.r3, net=D-R;
   const top=[[v.r1,"skills fear → training (facilitation & support)"],[v.r2,"habit → participation and phased roll-out"],[v.r3,"cost/power → negotiation and UPS/solar back-up"]].sort((a,b)=>b[0]-a[0])[0];
   return {stats:[["Driving forces",String(D)],["Restraining forces",String(R)],["Net force",(net>0?"+":"")+net]],
    bars:[{label:"Faster access",value:v.d1,color:"--c3"},{label:"Regulator pressure",value:v.d2,color:"--c3"},{label:"Fewer errors",value:v.d3,color:"--c3"},{label:"Skills fear",value:-v.r1,color:"--c5"},{label:"Habit",value:-v.r2,color:"--c5"},{label:"Cost / power",value:-v.r3,color:"--c5"}],barsOpt:{min:-10,max:10,fmt:x=>fmt(Math.abs(x))},
    fb:net>3?["good","<b>Driving forces dominate (+"+net+").</b> The organization is ready to unfreeze. Still reduce the biggest restraint: "+top[1]+"."]
     :net>=-3?["warn","<b>Forces are roughly balanced.</b> The status quo will hold unless you act. Lewin's advice: reducing restraining forces is often more effective than pushing harder. Start with "+top[1]+"."]
     :["bad","<b>Restraining forces dominate ("+net+").</b> Pushing now will create resistance. Reduce restraints first — biggest: "+top[1]+"."]};
  }},
 sort:{title:"Sort: why are these people resisting change?",
  bins:["Uncertainty","Habit","Concern over personal loss","Not in the organization's best interest"],
  items:[
   ["'We don't know how the new system will affect our jobs.'",0,"Change replaces the known with the unknown."],
   ["'Nobody has explained what happens after the merger.'",0,"Uncertainty."],
   ["'We have always done it this way and it works.'",1,"Habit — routine is comfortable."],
   ["'I can do the old process with my eyes closed.'",1,"Habit."],
   ["'I'll lose my status as the only one who knows the old system.'",2,"Fear of losing status, money, authority or friendships."],
   ["'My overtime income will disappear after automation.'",2,"Personal loss."],
   ["'This new supplier will lower our quality — it's bad for the company.'",3,"A sincere belief the change is wrong for the organization."]
  ],
  then:{title:"Sort: what kind of change is it?",
   bins:["Structure","Technology","People"],
   items:[
    ["Merging two departments and reducing levels of hierarchy",0,"Changing structural components or design."],
    ["Decentralizing decisions to branch managers",0,"Structural change."],
    ["Introducing robots on the assembly line",1,"New equipment, tools or methods."],
    ["Replacing paper files with cloud software",1,"Technology."],
    ["Team-building workshops to improve collaboration",2,"Changing attitudes, expectations and behaviour — often through organizational development (OD)."],
    ["Coaching managers to give better feedback",2,"People change."]
   ]}},
 dilemma:{title:"Dilemma: rolling out a new ERP system",
  intro:"You are the operations head of a FMCG distributor in Islamabad. A new ERP system will replace spreadsheets in three months.",
  meters:[["prog","Change progress"],["morale","Morale"],["trust","Trust"]],
  steps:[
   {t:"The announcement",x:"Rumours say the system will cut jobs. Warehouse staff are anxious.",
    c:[["Announce the go-live date by email; no further explanation",{prog:5,morale:-15,trust:-15},"Uncertainty breeds resistance.","bad"],
       ["Hold open meetings explaining why, what changes, and that no jobs will be cut",{prog:8,morale:12,trust:15},"Education and communication — best when resistance is due to misinformation.","good"],
       ["Promise bonuses to the most vocal critics if they stop complaining",{prog:5,morale:-5,trust:-12},"Manipulation and co-optation — cheap but can backfire badly if discovered.","warn"]]},
   {t:"Training",x:"Older supervisors are struggling with the system.",
    c:[["Replace them with younger hires",{prog:5,morale:-20,trust:-15},"Coercion damages trust across the whole workforce.","bad"],
       ["Provide extra training, super-users on each shift and a help desk",{prog:12,morale:10,trust:10},"Facilitation and support works when fear and anxiety cause resistance.","good"],
       ["Involve them in redesigning the warehouse screens",{prog:10,morale:12,trust:12},"Participation — people rarely resist a change they helped to create.","good"]]}
  ],
  lesson:"Most resistance is reduced by explaining the change, involving people and supporting them through it."},
 select:{title:"Selector: which technique to reduce resistance?",
  intro:"Rate the situation (0–10). The matrix reflects the advantages and drawbacks Robbins lists for each technique.",
  criteria:[["Resistance comes from misinformation",5],["Resisters have expertise to contribute",5],["Resistance comes from fear and anxiety",5],["Resisters are a powerful group",5],["Change must happen very fast",5]],
  options:[
   ["Education & communication",[5,2,3,1,1],"Clears up misunderstandings; needs mutual trust and time."],
   ["Participation",[2,5,3,2,1],"Increases involvement and acceptance; time-consuming."],
   ["Facilitation & support",[1,1,5,1,2],"Eases adjustment; expensive, no guarantee."],
   ["Negotiation",[1,2,1,5,3],"Can 'buy' commitment; potentially high cost."],
   ["Coercion",[1,1,1,2,5],"Fast and inexpensive; may be illegal and harms credibility."]
  ]},
 quiz:{q:[
  ["In Lewin's model, the step that makes the new behaviour permanent is…",["Unfreezing","Changing","Refreezing","Coercing"],2,"Refreezing stabilizes the change."],
  ["The 'white-water rapids' metaphor suggests change is…",["Occasional and planned","Constant and unpredictable","Unnecessary","Easy"],1,"Uncertain, dynamic environments."],
  ["An employee who fears losing status after a change shows resistance due to…",["Habit","Uncertainty","Concern over personal loss","Organizational interest"],2,"Personal loss."],
  ["Introducing new equipment or work processes is a change in…",["Structure","Technology","People","Culture only"],1,"Technology."],
  ["Which technique is fast and cheap but may be illegal and damage credibility?",["Participation","Education","Coercion","Facilitation"],2,"Coercion."]
 ]}
});

/* ---------------- L12 ---------------- */
add(12,{
 primer:[
  "<b>Contemporary issues</b>: changing organizational culture (needs a dramatic crisis, leadership change, a young or small organization, or a weak culture), employee <b>stress</b>, and making change happen successfully.",
  "<b>Stress</b> is the adverse reaction people have to excessive pressure from extraordinary demands, constraints or opportunities. Causes include <b>task demands</b>, <b>role demands</b> (role conflict, overload, ambiguity) and <b>interpersonal demands</b>, plus personal factors.",
  "<b>Creativity</b> is the ability to combine ideas in a unique way; <b>innovation</b> turns creative ideas into useful products or work methods.",
  "Innovation is stimulated by <b>structural</b> variables (organic structure, abundant resources, frequent communication, minimal time pressure, support), <b>cultural</b> variables (accept ambiguity, tolerate the impractical, low external controls, tolerate risk and conflict, focus on ends, open-system focus, positive feedback) and <b>human resource</b> variables (training, job security, idea champions). <b>Design thinking</b> helps too."
 ],
 discussion:["Why do Pakistani start-ups often innovate faster than large state-owned enterprises?","What role demands cause stress for university students?","Who is an 'idea champion' you have seen in a team project?"],
 calc:{title:"What-if: the innovation funnel",
  intro:"Ideas are filtered at each stage before becoming successful innovations. Change the pass rates to see how many succeed and what each success costs.",
  inputs:[
   {k:"ideas",label:"Raw ideas per year",min:20,max:1000,step:10,v:300},
   {k:"s1",label:"Pass initial screening (%)",min:5,max:80,step:1,v:25,f:x=>x+"%"},
   {k:"s2",label:"Prototypes that pass testing (%)",min:5,max:80,step:1,v:30,f:x=>x+"%"},
   {k:"s3",label:"Launches that succeed in the market (%)",min:5,max:90,step:1,v:40,f:x=>x+"%"},
   {k:"cost",label:"Average cost per prototype (Rs 000)",min:50,max:2000,step:50,v:400}
  ],
  run(v){
   const proto=v.ideas*v.s1/100, launch=proto*v.s2/100, win=launch*v.s3/100, spend=proto*v.cost;
   return {stats:[["Prototypes built",fmt(proto)],["Products launched",fmt(launch,1)],["Successful innovations",fmt(win,1)],["R&D cost per success",win>=0.1?rs(spend*1000/win/1e6,1)+" m":"—"]],
    bars:[{label:"Ideas",value:v.ideas,color:"--c6"},{label:"Prototypes",value:proto,color:"--c1"},{label:"Launches",value:launch,color:"--c4"},{label:"Successes",value:win,color:"--c3"}],barsOpt:{fmt:x=>fmt(x,1)},
    fb:win>=5?["good","A healthy pipeline. Cultural variables such as tolerating risk and accepting ambiguity keep idea numbers high."]
     :win>=1?["info","Only a few successes. Raising the number of ideas (an innovative culture) often helps more than tightening the screens."]
     :["warn","Fewer than one success a year. Look at structure (more resources, less time pressure) and culture (tolerate failure)."]};
  }},
 sort:{title:"Sort the innovation variables",
  bins:["Structural variables","Cultural variables","Human resource variables"],
  items:[
   ["Organic structure with few rules",0,"Flexibility and cross-functional work."],
   ["Abundant resources and slack for experiments",0,"Structural."],
   ["Frequent communication between departments",0,"Structural."],
   ["Tolerance of risk and failure",1,"Employees are encouraged to experiment without fear."],
   ["Accepting ambiguity and impractical ideas",1,"Cultural."],
   ["Focus on ends rather than means",1,"Cultural."],
   ["High commitment to training and development",2,"Keeps employees' knowledge current."],
   ["Job security so people are not afraid to fail",2,"HR variable."],
   ["Idea champions who push new ideas through",2,"HR variable."]
  ],
  then:{title:"Sort: what is causing the stress?",
   bins:["Task demands","Role demands","Interpersonal demands"],
   items:[
    ["Working in an overcrowded, noisy call centre",0,"Factors related to the job itself."],
    ["A machine-paced production line",0,"Task demand."],
    ["Two bosses give conflicting instructions",1,"Role conflict."],
    ["Expected to do more than time allows",1,"Role overload."],
    ["Unclear what your job actually includes",1,"Role ambiguity."],
    ["A rude, unsupportive supervisor",2,"Pressure created by other people."]
   ]}},
 dilemma:{title:"Dilemma: innovation versus burnout",
  intro:"You lead the product team at a Lahore fintech. The CEO wants a new feature every month; your team is exhausted.",
  meters:[["innov","Innovation"],["well","Well-being"],["delivery","Delivery"]],
  steps:[
   {t:"The monthly demand",x:"The team is working weekends and two members are showing signs of stress.",
    c:[["Keep the pace — start-ups are always stressful",{innov:-5,well:-20,delivery:5},"Excessive pressure reduces creativity and leads to turnover.","bad"],
       ["Negotiate a 6-week cycle with one 'idea day' per cycle",{innov:15,well:12,delivery:3},"Minimal time pressure and slack resources stimulate innovation.","good"],
       ["Hire freelancers to cover the extra work",{innov:3,well:5,delivery:8},"Relieves load but does not fix the cause.","info"]]},
   {t:"A failed feature",x:"A feature built by a junior developer fails in testing. Some managers want to blame her.",
    c:[["Publicly criticize the developer",{innov:-15,well:-10,delivery:0},"Punishing failure kills the willingness to try new things.","bad"],
       ["Run a no-blame review: what did we learn?",{innov:15,well:8,delivery:5},"Tolerating risk and giving positive feedback are cultural drivers of innovation.","good"],
       ["Quietly drop the feature and say nothing",{innov:-3,well:0,delivery:0},"No learning happens.","warn"]]}
  ],
  lesson:"Innovation needs time, resources, tolerance of failure and well-managed stress — not just pressure."},
 select:{title:"Selector: how should we stimulate innovation?",
  intro:"Rate the organization's situation (0–10).",
  criteria:[["Good ideas exist but die in approvals",5],["People are afraid to make mistakes",5],["Departments never share ideas",5],["We don't understand users' real problems",5],["Skills are outdated",5]],
  options:[
   ["Appoint idea champions",[5,3,2,1,1],"Champions push ideas past resistance."],
   ["Build a risk-tolerant culture (no-blame reviews)",[2,5,2,1,1],"Make experimentation safe."],
   ["Cross-functional teams and an organic structure",[3,2,5,2,1],"Increase communication across units."],
   ["Design thinking",[2,2,3,5,2],"Start from deep empathy with users, then prototype."],
   ["Training and development",[1,2,1,2,5],"Keep knowledge current."]
  ]},
 quiz:{q:[
  ["Turning creative ideas into useful products or work methods is…",["Creativity","Innovation","Change","Stress"],1,"Innovation."],
  ["Being given two incompatible expectations by two bosses is…",["Role overload","Role conflict","Role ambiguity","Task demand"],1,"Role conflict."],
  ["Which is a cultural variable that stimulates innovation?",["Strict rules","Tolerance of risk","Close supervision","Short deadlines"],1,"Tolerance of risk."],
  ["Individuals who actively support new ideas and build support for them are…",["Gatekeepers","Idea champions","Whistle-blowers","Change resisters"],1,"Idea champions."],
  ["Culture change is most likely when…",["The organization is old, large and has a strong culture","There is a dramatic crisis and leadership changes","Nothing goes wrong","Turnover is zero"],1,"Crisis + new leadership are favourable conditions."]
 ]}
});

/* ---------------- L13 ---------------- */
add(13,{
 primer:[
  "The <b>decision-making process</b> has eight steps: (1) identify the problem, (2) identify decision criteria, (3) allocate weights to the criteria, (4) develop alternatives, (5) analyse alternatives, (6) select an alternative, (7) implement it, (8) evaluate decision effectiveness.",
  "<b>Rational</b> decision making assumes clear problems, full information and value-maximizing choices. In reality managers face <b>bounded rationality</b> and <b>satisfice</b> — accept solutions that are 'good enough'.",
  "<b>Intuitive</b> decision making draws on experience, feelings and accumulated judgement. <b>Evidence-based management</b> uses the best available evidence systematically.",
  "<b>Escalation of commitment</b> is increasing commitment to a decision despite evidence it may have been wrong."
 ],
 discussion:["Describe how you chose your university programme using the eight steps. Where did you satisfice?","When should a manager trust intuition over data?","Give a Pakistani example of escalation of commitment in a public project."],
 calc:{title:"What-if: when should you stop searching? (satisficing)",
  intro:"Each extra alternative you evaluate (another supplier, candidate or location) costs time and money, but the expected quality of the best option rises more and more slowly. Find the point where searching further stops paying.",
  inputs:[
   {k:"stake",label:"Value at stake if you find the ideal option (Rs 000)",min:100,max:5000,step:100,v:1000},
   {k:"cost",label:"Cost of evaluating one more alternative (Rs 000)",min:5,max:300,step:5,v:40},
   {k:"n",label:"Alternatives you plan to evaluate",min:1,max:20,v:3}
  ],
  run(v){
   const val=n=>v.stake*n/(n+1)-v.cost*n;
   let best=1; for(let n=1;n<=20;n++) if(val(n)>val(best)) best=n;
   const rows=[]; for(let n=1;n<=Math.min(12,Math.max(best+3,v.n+1));n++) rows.push({label:n+" alternative"+(n>1?"s":""),value:val(n),color:n===best?"--c3":n===v.n?"--c4":"--c1"});
   return {stats:[["Net value of your plan","Rs "+fmt(val(v.n))+"k"],["Best number to evaluate",String(best)],["Net value at best","Rs "+fmt(val(best))+"k"]],
    bars:rows,barsOpt:{fmt:x=>fmt(x),rowH:24},
    fb:v.n===best?["good","Your plan is the best trade-off. Searching further costs more than it is likely to add — this is the logic behind <b>satisficing</b>."]
     :v.n<best?["info","Searching a little more ("+best+" alternatives) would pay off. Stopping too early is risky when the stakes are high."]
     :["warn","You plan to search beyond the point where it pays. The full 'rational' search for the perfect option is often too costly — bounded rationality is sensible."]};
  }},
 sort:{title:"Put the eight steps of the decision-making process in order",
  order:["Identify a problem","Identify decision criteria","Allocate weights to the criteria","Develop alternatives","Analyse alternatives","Select an alternative","Implement the alternative","Evaluate decision effectiveness"],
  explain:"Well done — evaluation then feeds back into identifying new problems.",
  then:{title:"Sort: rational, bounded rationality or intuition?",
   bins:["Rational","Bounded rationality","Intuition"],
   items:[
    ["Scoring all 12 bids against weighted criteria with complete data",0,"Logical, consistent, value-maximizing."],
    ["Using a model that compares every possible site for a warehouse",0,"Rational."],
    ["Choosing the first supplier that meets minimum quality and price",1,"Satisficing within limits of information and time."],
    ["Hiring the third good candidate because the deadline is tomorrow",1,"Bounded rationality."],
    ["An experienced buyer 'just knows' a deal is too good to be true",2,"Experience-based intuition."],
    ["Rejecting an option because it 'feels wrong' ethically",2,"Values- or ethics-based intuition."]
   ]}},
 dilemma:{title:"Dilemma: the failing project",
  intro:"Your company has spent Rs 80 million on a mobile app for retailers. It is six months late and only 300 shops use it.",
  meters:[["value","Value created"],["learn","Learning"],["cred","Credibility"]],
  steps:[
   {t:"The review",x:"The project team asks for another Rs 40 million to 'finish the job'.",
    c:[["Approve it — we can't waste the Rs 80 million already spent",{value:-15,learn:-10,cred:-5},"Escalation of commitment and the sunk-cost error: past spending is gone whatever you decide.","bad"],
       ["Go back to step 1: redefine the problem and criteria, then decide",{value:10,learn:15,cred:10},"Treat it as a new decision based on future costs and benefits.","good"],
       ["Cancel immediately to avoid more loss",{value:0,learn:-5,cred:0},"Fast, but you may throw away useful parts without analysis.","warn"]]},
   {t:"The analysis",x:"Analysis shows retailers want a simple ordering feature, not the full app.",
    c:[["Pivot to a simple ordering tool built on what already works",{value:15,learn:10,cred:10},"Good use of evidence: develop and analyse new alternatives.","good"],
       ["Continue with the original design because the CEO likes it",{value:-15,learn:-5,cred:-10},"Ignoring evidence for political reasons.","bad"],
       ["Commission another six-month study",{value:-5,learn:3,cred:-3},"Analysis paralysis — sometimes 'good enough' information is enough.","warn"]]}
  ],
  lesson:"Decide on future costs and benefits, not on what has already been spent."},
 select:{title:"Selector: which decision approach fits?",
  intro:"Rate the decision situation (0–10).",
  criteria:[["Goals are clear and information is complete",5],["Time pressure is high",5],["You have deep experience with similar problems",5],["Stakes are high and the decision is hard to reverse",5],["Reliable data and research are available",5]],
  options:[
   ["Rational (full analysis)",[5,1,2,4,4],"Best when the problem is clear and information is available."],
   ["Bounded rationality / satisficing",[2,5,3,2,2],"Good enough when search is costly or time is short."],
   ["Intuitive",[1,4,5,1,1],"Fast and powerful for experienced managers; check it against data."],
   ["Evidence-based management",[4,2,2,5,5],"Systematically use the best available evidence."]
  ]},
 quiz:{q:[
  ["The first step in the decision-making process is…",["Develop alternatives","Identify a problem","Allocate weights","Implement"],1,"Identify a problem."],
  ["Accepting solutions that are 'good enough' is called…",["Maximizing","Satisficing","Escalation","Optimizing"],1,"Satisficing, under bounded rationality."],
  ["Increasing commitment to a decision despite evidence it was wrong is…",["Intuition","Escalation of commitment","Evidence-based management","Rationality"],1,"Escalation of commitment."],
  ["Which assumption belongs to rational decision making?",["Limited information","The decision maker is fully objective and logical","Time is always short","Satisficing"],1,"Rational model assumptions."],
  ["Making decisions on the basis of experience, feelings and accumulated judgement is…",["Rational","Intuitive","Programmed","Group"],1,"Intuitive decision making."]
 ]}
});

/* ---------------- L14 ---------------- */
add(14,{
 primer:[
  "<b>Structured problems</b> are straightforward, familiar and easily defined and are handled by <b>programmed decisions</b> (procedures, rules, policies). <b>Unstructured problems</b> are new or unusual and need <b>nonprogrammed</b>, unique decisions.",
  "Decision-making <b>conditions</b>: <b>certainty</b> (outcome known), <b>risk</b> (probabilities can be estimated — use expected value) and <b>uncertainty</b> (no reliable probabilities — choice depends on attitude: <b>maximax</b> optimist, <b>maximin</b> pessimist, <b>minimax regret</b>).",
  "Decision-making <b>styles</b>: <b>linear thinking</b> (uses external data and rational processing) vs <b>nonlinear thinking</b> (uses internal sources — feelings and intuition).",
  "Common <b>biases</b>: overconfidence, immediate gratification, anchoring, selective perception, confirmation, framing, availability, representation, randomness, sunk costs, self-serving and hindsight."
 ],
 discussion:["Give an example of a programmed decision in a bank branch and a nonprogrammed one.","Which bias do students show most often when preparing for exams?","Are you a linear or nonlinear thinker? How does it affect your group work?"],
 calc:{title:"What-if: deciding under risk (expected value)",
  intro:"A Gujranwala appliance maker must choose a strategy for next year. Payoffs (Rs million profit) depend on demand. Set the probabilities to compare expected values — and see what an optimist or a pessimist would choose under uncertainty.",
  inputs:[
   {k:"pH",label:"Probability of strong demand (%)",min:0,max:100,step:5,v:30,f:x=>x+"%"},
   {k:"pL",label:"Probability of weak demand (%)",min:0,max:100,step:5,v:30,f:x=>x+"%",hint:"Normal demand = the remainder."}
  ],
  run(v){
   const pay={"Expand the factory":[90,40,-30],"Launch a new product line":[70,35,-10],"Upgrade existing products":[40,30,10],"Do nothing":[15,10,5]};
   let pH=v.pH/100, pL=v.pL/100; if(pH+pL>1){ const s=pH+pL; pH/=s; pL/=s; } const pN=1-pH-pL;
   const ev=Object.entries(pay).map(([k,a])=>({label:k,value:pH*a[0]+pN*a[1]+pL*a[2]}));
   const best=ev.slice().sort((a,b)=>b.value-a.value)[0].label;
   const maxi=Object.entries(pay).sort((a,b)=>Math.max(...b[1])-Math.max(...a[1]))[0][0];
   const mini=Object.entries(pay).sort((a,b)=>Math.min(...b[1])-Math.min(...a[1]))[0][0];
   ev.forEach(e=>e.color=e.label===best?"--c3":"--c1");
   return {stats:[["Normal demand probability",fmt(pN*100)+"%"],["Highest expected value",best],["Maximax (optimist)",maxi],["Maximin (pessimist)",mini]],
    bars:ev,barsOpt:{fmt:x=>"Rs "+fmt(x,1)+"m",labelW:200},
    fb:["info","Under <b>risk</b>, choose the highest expected value: <b>"+best+"</b>. Payoffs (strong/normal/weak): Expand 90/40/−30, New line 70/35/−10, Upgrade 40/30/10, Do nothing 15/10/5. Under <b>uncertainty</b> an optimist picks "+maxi+"; a pessimist picks "+mini+"."]};
  }},
 sort:{title:"Sort: which decision bias is this?",
  bins:["Anchoring","Confirmation","Sunk costs / escalation","Overconfidence","Availability","Framing"],
  items:[
   ["A manager fixes the new salary near the candidate's old salary",0,"Anchoring on initial information."],
   ["The first price quoted in a negotiation shapes the final deal",0,"Anchoring."],
   ["Only reading reports that support the plan you already like",1,"Seeking information that confirms past choices."],
   ["Dismissing customer complaints that contradict your view",1,"Confirmation bias."],
   ["'We've already spent Rs 50 million — we can't stop now'",2,"Focusing on past expenditure."],
   ["Continuing a failing project to avoid admitting a mistake",2,"Escalation of commitment."],
   ["'I'm 100% sure this product will succeed' — without data",3,"Thinking you know more than you do."],
   ["Judging an employee on a recent incident you remember vividly",4,"Using information most readily available."],
   ["Choosing a treatment described as '90% survival' over one with '10% mortality'",5,"The way information is presented changes the choice."]
  ],
  then:{title:"Sort: programmed or nonprogrammed decision?",
   bins:["Programmed (structured problem)","Nonprogrammed (unstructured problem)"],
   items:[
    ["Reordering stock when inventory falls below 500 units",0,"A routine rule."],
    ["Handling a customer refund under the returns policy",0,"Policy-based."],
    ["Approving annual leave requests",0,"Procedure."],
    ["Deciding whether to enter the Saudi market",1,"New, unique, high-stakes."],
    ["Responding to a sudden cyber-attack",1,"Unusual, ambiguous."],
    ["Choosing whether to merge with a competitor",1,"Nonprogrammed."]
   ]}},
 dilemma:{title:"Dilemma: under pressure to decide",
  intro:"You are the purchasing manager of a pharmaceutical firm. A supplier offers raw material at 25% below the usual price for a one-time bulk order.",
  meters:[["value","Value"],["risk","Risk control"],["quality","Decision quality"]],
  steps:[
   {t:"The offer",x:"The supplier says the offer expires tonight.",
    c:[["Accept now — it's a great deal and I'm sure it's fine",{value:10,risk:-20,quality:-15},"Overconfidence and time pressure — a classic recipe for bad decisions.","bad"],
       ["Ask for a sample, a certificate of analysis and supplier references, even if the deal is lost",{value:-3,risk:15,quality:15},"Treat a nonprogrammed decision with care; quality matters more in pharma.","good"],
       ["Ask a colleague who already likes the supplier",{value:3,risk:-5,quality:-8},"Confirmation bias — you are looking for agreement, not evidence.","warn"]]},
   {t:"The evidence",x:"Tests show the material meets standards, but the supplier has no track record.",
    c:[["Buy a small trial lot first",{value:8,risk:12,quality:12},"Reduces risk under uncertainty while keeping some of the benefit.","good"],
       ["Buy the full bulk order",{value:15,risk:-10,quality:0},"Maximax thinking — fine if you can afford the worst case.","warn"],
       ["Reject — never buy from new suppliers",{value:-10,risk:5,quality:-5},"Too rigid; turns a nonprogrammed decision into a blanket rule.","info"]]}
  ],
  lesson:"Recognize the type of problem and the condition you face, and guard against common biases."},
 select:{title:"Selector: which decision rule under uncertainty?",
  intro:"Rate your situation (0–10).",
  criteria:[["Probabilities of outcomes can be estimated",5],["The firm can afford the worst outcome",5],["You cannot survive a big loss",5],["You worry about regretting a missed opportunity",5],["Management is optimistic and growth-focused",5]],
  options:[
   ["Expected value (decision under risk)",[5,3,2,2,2],"Weight each payoff by its probability."],
   ["Maximax (optimist)",[1,5,1,2,5],"Choose the best of the best outcomes."],
   ["Maximin (pessimist)",[1,1,5,1,1],"Choose the best of the worst outcomes."],
   ["Minimax regret",[1,3,2,5,3],"Minimize the maximum 'regret' of a missed opportunity."]
  ]},
 quiz:{q:[
  ["A decision made using a rule, procedure or policy is…",["Nonprogrammed","Programmed","Intuitive","Group"],1,"Programmed decision."],
  ["When a manager can estimate the probability of outcomes, the condition is…",["Certainty","Risk","Uncertainty","Ambiguity"],1,"Risk."],
  ["An optimistic manager under uncertainty would choose…",["Maximin","Maximax","Minimax regret","Expected value"],1,"Maximax."],
  ["Fixating on initial information as a starting point is the… bias.",["Framing","Anchoring","Availability","Hindsight"],1,"Anchoring."],
  ["A decision style that uses internal sources such as feelings and intuition is…",["Linear thinking","Nonlinear thinking","Programmed","Rational"],1,"Nonlinear thinking."]
 ]}
});

/* ---------------- L15 ---------------- */
add(15,{
 primer:[
  "<b>Planning</b> means defining goals, establishing strategies and developing plans to coordinate activities. It gives direction, reduces uncertainty, minimizes waste and sets the standards used in controlling.",
  "<b>Goals</b> (objectives) are desired outcomes. <b>Stated goals</b> are what the organization says; <b>real goals</b> are what it actually pursues.",
  "Types of plans: <b>strategic</b> (whole organization) vs <b>operational</b> (one functional area); <b>long-term</b> vs <b>short-term</b>; <b>specific</b> vs <b>directional</b>; <b>single-use</b> (one-time) vs <b>standing</b> (ongoing: policies, rules, procedures).",
  "Well-written goals are written in terms of outcomes, measurable and quantifiable, clear about a time frame, challenging yet attainable, written down and communicated to everyone who needs to know (often summarized as SMART)."
 ],
 discussion:["Rewrite 'I want to do well this semester' as a well-written goal.","Why might a company's real goals differ from its stated goals?","Is planning useful in a highly uncertain environment like Pakistan's? Defend your view."],
 calc:{title:"What-if: what growth does the goal require?",
  intro:"A Peshawar retailer wants to grow monthly sales. Set today's level, the target and the deadline to see the monthly growth rate needed — and how long it would take at the current growth rate.",
  inputs:[
   {k:"now",label:"Current monthly sales (Rs million)",min:1,max:100,step:1,v:20},
   {k:"tgt",label:"Target monthly sales (Rs million)",min:2,max:200,step:1,v:30},
   {k:"m",label:"Deadline (months)",min:1,max:36,step:1,v:12},
   {k:"cur",label:"Current monthly growth rate (%)",min:0,max:10,step:0.1,v:2,f:x=>x.toFixed(1)+"%"}
  ],
  run(v){
   if(v.tgt<=v.now) return {stats:[["Required growth","0%"]],fb:["info","The target is at or below today's level — not a challenging goal. Well-written goals are <b>challenging yet attainable</b>."]};
   const req=(Math.pow(v.tgt/v.now,1/v.m)-1)*100, months=v.cur>0?Math.log(v.tgt/v.now)/Math.log(1+v.cur/100):Infinity;
   const ratio=req/Math.max(v.cur,0.01);
   return {stats:[["Required monthly growth",req.toFixed(2)+"%"],["Months at current rate",isFinite(months)?fmt(months,1):"never"],["Total growth needed",fmt((v.tgt/v.now-1)*100)+"%"]],
    bars:[{label:"Required rate",value:req,color:"--c4"},{label:"Current rate",value:v.cur,color:"--c1"}],barsOpt:{fmt:x=>x.toFixed(2)+"%"},
    fb:ratio<=1?["good","The goal is reachable at today's pace — maybe too easy. Consider a stretch target."]
     :ratio<=2?["info","<b>Challenging yet attainable.</b> You need about "+fmt(ratio,1)+"× today's growth rate — plan the actions (new products, marketing, outlets) to get there."]
     :["warn","The goal needs "+fmt(ratio,1)+"× today's growth rate. Either extend the deadline, lower the target, or plan major new actions — unrealistic goals demotivate people."]};
  }},
 sort:{title:"Sort the plans by type",
  bins:["Strategic plan","Operational plan","Single-use plan","Standing plan"],
  items:[
   ["A five-year plan to enter the Gulf market",0,"Applies to the whole organization and sets overall goals."],
   ["Deciding to become the lowest-cost producer in the industry",0,"Strategic."],
   ["Next week's production schedule for Line 2",1,"Specifies how overall goals will be achieved in one area."],
   ["The marketing department's quarterly social-media calendar",1,"Operational."],
   ["The budget for the 2026 convocation ceremony",2,"A one-time plan for a unique situation."],
   ["The project plan to open one new branch in Abbottabad",2,"Single-use."],
   ["The university's attendance policy",3,"Ongoing guidance for repeated activities."],
   ["The standard procedure for handling customer refunds",3,"Standing plan."]
  ],
  then:{title:"Sort: well-written goal or poorly written goal?",
   bins:["Well-written goal","Poorly written goal"],
   items:[
    ["Reduce customer complaints by 20% by 30 June 2027",0,"Outcome-based, measurable and time-bound."],
    ["Raise the on-time delivery rate from 85% to 95% within six months",0,"Well-written."],
    ["Train all 40 branch staff in the new software by March",0,"Well-written."],
    ["Do our best to improve quality",1,"Not measurable; no time frame."],
    ["Become the greatest company in the world",1,"Not specific or attainable."],
    ["Work harder this year",1,"Describes activity, not an outcome."]
   ]}},
 dilemma:{title:"Dilemma: setting the team's targets",
  intro:"You manage eight sales officers at a Pakistani insurance company and must set next year's goals.",
  meters:[["perf","Performance"],["commit","Commitment"],["ethic","Integrity"]],
  steps:[
   {t:"The target",x:"Head office wants a 50% increase. Your team grew 15% last year.",
    c:[["Pass on the 50% target unchanged",{perf:0,commit:-15,ethic:-10},"Unrealistic goals demotivate and push people to cut corners.","bad"],
       ["Use participative goal setting: agree a stretching 25% target with a plan and explain the gap to head office",{perf:12,commit:15,ethic:5},"Like MBO: goals set jointly are more likely to be accepted and achieved.","good"],
       ["Keep 15% — it worked last year",{perf:-10,commit:5,ethic:0},"Easy goals are not challenging.","warn"]]},
   {t:"Making it measurable",x:"How will you track progress?",
    c:[["Only look at total sales at year end",{perf:-5,commit:-3,ethic:-3},"No feedback during the year means no chance to correct.","warn"],
       ["Monthly reviews of new policies, renewals and customer complaints",{perf:12,commit:8,ethic:10},"Feedback on several outcomes keeps quality and honesty in view.","good"],
       ["Rank officers publicly every week",{perf:5,commit:-10,ethic:-8},"Pressure can rise faster than performance.","bad"]]}
  ],
  lesson:"Good goals are challenging yet attainable, measurable, time-bound and accepted by the people who must achieve them."},
 select:{title:"Selector: what kind of plan is needed? (contingency factors)",
  intro:"Rate the situation (0–10).",
  criteria:[["Environmental uncertainty is high",5],["You are a top-level manager",5],["Current decisions commit resources far into the future",5],["You are a lower-level manager",5],["The environment is stable and predictable",5]],
  options:[
   ["Specific, short-term operational plans",[1,1,2,5,5],"Clear targets for stable situations and lower levels."],
   ["Directional, flexible plans",[5,4,2,2,1],"General guidelines that allow adaptation."],
   ["Long-term strategic plans",[3,5,5,1,3],"Needed when commitments extend far ahead."]
  ]},
 quiz:{q:[
  ["Goals that an organization actually pursues, shown by what its members are doing, are…",["Stated goals","Real goals","Directional goals","Standing goals"],1,"Real goals."],
  ["A plan that applies to the entire organization is…",["Operational","Strategic","Single-use","Specific"],1,"Strategic plan."],
  ["An ongoing plan that guides activities performed repeatedly is a…",["Single-use plan","Standing plan","Directional plan","Budget"],1,"Standing plan."],
  ["Which is a well-written goal?",["Improve sales","Increase sales by 10% by December 2026","Be the best","Do more marketing"],1,"Measurable and time-bound."],
  ["Under high environmental uncertainty, plans should be…",["Very specific","Directional and flexible","Avoided","Fixed for ten years"],1,"Flexibility helps under uncertainty."]
 ]}
});

/* ---------------- L16 ---------------- */
add(16,{
 primer:[
  "Approaches to setting goals: <b>traditional goal setting</b> (top down) and <b>management by objectives (MBO)</b> — goals mutually agreed by employees and managers, with periodic progress reviews.",
  "Techniques for <b>assessing the environment</b>: environmental scanning (including competitor intelligence), forecasting (quantitative and qualitative) and benchmarking.",
  "Techniques for <b>allocating resources</b>: budgeting, scheduling (Gantt charts, load charts, PERT network analysis), breakeven analysis and linear programming.",
  "<b>Contemporary techniques</b>: project management and scenario planning."
 ],
 discussion:["Use break-even analysis to decide whether a canteen on campus should open on Saturdays.","What could a Pakistani bank benchmark from a leading fintech?","Build a simple Gantt chart for your semester project."],
 calc:{title:"What-if: break-even analysis",
  intro:"A start-up in Wah plans to sell water filters. Change the numbers to see how many units must be sold to break even.",
  inputs:[
   {k:"fc",label:"Total fixed costs (Rs 000)",min:100,max:5000,step:50,v:1200},
   {k:"p",label:"Selling price per unit (Rs)",min:500,max:10000,step:100,v:4000},
   {k:"vc",label:"Variable cost per unit (Rs)",min:100,max:9000,step:100,v:2500},
   {k:"q",label:"Expected sales (units)",min:0,max:5000,step:50,v:1000}
  ],
  run(v){
   const cm=v.p-v.vc;
   if(cm<=0) return {stats:[["Contribution per unit",rs(cm)]],fb:["bad","Price is at or below variable cost — every sale loses money, so there is no break-even point."]};
   const be=v.fc*1000/cm, profit=v.q*cm-v.fc*1000, mos=v.q>0?(v.q-be)/v.q*100:-100;
   return {stats:[["Contribution margin per unit",rs(cm)],["Break-even point",fmt(Math.ceil(be))+" units"],["Profit at expected sales",rs(profit)],["Margin of safety",fmt(mos)+"%"]],
    bars:[{label:"Break-even units",value:be,color:"--c2"},{label:"Expected units",value:v.q,color:v.q>=be?"--c3":"--c5"}],barsOpt:{fmt:x=>fmt(x)},
    fb:profit>=0?["good","Expected sales exceed break-even by "+fmt(v.q-be)+" units. Breakeven = fixed costs ÷ (price − variable cost)."]
     :["warn","You are "+fmt(be-v.q)+" units short of break-even. Raise the price, cut variable cost, reduce fixed costs or plan for higher sales."]};
  }},
 sort:{title:"Sort the planning tools",
  bins:["Environmental scanning","Forecasting","Benchmarking","Budgeting","Scheduling","Scenario planning"],
  items:[
   ["Monitoring competitors' new products and prices",0,"Screening information to detect trends (competitor intelligence)."],
   ["Tracking new regulations announced by the SECP",0,"Environmental scanning."],
   ["Predicting next year's sales with a time-series model",1,"Quantitative forecasting."],
   ["Asking a panel of experts to estimate demand",1,"Qualitative forecasting (jury of opinion)."],
   ["Studying how a top competitor achieves faster delivery",2,"Searching for best practices that lead to superior performance."],
   ["A numerical plan allocating money to each department",3,"Budget."],
   ["A Gantt chart showing when each project task starts and ends",4,"Scheduling."],
   ["A PERT network identifying the critical path",4,"Scheduling."],
   ["Preparing plans for 'oil at $50', '$80' and '$120' futures",5,"Scenario planning — a consistent view of what the future is likely to be."]
  ]},
 dilemma:{title:"Dilemma: the project is running late",
  intro:"You manage the project to open a new pharmacy outlet in 10 weeks. A PERT network shows the critical path runs through licensing → fit-out → stocking.",
  meters:[["time","On time"],["cost","Budget"],["quality","Quality"]],
  steps:[
   {t:"Licence delayed",x:"The licence is two weeks late. Fit-out cannot start without it.",
    c:[["Speed up shelf painting (not on the critical path)",{time:-5,cost:-5,quality:0},"Speeding up non-critical activities does not shorten the project.","bad"],
       ["Prepare fit-out designs and order fixtures now so fit-out takes less time after the licence",{time:12,cost:-3,quality:5},"Reducing time on the critical path is what matters.","good"],
       ["Start fit-out without the licence",{time:10,cost:-10,quality:-15},"Saves time but risks fines and rework.","bad"]]},
   {t:"Budget check",x:"Costs are running 8% over budget.",
    c:[["Cut stock variety at opening",{time:0,cost:8,quality:-8},"Saves money but weakens the launch.","warn"],
       ["Review the budget line by line and negotiate with suppliers",{time:0,cost:10,quality:3},"Budgets are control tools as well as plans.","good"],
       ["Ignore it until the end",{time:0,cost:-12,quality:0},"Overruns are cheaper to fix early.","bad"]]}
  ],
  lesson:"Planning tools such as PERT and budgets show where to act — focus on the critical path and the biggest variances."},
 select:{title:"Selector: which planning tool should you use?",
  intro:"Rate what you need (0–10).",
  criteria:[["Understand what competitors and regulators are doing",5],["Predict future demand",5],["Learn from the best performers",5],["Allocate money across activities",5],["Coordinate many tasks to a deadline",5],["Decide if a product will be profitable",5]],
  options:[
   ["Environmental scanning",[5,2,2,1,1,1],"Detect emerging trends early."],
   ["Forecasting",[2,5,1,2,1,2],"Predict outcomes using quantitative or qualitative methods."],
   ["Benchmarking",[3,1,5,1,2,1],"Find and copy best practices."],
   ["Budgeting",[1,2,1,5,2,3],"Allocate resources numerically."],
   ["Scheduling (Gantt / PERT)",[1,1,1,2,5,1],"Plan and control timing."],
   ["Break-even analysis",[1,2,1,2,1,5],"Find the volume needed to cover costs."]
  ]},
 quiz:{q:[
  ["Goals mutually agreed by employees and managers with periodic reviews describe…",["Traditional goal setting","Management by objectives (MBO)","Scenario planning","Benchmarking"],1,"MBO."],
  ["The longest sequence of activities in a PERT network is the…",["Slack path","Critical path","Load chart","Budget line"],1,"Critical path."],
  ["Searching for best practices among competitors or non-competitors is…",["Forecasting","Benchmarking","Budgeting","Scanning"],1,"Benchmarking."],
  ["Break-even point = fixed costs ÷ …",["Price","Variable cost","(Price − variable cost)","Total revenue"],2,"Contribution margin per unit."],
  ["A bar graph with time on the horizontal axis and activities on the vertical is a…",["PERT network","Gantt chart","Load chart","Scatter plot"],1,"Gantt chart."]
 ]}
});

})();
