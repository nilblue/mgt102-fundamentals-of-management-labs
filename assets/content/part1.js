/* MGT102 worksheets — Weeks 1–4 (Lectures 1–8). Authored teaching content. */
(function(){
const {add,fmt,money}=Lab;
const rs=(n,d=0)=>money(n,d,'Rs ');

/* ---------------- L1 ---------------- */
add(1,{
 primer:[
  "A <b>manager</b> coordinates and oversees the work of other people so that organizational goals are accomplished. Non-managerial employees work directly on a job or task and oversee no one.",
  "Managers are usually grouped as <b>first-line</b> (supervisors, team leaders), <b>middle</b> (branch, regional, department managers) and <b>top</b> managers (CEO, MD, vice presidents).",
  "<b>Management</b> is getting things done <b>efficiently</b> (doing things right — getting the most output from the least input) and <b>effectively</b> (doing the right things — achieving the goals).",
  "Managers work in every kind of organization — firms, government, hospitals, universities, NGOs. Every organization has a distinct purpose, people and a deliberate structure."
 ],
 discussion:["Think of a shop, clinic or office you know in Wah or Islamabad. Who is the manager there, and at what level?","Can an organization be efficient but not effective? Give an example from Pakistani business news.","Why do good managers matter more when the economy is under pressure?"],
 calc:{title:"What-if: efficiency vs effectiveness",
  intro:"A production supervisor planned an output and a budget for the month. Move the sliders to see whether the unit was <b>efficient</b> (output per rupee of resources compared with plan) and <b>effective</b> (goal achieved).",
  inputs:[
   {k:"tOut",label:"Target output (units)",min:500,max:2000,step:50,v:1000},
   {k:"aOut",label:"Actual output (units)",min:300,max:2200,step:10,v:950},
   {k:"pRes",label:"Planned resources (Rs 000)",min:100,max:1000,step:10,v:500},
   {k:"aRes",label:"Actual resources used (Rs 000)",min:100,max:1200,step:10,v:520}
  ],
  run(v){
   const eff=v.aOut/v.tOut*100;
   const effi=(v.aOut/v.aRes)/(v.tOut/v.pRes)*100;
   const tone=(eff>=100&&effi>=100)?"good":(eff<100&&effi<100)?"bad":"warn";
   const msg=(eff>=100&&effi>=100)?"<b>Efficient and effective.</b> The goal was met and resources were used better than planned — this is what good management looks like."
    :(eff>=100)?"<b>Effective but not efficient.</b> The goal was met, but each unit cost more resources than planned (e.g. overtime, waste). Ask: could we have reached the goal with less?"
    :(effi>=100)?"<b>Efficient but not effective.</b> Resources were used carefully, but the goal was missed. Doing things right is not enough — the manager must also do the right things."
    :"<b>Neither efficient nor effective.</b> The goal was missed and resources were wasted. Revisit planning, organizing and control.";
   return {stats:[["Effectiveness (goal achieved)",fmt(eff)+"%"],["Efficiency index (100 = plan)",fmt(effi)],["Cost per unit",rs(v.aRes*1000/v.aOut)]],
    bars:[{label:"Effectiveness",value:eff,color:eff>=100?"--c3":"--c5"},{label:"Efficiency index",value:effi,color:effi>=100?"--c3":"--c5"}],barsOpt:{max:Math.max(150,eff,effi),fmt:x=>fmt(x)},
    fb:[tone,msg]};
  }},
 sort:{title:"Sort the people by management level",
  bins:["Top manager","Middle manager","First-line manager","Non-managerial employee"],
  items:[
   ["Chief Executive Officer of a cement company",0,"Top managers make organization-wide decisions and set plans and goals."],
   ["Managing Director of a bank",0,"Runs the whole organization."],
   ["Vice President, Marketing",0,"Part of the top-management team."],
   ["Regional sales manager overseeing area managers",1,"Manages other managers — the definition of middle management."],
   ["Plant manager responsible for several supervisors",1,"Translates top-level goals into plans for supervisors."],
   ["Branch manager supervising three department heads",1,"Sits between top management and first-line managers."],
   ["Shift supervisor on a textile production line",2,"Directs the daily work of non-managerial employees."],
   ["Team leader at a call centre",2,"First-line managers are often called supervisors or team leaders."],
   ["Head nurse supervising ward nurses",2,"Manages the work of non-managerial staff."],
   ["Software developer in a product team",3,"Works directly on tasks and oversees no one."],
   ["Data-entry officer",3,"Non-managerial — no responsibility for others' work."]
  ]},
 dilemma:{title:"Dilemma: the new shift supervisor",
  intro:"You have just been promoted to supervisor of a 20-person packaging line at a pharmaceutical plant in Hattar. Each choice moves your scores.",
  meters:[["effi","Efficiency"],["effe","Effectiveness"],["morale","Team morale"]],
  steps:[
   {t:"Week 1 — behind schedule",x:"A hospital order of 10,000 packs is due on Friday and your line is 15% behind schedule. What do you do?",
    c:[["Order paid overtime for everyone until the order is done",{effi:-12,effe:15,morale:-5},"The order ships on time (effective) but labour cost per pack rises sharply (less efficient), and people are tired.","warn"],
       ["Skip some quality checks to speed things up",{effi:8,effe:-20,morale:-8},"Output rises briefly, but a batch fails inspection and must be repacked. The goal is missed — speed without quality is not effectiveness.","bad"],
       ["Ask the team where time is being lost and rebalance tasks",{effi:10,effe:12,morale:12},"Two operators suggest moving the labelling station. Output improves without overtime — efficient and effective, and the team feels heard.","good"]]},
   {t:"Week 3 — material waste",x:"Carton waste has risen 8% this month. Your manager wants it fixed.",
    c:[["Deduct the cost of waste from operators' pay",{effi:5,effe:0,morale:-20},"Waste falls a little, but morale collapses and two experienced operators ask for transfers.","bad"],
       ["Set a daily waste target, post results on a board and coach operators",{effi:12,effe:6,morale:6},"Clear goals and feedback cut waste to below the old level within two weeks.","good"],
       ["Ignore it — output is what really matters",{effi:-12,effe:-3,morale:0},"Costs keep rising. A manager who ignores efficiency wastes the organization's resources.","bad"]]}
  ],
  lesson:"Management means getting work done efficiently <i>and</i> effectively, with and through other people."},
 select:{title:"Selector: which management function needs your attention?",
  intro:"Set how strongly each symptom is present in your unit (0–10). The selector shows which of the four management functions you should focus on first.",
  criteria:[["Goals are unclear or keep changing",5],["Work is poorly coordinated — people duplicate tasks",5],["Staff seem demotivated or in conflict",5],["Results are drifting away from targets",5],["A new project is about to start",5]],
  options:[
   ["Planning",[5,2,1,3,5],"Define goals, set strategies and develop plans to coordinate activities."],
   ["Organizing",[2,5,2,2,4],"Decide what needs to be done, how and by whom — arrange and structure the work."],
   ["Leading",[2,2,5,2,3],"Motivate, direct and resolve conflict — work with and through people."],
   ["Controlling",[2,3,1,5,2],"Monitor performance, compare it with goals and correct deviations."]
  ]},
 quiz:{q:[
  ["Doing things right — getting the most output from the least amount of input — is called…",["Effectiveness","Efficiency","Leading","Planning"],1,"Efficiency is about means (resources); effectiveness is about ends (goals)."],
  ["A regional manager who supervises area managers is a…",["Top manager","Middle manager","First-line manager","Non-managerial employee"],1,"Middle managers manage other managers."],
  ["Which is NOT one of the three characteristics shared by all organizations?",["Distinct purpose","People","Deliberate structure","Profit motive"],3,"Hospitals, universities and NGOs are organizations too — profit is not required."],
  ["A supervisor who meets the monthly target but uses 30% more materials than planned is…",["Efficient and effective","Effective but not efficient","Efficient but not effective","Neither"],1,"The goal was met (effective) but resources were wasted (inefficient)."],
  ["The universality of management means…",["Only large firms need managers","Management is needed in all organizations, at all levels and in all work areas","All managers do exactly the same tasks","Management is the same in every country"],1,"Every organization — big or small, profit or non-profit — needs management."]
 ]}
});

/* ---------------- L2 ---------------- */
add(2,{
 primer:[
  "<b>Four functions</b> (Fayol, simplified): planning, organizing, leading and controlling.",
  "<b>Mintzberg's ten roles</b> fall into three groups: <b>interpersonal</b> (figurehead, leader, liaison), <b>informational</b> (monitor, disseminator, spokesperson) and <b>decisional</b> (entrepreneur, disturbance handler, resource allocator, negotiator).",
  "<b>Katz's skills</b>: technical skills matter most for first-line managers, conceptual skills most for top managers, and human (interpersonal) skills equally at all levels.",
  "<b>Management history</b>: classical (Taylor's scientific management; Fayol and Weber's general administrative theory), behavioural (Hawthorne studies), quantitative and contemporary (systems and contingency) approaches.",
  "The <b>changing job</b>: customers, social media, innovation, sustainability and employee well-being now shape what managers do."
 ],
 discussion:["Which of Mintzberg's roles did your school principal play most often?","Is Taylor's 'one best way' still useful in a Pakistani garment factory? Where might it fail?","Why are human skills important at every level of management?"],
 calc:{title:"What-if: Taylor's scientific management",
  intro:"Taylor's pig-iron study raised output from about 12.5 to 47.5 tons per worker per day while daily pay rose from about $1.15 to $1.85. Change the numbers to see why scientific management lowered cost per unit even though wages went up.",
  inputs:[
   {k:"o1",label:"Output per worker per day — before (tons)",min:5,max:30,step:0.5,v:12.5},
   {k:"o2",label:"Output per worker per day — after (tons)",min:5,max:60,step:0.5,v:47.5},
   {k:"w1",label:"Daily wage — before ($)",min:0.5,max:3,step:0.05,v:1.15,f:x=>"$"+x.toFixed(2)},
   {k:"w2",label:"Daily wage — after ($)",min:0.5,max:4,step:0.05,v:1.85,f:x=>"$"+x.toFixed(2)}
  ],
  run(v){
   const c1=v.w1/v.o1, c2=v.w2/v.o2, gain=(v.o2/v.o1-1)*100, save=(1-c2/c1)*100;
   return {stats:[["Productivity gain",fmt(gain)+"%"],["Wage increase",fmt((v.w2/v.w1-1)*100)+"%"],["Labour cost per ton — after","$"+c2.toFixed(3)],["Cost saving per ton",fmt(save)+"%"]],
    bars:[{label:"Cost/ton before ($)",value:c1,color:"--c2"},{label:"Cost/ton after ($)",value:c2,color:save>0?"--c3":"--c5"}],barsOpt:{fmt:x=>"$"+x.toFixed(3)},
    fb:save>0?["good","Output grew faster than wages, so <b>cost per unit fell by "+fmt(save)+"%</b> and workers earned more. This 'win-win' was Taylor's argument for finding the one best way and paying incentive wages."]
     :["bad","Wages grew faster than output, so cost per unit <b>rose</b>. Scientific management only pays off when the method change raises productivity more than pay."]};
  }},
 sort:{title:"Sort Mintzberg's managerial roles",
  bins:["Interpersonal roles","Informational roles","Decisional roles"],
  items:[
   ["Cutting the ribbon at a new branch opening (figurehead)",0,"Symbolic, ceremonial duties."],
   ["Hiring, training and motivating staff (leader)",0,"Working with and through people."],
   ["Keeping contacts with managers in other firms (liaison)",0,"Maintaining an outside network."],
   ["Reading industry reports and market news (monitor)",1,"Receiving and gathering information."],
   ["Sharing new policy details with your team (disseminator)",1,"Passing information inside the organization."],
   ["Speaking to the media about company results (spokesperson)",1,"Passing information to outsiders."],
   ["Starting a new product line (entrepreneur)",2,"Searching for opportunities and starting change."],
   ["Handling a sudden strike or machine breakdown (disturbance handler)",2,"Corrective action in a crisis."],
   ["Deciding how to split the annual budget (resource allocator)",2,"Allocating money, people and time."],
   ["Bargaining with a union over wages (negotiator)",2,"Representing the organization in negotiations."]
  ],
  then:{title:"Sort: which skill is most important at each level?",
   bins:["Conceptual skills","Human skills","Technical skills"],
   items:[
    ["Seeing how a new competitor affects the whole firm",0,"Thinking about abstract, complex situations — critical for top managers."],
    ["Designing the company's five-year direction",0,"Big-picture, organization-wide thinking."],
    ["Resolving a conflict between two team members",1,"Working well with people — needed equally at all levels."],
    ["Motivating a demoralised sales team",1,"Human skills."],
    ["Showing a new operator how to set up a machine",2,"Job-specific knowledge — most important for first-line managers."],
    ["Checking a spreadsheet model for errors",2,"Technical, task-specific expertise."]
   ]}},
 dilemma:{title:"Dilemma: the changing managerial job",
  intro:"You manage a busy outlet of a Pakistani fast-food chain in Rawalpindi. Today's managers must respond to customers, social media and pressure to innovate.",
  meters:[["cust","Customers"],["team","Team"],["results","Results"]],
  steps:[
   {t:"A viral complaint",x:"A customer posts a video of a 45-minute wait. It has 50,000 views by evening.",
    c:[["Ignore it — it will be forgotten in a few days",{cust:-20,team:0,results:-10},"Silence looks like you don't care. Social media is now part of the manager's job.","bad"],
       ["Reply publicly with an apology, contact the customer and fix the bottleneck",{cust:18,team:5,results:5},"You turn a complaint into proof that you listen — the customer-responsive approach Robbins describes.","good"],
       ["Blame the kitchen staff in your reply",{cust:-5,team:-20,results:-5},"Customers do not care whose fault it is, and your team feels betrayed.","bad"]]},
   {t:"Head office wants innovation",x:"Head office asks every outlet to propose one innovation to cut waiting time.",
    c:[["Copy what a competitor does without testing",{cust:0,team:-5,results:2},"Quick, but it may not fit your outlet's layout or customers.","warn"],
       ["Run a two-week pilot of a self-order kiosk designed with staff input",{cust:12,team:10,results:12},"Trying things, learning from results and involving staff are the heart of managing for innovation.","good"],
       ["Say nothing changes until head office sends a plan",{cust:-5,team:-3,results:-8},"Waiting for instructions is the opposite of what the changing managerial job demands.","bad"]]}
  ],
  lesson:"Customers, social media and innovation are now central to every manager's job, not side issues."},
 select:{title:"Selector: which management approach fits the problem?",
  intro:"Each historical approach to management is still a useful lens today. Rate the problem you face (0–10) to see which approach helps most.",
  criteria:[["The task is repetitive and easy to measure",5],["The real issue is people's motivation and group norms",5],["The problem needs numbers — scheduling, inventory, forecasting",5],["Many departments depend on each other",5],["Rules, authority and fairness are unclear",5]],
  options:[
   ["Scientific management (Taylor, Gilbreths)",[5,1,3,1,2],"Study the task, find the one best way, train workers and pay incentives."],
   ["General administrative theory (Fayol, Weber)",[2,2,1,3,5],"Clear principles, division of labour, hierarchy and rules (bureaucracy)."],
   ["Behavioural approach (Hawthorne studies)",[1,5,1,2,2],"Social norms, attention and attitudes drive performance."],
   ["Quantitative approach",[3,1,5,2,1],"Statistics, optimization models and simulations for better decisions."],
   ["Contemporary: systems & contingency",[1,3,2,5,3],"See the organization as an open system; the best approach depends on the situation."]
  ]},
 quiz:{q:[
  ["Speaking to journalists about quarterly results is which Mintzberg role?",["Figurehead","Spokesperson","Liaison","Negotiator"],1,"Spokesperson is an informational role — passing information to outsiders."],
  ["Which skills matter most for top managers?",["Technical","Conceptual","Clerical","Physical"],1,"Top managers need to think about abstract, organization-wide situations."],
  ["The Hawthorne studies showed that…",["Lighting is the main driver of productivity","Social norms and group standards strongly affect behaviour","Workers only care about money","Bureaucracy is always efficient"],1,"They launched the behavioural approach to management."],
  ["Weber's ideal organization based on division of labour, hierarchy and rules is called…",["Matrix","Bureaucracy","Systems approach","TQM"],1,"Bureaucracy is Weber's ideal type."],
  ["The contingency approach says…",["There is one best way to manage","Management depends on the situation","Only numbers matter","Managers should avoid change"],1,"Also called the situational approach."]
 ]}
});

/* ---------------- L3 ---------------- */
add(3,{
 primer:[
  "<b>Omnipotent view</b>: managers are directly responsible for an organization's success or failure. <b>Symbolic view</b>: much of success or failure is due to external forces outside managers' control. Reality lies in between — managers act within constraints.",
  "The <b>external environment</b> includes economic, demographic, political/legal, sociocultural, technological and global components.",
  "<b>Environmental uncertainty</b> depends on the <b>degree of change</b> (stable ↔ dynamic) and the <b>degree of complexity</b> (number of components and how much the firm must know about them).",
  "<b>Stakeholders</b> are any groups affected by the organization's decisions — employees, customers, suppliers, government, communities, shareholders, media and more."
 ],
 discussion:["During a rupee devaluation, which view — omnipotent or symbolic — do company boards usually take? Why?","Rank the six environmental components by how much they affect a Pakistani pharmaceutical company.","Which stakeholders does COMSATS University need to manage?"],
 calc:{title:"What-if: environmental uncertainty matrix (Duncan)",
  intro:"Rate an industry's environment. The worksheet places it in one of the four cells of the uncertainty matrix and suggests how managers should respond.",
  inputs:[
   {k:"chg",label:"Degree of change (0 = stable, 10 = dynamic)",min:0,max:10,v:7},
   {k:"cpx",label:"Degree of complexity (0 = few simple components, 10 = many complex ones)",min:0,max:10,v:6},
   {k:"ctrl",label:"How much of the outcome managers can control (%)",min:0,max:100,step:5,v:50,f:x=>x+"%"}
  ],
  run(v){
   const dyn=v.chg>=5, cx=v.cpx>=5, cell=dyn?(cx?4:2):(cx?3:1);
   const idx=(v.chg+v.cpx)*5;
   const txt={1:"<b>Cell 1 — stable & simple: low uncertainty.</b> Standard procedures and central planning work well (e.g. a soft-drink bottler in a settled market).",
    2:"<b>Cell 2 — dynamic & simple: moderately high uncertainty.</b> Few components, but they change fast; stay flexible and watch them closely (e.g. fashion retail).",
    3:"<b>Cell 3 — stable & complex: moderately low uncertainty.</b> Many components to track but they change slowly; build specialist expertise (e.g. a public university, insurance).",
    4:"<b>Cell 4 — dynamic & complex: high uncertainty.</b> Scan the environment constantly, decentralize decisions and plan for several scenarios (e.g. telecoms, e-commerce, software)."}[cell];
   const view=v.ctrl>=70?"Your view leans <b>omnipotent</b> — managers take most of the credit or blame.":v.ctrl<=30?"Your view leans <b>symbolic</b> — external forces drive most of the outcome.":"A balanced view: managers matter, but within environmental constraints.";
   return {stats:[["Matrix cell",String(cell)],["Uncertainty index",fmt(idx)+"/100"],["Manager-controlled share",v.ctrl+"%"]],
    bars:[{label:"Change",value:v.chg,color:"--c1"},{label:"Complexity",value:v.cpx,color:"--c4"}],barsOpt:{max:10},
    fb:[cell===4?"warn":cell===1?"good":"info",txt+"<br>"+view]};
  }},
 sort:{title:"Sort the forces into the components of the external environment",
  bins:["Economic","Demographic","Political / legal","Sociocultural","Technological","Global"],
  items:[
   ["The State Bank raises the policy interest rate",0,"Interest rates, inflation and exchange rates are economic factors."],
   ["Inflation pushes up raw-material prices",0,"Economic."],
   ["Over half of Pakistan's population is under 30",1,"Demographics: age, gender, education, location of the population."],
   ["More people move from villages to large cities",1,"Urbanisation is a demographic trend."],
   ["The federal budget introduces a new tax on services",2,"Laws, regulations and government policy."],
   ["A new data-protection law is passed",2,"Political/legal."],
   ["Consumers increasingly expect halal certification on imported food",3,"Values, attitudes, tastes and lifestyles."],
   ["Families now prefer smaller homes and convenience food",3,"Changing lifestyles are sociocultural."],
   ["Generative-AI tools automate report writing",4,"New technology."],
   ["Digital wallets make cash-free payments easy",4,"Technological."],
   ["Chinese competitors enter the local market",5,"Global competitors and markets."],
   ["A trade agreement with another country changes import duties",5,"Global."]
  ]},
 dilemma:{title:"Dilemma: who is to blame?",
  intro:"You are the general manager of a car-parts maker in Lahore. Sales fell 25% this year after car-import rules changed and interest rates rose.",
  meters:[["results","Results"],["cred","Credibility"],["team","Team trust"]],
  steps:[
   {t:"The board meeting",x:"The board asks you to explain the fall in sales.",
    c:[["Take full blame and promise to restore sales by yourself (omnipotent view)",{results:0,cred:-10,team:5},"Honest, but you promise more than you control. If the market stays weak you will lose credibility.","warn"],
       ["Blame the government and the economy entirely (symbolic view)",{results:-5,cred:-15,team:-5},"External forces mattered, but boards expect managers to respond, not just explain.","bad"],
       ["Show what was external, what was internal, and your plan for both",{results:5,cred:15,team:5},"A balanced view: managers act within constraints and still have choices.","good"]]},
   {t:"Responding to the environment",x:"The board approves a recovery plan. What do you do first?",
    c:[["Cut prices for all customers to win volume",{results:-5,cred:0,team:0},"Margins shrink and competitors may follow. Price cuts are not a response to the real change.","warn"],
       ["Scan the environment: talk to assemblers, track policy changes and find new segments (e.g. after-market, exports)",{results:15,cred:10,team:5},"Environmental scanning reduces uncertainty and reveals opportunities.","good"],
       ["Lay off 30% of staff immediately",{results:5,cred:-5,team:-20},"Costs fall but you lose skills you will need when demand recovers.","bad"]]}
  ],
  lesson:"Managers are neither all-powerful nor helpless — they make the best decisions they can within the environment's constraints."},
 select:{title:"Selector: which stakeholder needs priority attention?",
  intro:"A cement plant near Wah plans to double its capacity. Weight the three classic tests of stakeholder salience to see whose concerns the managers should address first.",
  criteria:[["Power — ability to affect the project",6],["Legitimacy — how valid their claim is",6],["Urgency — how time-critical their demand is",6]],
  options:[
   ["Local community (dust, traffic, water)",[3,5,5],"Legitimate and urgent; can gain power through media and courts. Engage early."],
   ["Government regulators (EPA, provincial govt)",[5,5,3],"Hold the licence to operate."],
   ["Employees and their union",[3,4,3],"Their skills and goodwill are essential to the expansion."],
   ["Shareholders and lenders",[5,4,2],"Provide the capital; care about returns and risk."],
   ["Customers (builders, contractors)",[3,3,2],"Want reliable supply and price."],
   ["Suppliers (coal, transport)",[2,3,2],"Need to plan capacity with you."]
  ]},
 quiz:{q:[
  ["The view that managers are directly responsible for an organization's success or failure is…",["Symbolic view","Omnipotent view","Systems view","Stakeholder view"],1,"Typical of 'the CEO turned the company around' stories."],
  ["Rising inflation and interest rates belong to which component?",["Demographic","Economic","Sociocultural","Technological"],1,"Economic component."],
  ["An environment with many components that change rapidly is…",["Cell 1 — low uncertainty","Cell 2","Cell 3","Cell 4 — high uncertainty"],3,"Dynamic and complex = highest uncertainty."],
  ["Stakeholders are…",["Only shareholders","Any constituencies affected by the organization's decisions and actions","Only customers and suppliers","Only government"],1,"The stakeholder view is much broader than owners."],
  ["Why do managers manage stakeholder relationships?",["It is required only by law","It can lead to better organizational performance and is the right thing to do","It reduces the number of stakeholders","It removes environmental uncertainty"],1,"Better predictability, innovation, trust and flexibility."]
 ]}
});

/* ---------------- L4 ---------------- */
add(4,{
 primer:[
  "<b>Organizational culture</b> is the shared values, principles, traditions and ways of doing things that influence how members act. It is perceived, shared and descriptive.",
  "Robbins describes seven dimensions: attention to detail, outcome orientation, people orientation, team orientation, aggressiveness, stability, and innovation & risk taking.",
  "<b>Strong cultures</b> (key values deeply held and widely shared) have more influence on employees; they can boost performance but can also resist change.",
  "Culture is created by founders, sustained by selection, top-management actions and socialization, and learned through <b>stories, rituals, material artifacts and symbols, and language</b>.",
  "Current issues: creating an <b>ethical</b> culture, an <b>innovative</b> culture, a <b>customer-responsive</b> culture and supporting <b>workplace spirituality</b>."
 ],
 discussion:["Describe COMSATS Wah's culture using three of the seven dimensions.","Give an example of a story or ritual in a company you know that teaches its values.","When can a strong culture become a liability?"],
 calc:{title:"What-if: how strong is the culture?",
  intro:"An illustrative index combining how intensely core values are held, how widely they are shared, how consistently leaders model them, and how much staff turnover dilutes them.",
  inputs:[
   {k:"int",label:"Intensity — how deeply core values are held (0–10)",min:0,max:10,v:7},
   {k:"acc",label:"Sharedness — employees who accept the core values (%)",min:0,max:100,step:5,v:60,f:x=>x+"%"},
   {k:"mod",label:"Leaders consistently model the values (0–10)",min:0,max:10,v:6},
   {k:"turn",label:"Annual employee turnover (%)",min:0,max:60,step:1,v:15,f:x=>x+"%"}
  ],
  run(v){
   const base=100*(0.4*v.int/10+0.4*v.acc/100+0.2*v.mod/10), idx=base*(1-v.turn/200);
   const tone=idx>=70?"good":idx>=45?"info":"warn";
   const msg=idx>=70?"<b>Strong culture.</b> Values guide behaviour with little need for formal rules, and employees are more loyal. Watch out: strong cultures can resist change and discourage diverse views."
    :idx>=45?"<b>Moderate culture.</b> Values exist but are not shared by everyone. Stories, rituals and consistent leadership behaviour can strengthen them."
    :"<b>Weak culture.</b> Employees rely on rules and procedures instead of shared values. High turnover and inconsistent leaders are common causes.";
   return {stats:[["Culture strength index",fmt(idx)+"/100"],["Before turnover effect",fmt(base)]],
    bars:[{label:"Intensity",value:v.int*10},{label:"Sharedness",value:v.acc,color:"--c4"},{label:"Leader modelling",value:v.mod*10,color:"--c2"},{label:"Turnover drag",value:-base*v.turn/200,color:"--c5"}],barsOpt:{min:-30,max:100,fmt:x=>fmt(x)},
    fb:[tone,msg]};
  }},
 sort:{title:"Sort: how employees learn the culture",
  bins:["Stories","Rituals","Material artifacts & symbols","Language"],
  items:[
   ["New hires hear how the founder started the firm from a single rented room",0,"Stories describe significant events or people."],
   ["The tale of a manager who drove overnight to replace a customer's faulty part",0,"Stories anchor the present in the past and show what is valued."],
   ["An annual awards night for the best branch",1,"Rituals are repetitive sequences that reinforce key values."],
   ["Every Monday starts with a ten-minute team huddle",1,"A ritual."],
   ["The CEO has an open-plan desk with no private office",2,"Layout, dress, office size and cars send messages about values."],
   ["Senior managers get reserved parking and large offices",2,"Material symbols signal hierarchy and status."],
   ["Staff call customers 'guests' instead of 'clients'",3,"Special terms and jargon unite members and reflect values."],
   ["Engineers use internal acronyms only insiders understand",3,"Language identifies members of a culture."]
  ]},
 dilemma:{title:"Dilemma: the star who breaks the values",
  intro:"You head sales at a telecom company that says its core value is 'customers first, always honest'. Your best salesperson consistently beats targets.",
  meters:[["sales","Sales"],["culture","Culture strength"],["trust","Customer trust"]],
  steps:[
   {t:"The complaint",x:"Several customers say the star salesperson promised them free features that do not exist. Sales are up 30%.",
    c:[["Overlook it — results matter most",{sales:10,culture:-20,trust:-15},"Everyone learns that the 'honesty' value is only words. What managers tolerate becomes the real culture.","bad"],
       ["Investigate, correct the customer promises and coach the salesperson with a clear warning",{sales:-5,culture:15,trust:15},"Top-management actions are one of the strongest ways a culture is sustained.","good"],
       ["Fire the salesperson immediately without investigation",{sales:-15,culture:5,trust:5},"It sends a signal but feels unfair, and you lose a capable person without due process.","warn"]]},
   {t:"Strengthening the culture",x:"How do you make 'customers first, always honest' real for the whole team?",
    c:[["Send a one-time email listing the values",{sales:0,culture:2,trust:0},"Words alone rarely change culture.","warn"],
       ["Add customer-satisfaction and complaint data to bonuses and tell real stories of honest selling at team meetings",{sales:5,culture:15,trust:12},"Rewards, stories and rituals make values visible and learnable.","good"],
       ["Hire only people who have worked in your industry before",{sales:3,culture:-3,trust:0},"Selection matters, but it should test values fit, not just experience.","info"]]}
  ],
  lesson:"Culture is what people see managers reward, tolerate and repeat — not what is written on the wall."},
 select:{title:"Selector: which culture fits the strategy?",
  intro:"Rate how important each strategic priority is to the organization (0–10). The selector suggests the culture to build.",
  criteria:[["Launching new products quickly",5],["Service quality is the main competitive edge",5],["Heavily regulated industry (banking, pharma)",5],["Tight cost control and predictable output",5],["Young, creative workforce",5]],
  options:[
   ["Innovative culture (challenge, freedom, risk taking)",[5,2,1,1,5],"Encourage idea time, debate and trust; tolerate failure."],
   ["Customer-responsive culture",[2,5,2,2,3],"Hire outgoing people, empower front-line staff, listen and give clear roles."],
   ["Ethical / compliance culture",[1,3,5,3,2],"High risk tolerance is low; strong values, visible role models, ethics training and protection for whistle-blowers."],
   ["Stability & attention-to-detail culture",[1,2,4,5,1],"Precise procedures, consistency and low variation."]
  ]},
 quiz:{q:[
  ["Culture is described as perceived, shared and…",["Prescriptive","Descriptive","Optional","Written"],1,"It describes what members perceive, not whether they like it."],
  ["A strong culture is one in which key values are…",["Written in a handbook","Deeply held and widely shared","Changed every year","Set by customers"],1,"Intensity and sharedness define strength."],
  ["The process that helps new employees adapt to the organization's culture is…",["Downsizing","Socialization","Benchmarking","Delegation"],1,"Socialization."],
  ["Reserved parking and large offices for executives are examples of…",["Stories","Rituals","Material artifacts and symbols","Language"],2,"Material symbols."],
  ["Which is a characteristic of a customer-responsive culture?",["Rigid rules for every situation","Empowered employees with clear roles who listen to customers","Low employee discretion","Ignoring complaints"],1,"Empowerment, outgoing employees and clarity of roles."]
 ]}
});

/* ---------------- L5 ---------------- */
add(5,{
 primer:[
  "<b>Parochialism</b> is viewing the world only through your own perspective. Managers can hold <b>ethnocentric</b> (home country is best), <b>polycentric</b> (host-country managers know best) or <b>geocentric</b> (world-oriented, best people from anywhere) attitudes.",
  "<b>Regional trading alliances</b> include the European Union, ASEAN, USMCA, the African Union and SAARC (with SAFTA).",
  "<b>Global trade mechanisms</b>: the World Trade Organization (WTO), International Monetary Fund (IMF), World Bank Group and the OECD.",
  "Tariffs and exchange rates change the price foreign buyers pay. A weaker rupee makes Pakistani exports cheaper abroad but imports dearer."
 ],
 discussion:["Is Pakistani business more ethnocentric or polycentric? Give examples.","Why has SAARC been less effective as a trading bloc than the EU or ASEAN?","How did rupee depreciation affect Pakistan's textile exporters?"],
 calc:{title:"What-if: tariff and exchange-rate effects on an export price",
  intro:"A Sialkot exporter sells sports gloves to Europe. Change the cost, exchange rate and the importing country's tariff to see the landed price for the European buyer.",
  inputs:[
   {k:"cost",label:"Production cost per pair (Rs)",min:500,max:3000,step:50,v:1500},
   {k:"mk",label:"Exporter's mark-up (%)",min:0,max:60,step:1,v:25,f:x=>x+"%"},
   {k:"fx",label:"Exchange rate (Rs per €)",min:200,max:400,step:5,v:300},
   {k:"frt",label:"Freight & insurance per pair (€)",min:0,max:3,step:0.1,v:0.6,f:x=>"€"+x.toFixed(2)},
   {k:"tar",label:"Import tariff in the EU (%)",min:0,max:20,step:0.5,v:0,f:x=>x+"%",hint:"Preferential schemes can lower tariffs for developing-country exporters; check current rates."},
   {k:"rival",label:"Competitor's landed price (€)",min:3,max:15,step:0.1,v:6.5,f:x=>"€"+x.toFixed(2)}
  ],
  run(v){
   const fob=v.cost*(1+v.mk/100)/v.fx, landed=(fob+v.frt)*(1+v.tar/100), gap=landed-v.rival;
   return {stats:[["Export price (FOB, €)","€"+fob.toFixed(2)],["Landed price for buyer","€"+landed.toFixed(2)],["Profit per pair (Rs)",fmt(v.cost*v.mk/100)],["Gap vs competitor","€"+gap.toFixed(2)]],
    bars:[{label:"Your landed price",value:landed,color:gap<=0?"--c3":"--c5"},{label:"Competitor",value:v.rival,color:"--c6"}],barsOpt:{fmt:x=>"€"+x.toFixed(2)},
    fb:gap<=0?["good","You are <b>€"+Math.abs(gap).toFixed(2)+" cheaper</b> than the competitor. Notice how a weaker rupee (higher Rs per €) or a lower tariff improves competitiveness without cutting your rupee profit."]
     :["warn","You are <b>€"+gap.toFixed(2)+" more expensive</b>. Options: improve productivity to lower cost, accept a smaller mark-up, or look for markets where trade agreements cut the tariff."]};
  }},
 sort:{title:"Sort: regional trading alliance or global trade mechanism?",
  bins:["Regional trading alliance","Global trade mechanism / organization"],
  items:[
   ["European Union (EU)",0,"27 member states with a single market; many use the euro."],
   ["ASEAN",0,"Association of Southeast Asian Nations."],
   ["USMCA",0,"United States–Mexico–Canada Agreement, which replaced NAFTA."],
   ["SAARC / SAFTA",0,"South Asian regional association and its free-trade agreement."],
   ["African Union",0,"Regional alliance of African nations."],
   ["World Trade Organization (WTO)",1,"Sets and enforces global trade rules and settles disputes."],
   ["International Monetary Fund (IMF)",1,"Promotes monetary cooperation and lends to countries with balance-of-payments problems."],
   ["World Bank Group",1,"Provides financial and technical help to developing countries."],
   ["OECD",1,"Helps member governments achieve sustainable economic growth."]
  ],
  then:{title:"Sort the attitudes: ethnocentric, polycentric or geocentric?",
   bins:["Ethnocentric","Polycentric","Geocentric"],
   items:[
    ["Only managers from head office can run our foreign branches",0,"Belief that home-country ways are best."],
    ["We use the same product and ads everywhere because they worked at home",0,"Ethnocentric."],
    ["Let the Dubai team decide everything — they know their market",1,"Host-country managers know best."],
    ["Each country unit sets its own HR policies",1,"Polycentric."],
    ["We hire the best people for top jobs regardless of nationality",2,"World-oriented — the geocentric attitude."],
    ["We combine ideas from all our country teams into one global approach",2,"Geocentric."]
   ]}},
 dilemma:{title:"Dilemma: first meeting with a foreign partner",
  intro:"You will host a delegation from a Chinese engineering firm considering a joint project with your Islamabad company.",
  meters:[["rel","Relationship"],["deal","Deal value"],["cq","Cultural awareness"]],
  steps:[
   {t:"Preparing the meeting",x:"How do you prepare?",
    c:[["Prepare exactly as for a local client — business is business",{rel:-10,deal:0,cq:-15},"Parochialism: assuming your way is the only way.","bad"],
       ["Learn about their business customs, prepare bilingual material and plan relationship-building time",{rel:15,deal:5,cq:15},"A global perspective builds trust before the deal.","good"],
       ["Ask your foreign-educated colleague to handle everything",{rel:0,deal:0,cq:0},"Helpful, but you should develop your own global awareness too.","info"]]},
   {t:"Negotiation",x:"The partners propose that their engineers lead all technical work and your staff assist.",
    c:[["Accept everything to secure the deal",{rel:5,deal:-10,cq:0},"You gain goodwill but give away learning and control.","warn"],
       ["Propose joint teams with Pakistani and Chinese engineers sharing leadership",{rel:8,deal:12,cq:10},"A geocentric solution that builds capability on both sides.","good"],
       ["Insist your engineers lead all work",{rel:-15,deal:-5,cq:-5},"An ethnocentric stance that may end the partnership.","bad"]]}
  ],
  lesson:"A global perspective — not parochialism — is a basic requirement for managing across borders."},
 select:{title:"Selector: which global attitude should guide the company?",
  intro:"Rate the situation (0–10) for a Pakistani company expanding abroad.",
  criteria:[["Products need heavy local adaptation",5],["Head office has unique know-how to transfer",5],["Need to find the best talent from anywhere",5],["Local laws and customs differ greatly",5],["Brand must be consistent worldwide",5]],
  options:[
   ["Ethnocentric",[1,5,1,1,4],"Works when home know-how is the main advantage, but risks ignoring local needs."],
   ["Polycentric",[5,1,2,5,1],"Gives local units freedom; can be costly and fragmented."],
   ["Geocentric",[3,3,5,3,4],"Seeks the best approach and people from anywhere — hardest to build, most effective long term."]
  ]},
 quiz:{q:[
  ["Viewing the world solely through one's own eyes is called…",["Geocentrism","Parochialism","Polycentrism","Globalization"],1,"Parochialism."],
  ["Which body settles disputes about global trade rules?",["IMF","World Bank","WTO","OECD"],2,"The WTO."],
  ["A manager who believes host-country managers know the best approach holds a(n)… attitude.",["Ethnocentric","Polycentric","Geocentric","Parochial"],1,"Polycentric."],
  ["If the rupee weakens from Rs 300 to Rs 330 per euro, a Pakistani export priced in rupees becomes…",["More expensive in euros","Cheaper in euros","Unchanged","Banned"],1,"Each euro buys more rupees."],
  ["Which is a regional trading alliance in South Asia?",["ASEAN","SAARC","USMCA","OECD"],1,"SAARC, with its SAFTA free-trade agreement."]
 ]}
});

/* ---------------- L6 ---------------- */
add(6,{
 primer:[
  "<b>Types of global organizations</b>: multinational corporations (MNCs) may be <b>multidomestic</b> (decisions decentralized to each country), <b>global</b> (decisions centralized at home) or <b>transnational/borderless</b> (artificial geographic barriers removed).",
  "<b>How organizations go global</b> (increasing investment and risk): global sourcing → exporting/importing → licensing/franchising → strategic alliance or joint venture → foreign subsidiary.",
  "Managers abroad face differences in the <b>political/legal</b>, <b>economic</b> (market vs command economy, currency, inflation) and <b>cultural</b> environments.",
  "<b>Hofstede's framework</b> compares national cultures on dimensions such as power distance, individualism–collectivism, achievement (masculinity)–nurturing, uncertainty avoidance and long-term orientation. The <b>GLOBE</b> study extends this to nine dimensions."
 ],
 discussion:["Which entry mode suits a Pakistani food brand entering the Gulf? Why?","How would high power distance in Pakistan affect a manager from a low power-distance country?","Give an example of a multidomestic and a global company operating in Pakistan."],
 calc:{title:"What-if: cultural distance between Pakistan and a target market",
  intro:"Pakistan's values are pre-set from Hofstede's commonly cited scores (power distance 55, individualism 14, motivation towards achievement 50, uncertainty avoidance 70). Set the target country's scores (0–100) to estimate cultural distance — check current scores at hofstede-insights for real assignments.",
  inputs:[
   {k:"pdi",label:"Target country — power distance",min:0,max:100,v:40},
   {k:"idv",label:"Target country — individualism",min:0,max:100,v:70},
   {k:"mas",label:"Target country — achievement vs caring",min:0,max:100,v:60},
   {k:"uai",label:"Target country — uncertainty avoidance",min:0,max:100,v:45}
  ],
  run(v){
   const pk={pdi:55,idv:14,mas:50,uai:70}, keys=[["pdi","Power distance"],["idv","Individualism"],["mas","Achievement"],["uai","Uncertainty avoidance"]];
   const gaps=keys.map(([k,l])=>({label:l,value:Math.abs(v[k]-pk[k])}));
   const avg=gaps.reduce((a,g)=>a+g.value,0)/4, max=gaps.slice().sort((a,b)=>b.value-a.value)[0];
   gaps.forEach(g=>g.color=g.value>=30?"--c5":g.value>=15?"--c2":"--c3");
   const tone=avg<15?"good":avg<30?"info":"warn";
   const msg=avg<15?"<b>Low cultural distance.</b> Management practices can transfer with small adjustments."
    :avg<30?"<b>Moderate distance.</b> Adapt leadership, communication and HR practices; the biggest gap is <b>"+max.label.toLowerCase()+"</b>."
    :"<b>High distance.</b> Expect misunderstandings. Use local managers, cross-cultural training and possibly a joint venture. The biggest gap is <b>"+max.label.toLowerCase()+"</b>.";
   return {stats:[["Average gap (0–100)",fmt(avg)],["Largest gap",max.label]],bars:gaps,barsOpt:{max:100,fmt:x=>fmt(x)},fb:[tone,msg]};
  }},
 sort:{title:"Sort the moves by how a firm goes global",
  bins:["Global sourcing","Exporting / importing","Licensing / franchising","Strategic alliance / joint venture","Foreign subsidiary"],
  items:[
   ["A Lahore furniture maker buys cheaper hardware from China",0,"Purchasing materials or labour from wherever it is cheapest."],
   ["A Karachi software house outsources testing to Vietnam",0,"Global sourcing of labour."],
   ["A Sialkot firm ships footballs to buyers in Germany",1,"Making at home and selling abroad."],
   ["A Faisalabad mill sells bedsheets to a US retailer",1,"Exporting."],
   ["A Pakistani food brand lets a Qatari company use its recipes and name for a fee",2,"Licensing/franchising: low investment, less control."],
   ["A foreign coffee chain opens outlets in Pakistan through a local operator who pays fees",2,"Franchising."],
   ["A Pakistani and a Chinese firm set up a jointly owned company to build a plant",3,"Joint venture — shared ownership, risk and control."],
   ["Two firms share R&D costs to develop a new product",3,"Strategic alliance."],
   ["A Pakistani pharma company builds and fully owns a factory in Kenya",4,"Highest investment, risk and control."]
  ],
  then:{title:"Sort: what type of multinational is this?",
   bins:["Multidomestic","Global","Transnational (borderless)"],
   items:[
    ["Each country manager decides products and advertising for their own market",0,"Decentralized decisions to local country."],
    ["Local units adapt recipes and brands to local tastes",0,"Multidomestic."],
    ["All key decisions are made at head office and products are standard worldwide",1,"Centralized decisions in the home country."],
    ["Same design, same price positioning everywhere, controlled from HQ",1,"Global company."],
    ["Organized by business lines, not countries, to remove geographic barriers",2,"Transnational/borderless organization."]
   ]}},
 dilemma:{title:"Dilemma: entering a high-inflation market",
  intro:"Your Lahore biscuit company is exporting to a neighbouring country whose currency is unstable and whose import rules change often.",
  meters:[["profit","Profit"],["risk","Risk control"],["fit","Local fit"]],
  steps:[
   {t:"Pricing currency",x:"The importer wants to pay in local currency.",
    c:[["Accept local currency to win the deal",{profit:5,risk:-20,fit:5},"Currency swings could wipe out your margin.","bad"],
       ["Price in US dollars with a letter of credit",{profit:5,risk:15,fit:-5},"Protects you against currency and payment risk; slightly less attractive to the buyer.","good"],
       ["Split: half in dollars, half in local currency with a price-review clause",{profit:5,risk:8,fit:5},"A reasonable compromise that shares the risk.","info"]]},
   {t:"Product decisions",x:"Sales are slow. Market research shows buyers prefer smaller, cheaper packs.",
    c:[["Keep the same packs — our brand is standard everywhere",{profit:-8,risk:0,fit:-12},"A global-company approach that ignores local economic conditions.","warn"],
       ["Introduce a smaller, cheaper pack for this market",{profit:12,risk:0,fit:15},"Adapting to the economic environment (low purchasing power) wins volume.","good"],
       ["Cut price without changing packs",{profit:-12,risk:0,fit:5},"Volume grows but you lose money on every packet.","bad"]]}
  ],
  lesson:"The economic, political/legal and cultural environments of each country shape how a global business should operate."},
 select:{title:"Selector: which entry mode for a Pakistani firm?",
  intro:"Weight the criteria that matter for your expansion (0–10). Scores show how well each mode meets each criterion (1–5).",
  criteria:[["Control over operations and brand",6],["Low investment and risk",6],["Speed of entry",5],["Access to local knowledge",5],["Protection of technology / know-how",5]],
  options:[
   ["Exporting",[2,5,4,1,4],"Low risk and quick; little local presence."],
   ["Licensing / franchising",[2,5,5,3,1],"Fast and cheap, but you share know-how and lose some control."],
   ["Joint venture / strategic alliance",[3,3,3,5,2],"Local partner knowledge and shared risk; shared control can cause conflict."],
   ["Wholly owned foreign subsidiary",[5,1,1,2,5],"Full control and protection; highest cost and risk."]
  ]},
 quiz:{q:[
  ["An MNC that decentralizes management decisions to the local country is…",["Global","Multidomestic","Transnational","Ethnocentric"],1,"Multidomestic."],
  ["Which way of going global requires the most investment?",["Global sourcing","Exporting","Licensing","Foreign subsidiary"],3,"A foreign subsidiary is a direct investment."],
  ["Hofstede's dimension describing how much a society accepts unequal power is…",["Individualism","Power distance","Uncertainty avoidance","Long-term orientation"],1,"Power distance."],
  ["Franchising is mainly used by…",["Manufacturers","Service organizations","Governments","Banks only"],1,"Licensing is mainly used by manufacturers; franchising by service firms."],
  ["The GLOBE framework…",["Replaces all cultural differences","Extends Hofstede's work using nine dimensions","Only studies Europe","Is a trade agreement"],1,"GLOBE identifies nine dimensions of national culture."]
 ]}
});

/* ---------------- L7 ---------------- */
add(7,{
 primer:[
  "<b>Workplace diversity</b> is the ways in which people in an organization are different from and similar to one another.",
  "<b>Surface-level diversity</b> is easily perceived (age, gender, ethnicity, physical ability). <b>Deep-level diversity</b> is differences in values, personality and work preferences, which matter more as people get to know each other.",
  "Benefits fall into three groups: <b>people management</b> (better use of talent, better team problem-solving, attracting and retaining diverse employees), <b>organizational performance</b> (lower costs, better problem-solving, more flexibility) and <b>strategic</b> (market understanding, creativity and innovation, better image).",
  "The changing workplace: more women in the workforce, an ageing workforce in many countries, and a young, urbanizing workforce in Pakistan."
 ],
 discussion:["Which types of diversity are most visible in your class? Which deep-level differences matter most in group work?","How could a Pakistani bank benefit strategically from a more diverse workforce?","Why might a diverse team take longer to perform well than a homogeneous one?"],
 calc:{title:"What-if: team diversity index (Blau)",
  intro:"Enter how many team members belong to each group on one attribute (e.g. academic background, region or age band). Blau's index = 1 − Σp², where p is each group's share. 0 = everyone is the same.",
  inputs:[
   {k:"a",label:"Group A members",min:0,max:20,v:8},
   {k:"b",label:"Group B members",min:0,max:20,v:3},
   {k:"c",label:"Group C members",min:0,max:20,v:2},
   {k:"d",label:"Group D members",min:0,max:20,v:1},
   {k:"e",label:"Group E members",min:0,max:20,v:0}
  ],
  run(v){
   const g=[v.a,v.b,v.c,v.d,v.e], n=g.reduce((x,y)=>x+y,0);
   if(!n) return {stats:[["Team size","0"]],fb:["warn","Add at least one member."]};
   const blau=1-g.reduce((s,x)=>s+(x/n)**2,0), k=g.filter(x=>x>0).length, maxB=1-1/5, rel=blau/maxB*100;
   return {stats:[["Team size",String(n)],["Blau index",blau.toFixed(2)],["% of maximum diversity",fmt(rel)+"%"]],
    bars:["A","B","C","D","E"].map((l,i)=>({label:"Group "+l,value:g[i]/n*100,color:["--c1","--c2","--c3","--c4","--c5"][i]})),barsOpt:{max:100,fmt:x=>fmt(x)+"%"},
    fb:[rel>=70?"good":rel>=35?"info":"warn",rel>=70?"<b>Highly diverse team.</b> More perspectives for creative problem-solving; invest in inclusion so differences become strengths."
     :rel>=35?"<b>Moderately diverse.</b> "+(g[0]/n>0.5?"One group dominates — make sure minority voices are heard.":"A reasonable mix.")
     :"<b>Low diversity.</b> Fast agreement but a risk of groupthink and blind spots about customers."]};
  }},
 sort:{title:"Sort: surface-level or deep-level diversity?",
  bins:["Surface-level","Deep-level"],
  items:[
   ["Age",0,"Easily seen; can trigger stereotypes."],
   ["Gender",0,"Surface-level."],
   ["Ethnicity",0,"Surface-level."],
   ["A visible physical disability",0,"Surface-level."],
   ["Personal values",1,"Not visible; revealed over time."],
   ["Personality (e.g. introvert vs extrovert)",1,"Deep-level."],
   ["Preferred working style (detail vs big picture)",1,"Deep-level."],
   ["Attitudes towards risk",1,"Deep-level."]
  ],
  then:{title:"Sort the benefits of workplace diversity",
   bins:["People management","Organizational performance","Strategic"],
   items:[
    ["Better use of employee talent",0,"People management benefit."],
    ["Ability to attract and retain diverse employees",0,"People management."],
    ["Reduced costs from turnover and absenteeism",1,"Organizational performance."],
    ["Increased system flexibility",1,"Organizational performance."],
    ["Better understanding of diverse markets",2,"Strategic."],
    ["Greater potential for creativity and innovation",2,"Strategic."]
   ]}},
 dilemma:{title:"Dilemma: the 'people like us' hiring panel",
  intro:"You chair a hiring panel for an engineering team of ten men aged 25–30 from the same university.",
  meters:[["perf","Team performance"],["fair","Fairness"],["incl","Inclusion"]],
  steps:[
   {t:"Shortlisting",x:"Two strong finalists: a candidate from your own university who 'fits the team', and a woman engineer with more relevant field experience from another city.",
    c:[["Choose the 'good fit' — the team will gel faster",{perf:-5,fair:-15,incl:-15},"Similarity bias. 'Fit' often means 'like us' and narrows the team's thinking.","bad"],
       ["Score both against job-related criteria agreed before the interview",{perf:12,fair:15,incl:10},"Structured, job-related criteria reduce bias and pick the best person.","good"],
       ["Hire the woman because the team needs diversity, without checking the criteria",{perf:0,fair:-5,incl:5},"Good intention, but selection should still be based on job-related merit.","warn"]]},
   {t:"After hiring",x:"The new engineer says she is left out of informal decisions made over lunch.",
    c:[["Tell her to try harder to fit in",{perf:-5,fair:-10,incl:-15},"Puts the whole burden on the newcomer.","bad"],
       ["Move key decisions into team meetings and assign a mentor",{perf:8,fair:10,incl:15},"Inclusion means everyone has access to information and influence.","good"],
       ["Do nothing — it will sort itself out",{perf:-3,fair:-3,incl:-8},"Exclusion rarely fixes itself.","warn"]]}
  ],
  lesson:"Diversity brings value only when hiring is fair and the team is inclusive."},
 select:{title:"Selector: homogeneous or diverse team?",
  intro:"Research suggests diverse teams are more creative but can take longer to work well together. Rate the task (0–10).",
  criteria:[["The task needs creativity or new ideas",5],["Fast coordination is needed from day one",5],["The team serves diverse customers",5],["The task is routine",5],["The team will work together for months",5]],
  options:[
   ["Homogeneous team",[1,5,1,5,2],"Quick to coordinate; risk of groupthink."],
   ["Diverse team",[5,2,5,2,5],"More perspectives and better market understanding once the team matures."],
   ["Diverse team + inclusion training and clear norms",[5,3,5,2,5],"Keeps the creativity benefit while speeding up early cooperation."]
  ]},
 quiz:{q:[
  ["Differences in values and personality are…",["Surface-level diversity","Deep-level diversity","Demographic diversity","Not diversity"],1,"Deep-level diversity."],
  ["'Increased market understanding' is a… benefit of diversity.",["People management","Organizational performance","Strategic","Legal"],2,"Strategic benefit."],
  ["Workplace diversity is defined as the ways people are…",["Only different","Different from and similar to one another","Similar in age","Of different nationalities"],1,"Both differences and similarities."],
  ["Which is surface-level diversity?",["Work preferences","Personality","Age","Values"],2,"Age is easily perceived."],
  ["Diverse teams tend to…",["Always perform worse","Be more creative but need time to work together","Avoid conflict","Need no management"],1,"Benefits appear as the team matures."]
 ]}
});

/* ---------------- L8 ---------------- */
add(8,{
 primer:[
  "<b>Personal bias</b> shows up as <b>prejudice</b> (a preconceived belief or judgement about a person or group), <b>stereotyping</b> (judging someone by one's perception of the group they belong to) and <b>discrimination</b> (acting on prejudice towards a group).",
  "The <b>glass ceiling</b> is an invisible barrier that separates women and minorities from top management positions.",
  "Effective <b>diversity initiatives</b> start with <b>top-management commitment</b>, then use <b>mentoring</b>, <b>diversity skills training</b> and <b>employee resource groups</b>.",
  "Small differences in promotion rates at each level add up — the 'leaky pipeline' — so the top looks very different from the entry level."
 ],
 discussion:["Why are there still few women CEOs in Pakistani listed companies?","Which form of discrimination is hardest to see? How can managers detect it?","Design a mentoring programme for first-year students at COMSATS Wah."],
 calc:{title:"What-if: the leaky pipeline to the top",
  intro:"Set the share of women at entry level and how their promotion chances compare with men's at each step. Watch how the share changes across four promotion levels.",
  inputs:[
   {k:"p0",label:"Women at entry level (%)",min:5,max:70,step:1,v:45,f:x=>x+"%"},
   {k:"r",label:"Women's promotion chance relative to men's (1.00 = equal)",min:0.4,max:1.3,step:0.05,v:0.8,f:x=>x.toFixed(2)}
  ],
  run(v){
   const names=["Entry level","Supervisor","Middle manager","Senior manager","Top management"];
   let p=v.p0/100; const lv=[p];
   for(let i=1;i<5;i++){ p=p*v.r/(p*v.r+(1-p)); lv.push(p); }
   const top=lv[4]*100;
   return {stats:[["Women at entry",fmt(v.p0)+"%"],["Women at top",fmt(top)+"%"],["Lost along the way",fmt(v.p0-top)+" points"]],
    bars:names.map((l,i)=>({label:l,value:lv[i]*100,color:i===4?"--c4":"--c1"})),barsOpt:{max:100,fmt:x=>fmt(x)+"%"},
    fb:v.r<1?["warn","A promotion rate only "+fmt((1-v.r)*100)+"% lower at each step cuts women's share from "+fmt(v.p0)+"% to "+fmt(top)+"% at the top. This is how a <b>glass ceiling</b> builds up from many small, often unnoticed decisions."]
     :["good","With equal (or better) promotion chances, the top reflects the talent pool. Monitoring promotion rates at each level is a practical diversity initiative."]};
  }},
 sort:{title:"Sort the examples of personal bias",
  bins:["Prejudice","Stereotyping","Discrimination","Glass ceiling"],
  items:[
   ["Believing that people from a certain region are lazy",0,"A preconceived judgement about a group."],
   ["Assuming a candidate is unreliable because of their background, before meeting them",0,"Prejudice."],
   ["Assuming older employees cannot learn new software",1,"Judging an individual by a perception of their group."],
   ["Expecting a woman manager to take meeting notes",1,"Stereotyping by gender role."],
   ["Rejecting a qualified applicant because of their religion",2,"Acting on prejudice — discrimination."],
   ["Excluding a colleague from team lunches because of their ethnicity",2,"Exclusion is a form of discrimination."],
   ["Women hold 40% of junior posts but none of the board seats",3,"An invisible barrier to top positions."],
   ["Minority staff reach middle management but never get senior roles",3,"Glass ceiling."]
  ]},
 dilemma:{title:"Dilemma: launching a diversity programme at a bank",
  intro:"You are the new HR head of a mid-sized Pakistani bank. Women are 35% of branch staff but only 6% of senior management.",
  meters:[["impact","Real impact"],["support","Staff support"],["image","Reputation"]],
  steps:[
   {t:"Where to start",x:"The board asks for a diversity plan.",
    c:[["Launch a social-media campaign about the bank's commitment to women",{impact:-5,support:-5,image:10},"Image without action breeds cynicism.","warn"],
       ["Get the CEO to set public targets and personally lead the initiative",{impact:15,support:10,image:10},"Top-management commitment is the foundation of every effective diversity programme.","good"],
       ["Leave it to HR as a side project",{impact:-10,support:-5,image:0},"Without senior support, initiatives fade.","bad"]]},
   {t:"First initiative",x:"You have budget for one programme this year.",
    c:[["Pair high-potential women officers with senior mentors",{impact:15,support:8,image:5},"Mentoring helps people build networks and gain visibility for promotion.","good"],
       ["Run a one-hour lecture on diversity for all staff",{impact:2,support:-3,image:3},"Short, one-off training has little lasting effect.","warn"],
       ["Create an employee resource group for women and fund flexible-hours pilots",{impact:12,support:10,image:5},"Employee resource groups provide support and a voice; flexibility addresses a real barrier.","good"]]}
  ],
  lesson:"Diversity initiatives work when top managers lead them and they target the real barriers to advancement."},
 select:{title:"Selector: which diversity initiative first?",
  intro:"Rate the symptoms in your organization (0–10).",
  criteria:[["Few women or minorities reach senior roles",5],["Employees are unaware of their own biases",5],["Minority employees feel isolated",5],["Diversity is seen as 'just HR's issue'",5],["Budget is very limited",5]],
  options:[
   ["Top-management commitment (targets, accountability)",[4,2,2,5,5],"Sets the tone; costs little but needs leaders' time."],
   ["Mentoring programme",[5,1,3,2,3],"Builds networks and visibility for promotion."],
   ["Diversity skills training",[2,5,2,3,2],"Raises awareness of bias and builds inclusive skills."],
   ["Employee resource groups",[2,2,5,2,4],"Groups formed around a shared attribute give support and a voice."]
  ]},
 quiz:{q:[
  ["A preconceived belief, opinion or judgement toward a person or group is…",["Stereotyping","Prejudice","Discrimination","Diversity"],1,"Prejudice."],
  ["Acting on prejudiced attitudes towards people who are targets of prejudice is…",["Stereotyping","Discrimination","Mentoring","Bias training"],1,"Discrimination."],
  ["The invisible barrier separating women and minorities from top positions is the…",["Glass cliff","Glass ceiling","Hierarchy","Span of control"],1,"Glass ceiling."],
  ["The most important element of a successful diversity programme is…",["A large budget","Top-management commitment","External consultants","A diversity logo"],1,"Commitment from the top."],
  ["Groups of employees connected by a common dimension of diversity are…",["Self-managed teams","Employee resource groups","Unions","Committees"],1,"Employee resource groups."]
 ]}
});

})();
