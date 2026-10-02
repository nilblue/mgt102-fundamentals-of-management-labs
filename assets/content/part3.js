/* MGT102 worksheets — Weeks 9–12 (Lectures 17–24). Authored teaching content. */
(function(){
const {add,fmt,money}=Lab;
const rs=(n,d=0)=>money(n,d,'Rs ');

/* ---------------- L17 ---------------- */
add(17,{
 primer:[
  "<b>Strategic management</b> is what managers do to develop an organization's strategies — the plans for how it will do what it is in business to do, compete successfully and attract and satisfy customers.",
  "The <b>six-step process</b>: (1) identify the current mission, goals and strategies; (2) do an external analysis (opportunities and threats); (3) do an internal analysis (strengths, weaknesses, core competencies); (4) formulate strategies; (5) implement strategies; (6) evaluate results.",
  "Steps 2 and 3 together are the <b>SWOT analysis</b>. <b>Core competencies</b> are the organization's major value-creating capabilities.",
  "Strategies are formulated at three levels: <b>corporate</b>, <b>competitive (business)</b> and <b>functional</b>."
 ],
 discussion:["Do a quick SWOT for COMSATS Wah's BBA programme.","What is the core competence of a Pakistani brand you admire?","Why do many strategies fail at the implementation step?"],
 calc:{title:"What-if: SWOT scoring and strategic posture",
  intro:"A local dairy brand faces a multinational entrant. Rate the overall strength of each SWOT element (0–10). The net internal and external positions point to a strategic posture.",
  inputs:[
   {k:"S",label:"Strengths (brand loyalty, distribution, quality)",min:0,max:10,v:7},
   {k:"W",label:"Weaknesses (old plant, weak digital marketing)",min:0,max:10,v:5},
   {k:"O",label:"Opportunities (urban growth, health trend, exports)",min:0,max:10,v:6},
   {k:"T",label:"Threats (multinational entry, feed costs, regulation)",min:0,max:10,v:7}
  ],
  run(v){
   const i=v.S-v.W, e=v.O-v.T;
   const q=i>=0?(e>=0?["SO — growth / aggressive strategy","Use strengths to exploit opportunities: expand products and regions."]:["ST — diversification / defend","Use strengths to counter threats: differentiate, lock in distributors, enter less contested segments."])
     :(e>=0?["WO — turnaround / improve","Fix weaknesses to seize opportunities: invest in the plant, partner for digital skills."]:["WT — defensive / retrench","Minimize weaknesses and avoid threats: cut costs, focus on the strongest region, consider alliances."]);
   return {stats:[["Internal position (S − W)",(i>0?"+":"")+i],["External position (O − T)",(e>0?"+":"")+e],["Strategic posture",q[0].split(" — ")[0]]],
    bars:[{label:"Strengths",value:v.S,color:"--c3"},{label:"Weaknesses",value:-v.W,color:"--c5"},{label:"Opportunities",value:v.O,color:"--c1"},{label:"Threats",value:-v.T,color:"--c2"}],barsOpt:{min:-10,max:10,fmt:x=>fmt(Math.abs(x))},
    fb:["info","<b>"+q[0]+".</b> "+q[1]]};
  }},
 sort:{title:"Put the six steps of the strategic management process in order",
  order:["Identify the current mission, goals and strategies","Do an external analysis (opportunities and threats)","Do an internal analysis (strengths, weaknesses, core competencies)","Formulate strategies","Implement strategies","Evaluate results"],
  explain:"Steps 1–4 are planning; step 5 is implementation; step 6 is evaluation.",
  then:{title:"Sort the factors for a Pakistani dairy brand into SWOT",
   bins:["Strength","Weakness","Opportunity","Threat"],
   items:[
    ["Trusted brand built over 30 years",0,"Internal, positive."],
    ["Cold-chain distribution to 20,000 shops",0,"Internal capability."],
    ["Ageing processing plant",1,"Internal, negative."],
    ["Little experience in online sales",1,"Weakness."],
    ["Growing demand for packaged, safe milk in cities",2,"External, positive."],
    ["Export potential to Gulf markets",2,"Opportunity."],
    ["A multinational launches a cheaper brand",3,"External, negative."],
    ["Rising animal-feed prices",3,"Threat."]
   ]}},
 dilemma:{title:"Dilemma: responding to a multinational entrant",
  intro:"You are the CEO of a local juice brand. A multinational with ten times your budget has launched a rival product.",
  meters:[["share","Market share"],["profit","Profit"],["future","Future position"]],
  steps:[
   {t:"The first response",x:"The rival is advertising heavily on TV.",
    c:[["Match their advertising spend",{share:3,profit:-20,future:-5},"You cannot win a spending war against a much larger rival.","bad"],
       ["Focus on your core competence: fresh local fruit and strong rural distribution",{share:8,profit:5,future:12},"Strategy should build on what you do best.","good"],
       ["Cut prices by 30%",{share:10,profit:-15,future:-8},"Volume rises but margins collapse; the rival can cut further.","warn"]]},
   {t:"Implementation",x:"Your board approves the strategy. What next?",
    c:[["Announce it and let departments work it out",{share:-3,profit:0,future:-8},"Many strategies fail at implementation.","bad"],
       ["Align structure, budgets, people and targets with the strategy and track results monthly",{share:8,profit:8,future:12},"Implementation and evaluation complete the process.","good"],
       ["Hire a consultant to write a longer plan",{share:0,profit:-5,future:0},"More planning without action.","warn"]]}
  ],
  lesson:"Build strategy on a clear SWOT and core competencies — then implement and evaluate it."},
 select:{title:"Selector: how should a local brand respond to a big rival?",
  intro:"Rate the brand's situation (0–10).",
  criteria:[["Strong local brand loyalty",5],["Large financial resources",5],["A distinctive capability the rival lacks",5],["The overall market is growing",5],["The rival could be a partner",5]],
  options:[
   ["Defend a niche (focus strategy)",[5,1,5,2,1],"Serve a segment where your strengths matter most."],
   ["Compete head-on",[3,5,3,4,1],"Only if you can match resources."],
   ["Form an alliance or licensing deal",[2,2,3,3,5],"Share resources and reduce risk."],
   ["Expand into new segments or regions",[3,4,3,5,1],"Grow where the rival is not."]
  ]},
 quiz:{q:[
  ["Which step of the strategic management process identifies opportunities and threats?",["Internal analysis","External analysis","Implementation","Evaluation"],1,"External analysis."],
  ["An organization's major value-creating capabilities are its…",["Weaknesses","Core competencies","Threats","Goals"],1,"Core competencies."],
  ["SWOT combines…",["Steps 1 and 2","Steps 2 and 3","Steps 4 and 5","Steps 5 and 6"],1,"External + internal analysis."],
  ["Which level of strategy decides what businesses the company should be in?",["Functional","Competitive","Corporate","Operational"],2,"Corporate strategy."],
  ["Strategic management matters because it…",["Guarantees success","Is linked to better organizational performance","Removes uncertainty","Replaces planning"],1,"Research links strategic planning to performance."]
 ]}
});

/* ---------------- L18 ---------------- */
add(18,{
 primer:[
  "<b>Corporate strategies</b>: <b>growth</b> (concentration, vertical integration — backward or forward, horizontal integration, related or unrelated diversification), <b>stability</b> and <b>renewal</b> (retrenchment, turnaround).",
  "The <b>BCG matrix</b> places businesses by market growth rate and relative market share: <b>stars</b>, <b>cash cows</b>, <b>question marks</b> and <b>dogs</b>.",
  "<b>Competitive strategies</b> (Porter): <b>cost leadership</b>, <b>differentiation</b> and <b>focus</b> (cost or differentiation in a narrow segment). Firms 'stuck in the middle' struggle.",
  "<b>Current issues</b>: strategic leadership, strategic flexibility, e-business, customer-service and innovation strategies (first mover vs follower)."
 ],
 discussion:["Classify three businesses of a Pakistani conglomerate on the BCG matrix.","Is a well-known local biscuit maker a cost leader or a differentiator?","When is it better to be a follower rather than a first mover?"],
 calc:{title:"What-if: BCG matrix position",
  intro:"Set a business unit's market growth rate and relative market share (your share ÷ the largest competitor's). The worksheet shows its BCG category and the usual strategy.",
  inputs:[
   {k:"g",label:"Market growth rate (% per year)",min:-5,max:30,step:1,v:12,f:x=>x+"%"},
   {k:"rs",label:"Relative market share (×)",min:0.1,max:3,step:0.1,v:1.4,f:x=>x.toFixed(1)+"×"},
   {k:"cut",label:"High-growth cut-off (%)",min:5,max:15,step:1,v:10,f:x=>x+"%"}
  ],
  run(v){
   const hiG=v.g>=v.cut, hiS=v.rs>=1;
   const c=hiG?(hiS?["Star","Invest heavily to keep leadership; it may need as much cash as it earns."]:["Question mark","Analyse carefully: invest to turn it into a star, or divest."])
     :(hiS?["Cash cow","Milk it: generates strong cash with little investment — fund stars and question marks."]:["Dog","Sell off or liquidate unless it has a strategic purpose."]);
   return {stats:[["BCG category",c[0]],["Growth",v.g+"%"],["Relative share",v.rs.toFixed(1)+"×"]],
    bars:[{label:"Growth vs cut-off",value:v.g-v.cut,color:hiG?"--c3":"--c2"},{label:"Share vs leader (−1)",value:(v.rs-1)*10,color:hiS?"--c3":"--c2"}],barsOpt:{min:-20,max:20,fmt:x=>fmt(x,1)},
    fb:["info","<b>"+c[0]+".</b> "+c[1]]};
  }},
 sort:{title:"Sort the moves into corporate strategies",
  bins:["Growth","Stability","Renewal"],
  items:[
   ["A cement company builds a new plant to serve more regions",0,"Concentration — growing the current business."],
   ["A textile mill buys a cotton-ginning factory",0,"Backward vertical integration."],
   ["A bank acquires a smaller competitor",0,"Horizontal integration."],
   ["A food company starts a hotel business",0,"Unrelated diversification."],
   ["A family firm keeps doing what it does, serving the same customers",1,"Stability — no significant change."],
   ["Closing loss-making branches and cutting costs after a short-term setback",2,"Retrenchment."],
   ["Major restructuring after serious performance problems",2,"Turnaround."]
  ],
  then:{title:"Sort: which competitive strategy?",
   bins:["Cost leadership","Differentiation","Focus"],
   items:[
    ["Lowest-cost producer selling basic products to the mass market",0,"Efficiency, scale and tight cost control."],
    ["A no-frills airline with the lowest fares",0,"Cost leadership."],
    ["Premium lawn prints with unique designs and a strong brand",1,"Unique and widely valued."],
    ["A mobile network known for the best customer service",1,"Differentiation."],
    ["A clinic serving only sports injuries",2,"Advantage in a narrow segment."],
    ["Halal cosmetics for a specific consumer niche",2,"Focus."]
   ]}},
 dilemma:{title:"Dilemma: first mover or follower?",
  intro:"Your Karachi company could be first to launch a QR-code payment app for small shops.",
  meters:[["adv","Competitive advantage"],["risk","Risk control"],["cash","Cash"]],
  steps:[
   {t:"Timing",x:"A large bank is rumoured to be planning a similar app next year.",
    c:[["Launch now as the first mover",{adv:15,risk:-10,cash:-10},"First movers gain reputation and early customers but bear high development and education costs.","warn"],
       ["Launch a pilot in one market to learn fast while limiting risk",{adv:10,risk:8,cash:-3},"Strategic flexibility: commit gradually and adapt.","good"],
       ["Wait and copy the bank's product later",{adv:-10,risk:10,cash:5},"Followers learn from the leader's mistakes but must win customers away.","info"]]},
   {t:"Positioning",x:"Your pilot works. How will you compete?",
    c:[["Charge the lowest fees in the market",{adv:5,risk:0,cash:-10},"Cost leadership needs the lowest costs, not just low prices.","warn"],
       ["Differentiate with Urdu interface, instant settlement and shop analytics",{adv:15,risk:3,cash:5},"Differentiation that customers value.","good"],
       ["Try to be both cheapest and most premium",{adv:-10,risk:-5,cash:-5},"'Stuck in the middle'.","bad"]]}
  ],
  lesson:"Choose a clear competitive strategy and stay flexible about timing and commitment."},
 select:{title:"Selector: which competitive strategy (Porter)?",
  intro:"Rate the firm and market (0–10).",
  criteria:[["Scale economies and efficient operations",5],["Strong brand, design or service capability",5],["Customers are very price-sensitive",5],["A distinct segment with special needs",5],["Limited resources to serve the whole market",5]],
  options:[
   ["Cost leadership",[5,1,5,1,1],"Lowest cost in the industry."],
   ["Differentiation",[2,5,1,2,2],"Unique features customers will pay for."],
   ["Cost focus",[4,1,4,5,5],"Lowest cost in a narrow segment."],
   ["Differentiation focus",[1,5,1,5,5],"Unique offer for a narrow segment."]
  ]},
 quiz:{q:[
  ["A textile company buying its fabric supplier is…",["Horizontal integration","Backward vertical integration","Forward vertical integration","Unrelated diversification"],1,"It becomes its own supplier."],
  ["In the BCG matrix, low growth and high market share is a…",["Star","Question mark","Cash cow","Dog"],2,"Cash cow."],
  ["A corporate strategy for short-term performance problems is…",["Turnaround","Retrenchment","Concentration","Stability"],1,"Retrenchment."],
  ["Being the lowest-cost producer in the industry is…",["Differentiation","Focus","Cost leadership","Diversification"],2,"Cost leadership."],
  ["The ability to recognize major external changes and quickly commit resources is…",["Strategic leadership","Strategic flexibility","Benchmarking","Retrenchment"],1,"Strategic flexibility."]
 ]}
});

/* ---------------- L19 ---------------- */
add(19,{
 primer:[
  "<b>Organizing</b> arranges and structures work to accomplish goals. <b>Organizational design</b> involves six elements: <b>work specialization</b>, <b>departmentalization</b>, <b>chain of command</b> (authority, responsibility, unity of command), <b>span of control</b>, <b>centralization vs decentralization</b>, and <b>formalization</b>.",
  "Departmentalization can be <b>functional</b>, <b>geographic</b>, <b>product</b>, <b>process</b> or <b>customer</b>; cross-functional teams are increasingly common.",
  "A <b>mechanistic</b> organization is rigid and tightly controlled; an <b>organic</b> one is highly adaptive and flexible. The best design depends on <b>strategy</b>, <b>size</b>, <b>technology</b> and <b>environmental uncertainty</b>.",
  "Wider spans of control mean fewer levels and fewer managers — cheaper and faster, but each manager supervises more people."
 ],
 discussion:["Draw the structure of a department at COMSATS Wah. How many levels does it have?","Why are Pakistani banks becoming less centralized?","When is a mechanistic structure the right choice?"],
 calc:{title:"What-if: span of control",
  intro:"Robbins' classic example: 4,096 operative employees with a span of 4 need 7 levels and 1,365 managers; with a span of 8, only 5 levels and 585 managers. Try your own numbers.",
  inputs:[
   {k:"N",label:"Operative (non-managerial) employees",min:50,max:20000,step:50,v:4096},
   {k:"s1",label:"Span of control — option A",min:2,max:20,v:4},
   {k:"s2",label:"Span of control — option B",min:2,max:20,v:8},
   {k:"sal",label:"Average manager salary (Rs 000 per month)",min:50,max:1000,step:10,v:250}
  ],
  run(v){
   const f=s=>{ let m=v.N, tot=0, lv=1; while(m>1){ m=Math.ceil(m/s); tot+=m; lv++; } return [tot,lv]; };
   const [a,la]=f(v.s1), [b,lb]=f(v.s2), save=(a-b)*v.sal*12/1000;
   return {stats:[["Option A: managers / levels",fmt(a)+" / "+la],["Option B: managers / levels",fmt(b)+" / "+lb],["Annual salary difference",rs(Math.abs(save),0)+" m"]],
    bars:[{label:"Managers (span "+v.s1+")",value:a,color:"--c2"},{label:"Managers (span "+v.s2+")",value:b,color:"--c3"}],barsOpt:{fmt:x=>fmt(x)},
    fb:["info","A span of "+Math.max(v.s1,v.s2)+" needs <b>"+fmt(Math.abs(a-b))+" fewer managers</b> and about "+rs(Math.abs(save),0)+" million a year less in management salaries. Wider spans work best when employees are trained and experienced, tasks are similar and standardized, and managers have good information systems."]};
  }},
 sort:{title:"Sort the decisions into the six elements of organizational design",
  bins:["Work specialization","Departmentalization","Chain of command","Span of control","Centralization / decentralization","Formalization"],
  items:[
   ["Dividing garment making into cutting, stitching and finishing jobs",0,"Dividing work into separate tasks."],
   ["Grouping staff into marketing, finance and HR",1,"How jobs are grouped."],
   ["Organizing a bank's branches by region",1,"Geographic departmentalization."],
   ["Each employee reports to only one boss",2,"Unity of command."],
   ["Clarifying who has the authority to approve purchases",2,"Chain of command — the line of authority."],
   ["Deciding a supervisor should manage 15 people instead of 8",3,"Number of employees a manager can efficiently manage."],
   ["Letting branch managers approve loans up to Rs 5 million",4,"Pushing decisions down — decentralization."],
   ["All hiring decisions made at head office",4,"Centralization."],
   ["Detailed written procedures for every task",5,"Degree to which jobs are standardized and guided by rules."]
  ],
  then:{title:"Sort: which type of departmentalization?",
   bins:["Functional","Geographic","Product","Process","Customer"],
   items:[
    ["Engineering, accounting, production, HR",0,"Groups jobs by functions performed."],
    ["North region, South region, Central region",1,"Groups jobs by territory."],
    ["Biscuits division, Dairy division, Beverages division",2,"Groups jobs by product line."],
    ["Cutting, Sewing, Packing departments",3,"Groups jobs by product or customer flow."],
    ["Corporate banking, Retail banking, SME banking",4,"Groups jobs by specific, unique customers."]
   ]}},
 dilemma:{title:"Dilemma: centralize or decentralize?",
  intro:"You run a chain of 40 pharmacies across Punjab. All purchasing and pricing is decided at head office in Lahore.",
  meters:[["resp","Responsiveness"],["control","Control & consistency"],["cost","Cost efficiency"]],
  steps:[
   {t:"Local problems",x:"Branch managers complain they cannot respond to local shortages or competitor prices.",
    c:[["Keep everything centralized — consistency matters",{resp:-15,control:10,cost:5},"Control is strong but the chain cannot respond to local conditions.","warn"],
       ["Decentralize local stock decisions within budget limits; keep core pricing central",{resp:12,control:5,cost:5},"Decentralization where local knowledge matters, with formal limits.","good"],
       ["Give branch managers full freedom over all decisions",{resp:15,control:-15,cost:-8},"Fast, but quality and pricing become inconsistent.","bad"]]},
   {t:"Span of control",x:"Each regional manager now supervises 4 branches. A consultant suggests 10.",
    c:[["Widen the span to 10 and invest in a branch-performance dashboard",{resp:5,control:5,cost:12},"Wider spans need good information systems and experienced branch managers.","good"],
       ["Widen the span to 10 with no other changes",{resp:-5,control:-10,cost:10},"Managers become overloaded.","warn"],
       ["Keep the span at 4",{resp:0,control:5,cost:-8},"Tight control but costly layers.","info"]]}
  ],
  lesson:"Structure is a set of trade-offs; choose the mix of centralization, span and formalization that fits the situation."},
 select:{title:"Selector: mechanistic or organic structure?",
  intro:"Rate the contingency factors (0–10).",
  criteria:[["Strategy is innovation-focused",5],["The organization is very large",5],["Technology is routine (mass production)",5],["The environment is dynamic and uncertain",5],["Strict regulation and safety demands",5]],
  options:[
   ["Mechanistic (rigid, high formalization, centralized)",[1,5,5,1,5],"Efficient and predictable in stable conditions."],
   ["Organic (flexible, cross-functional, decentralized)",[5,2,1,5,2],"Adaptive in uncertain, innovative settings."]
  ]},
 quiz:{q:[
  ["The number of employees a manager can efficiently and effectively manage is…",["Chain of command","Span of control","Formalization","Unity of command"],1,"Span of control."],
  ["Unity of command means…",["One boss for each employee","Many bosses","No bosses","Decentralization"],0,"Each person reports to only one manager."],
  ["Grouping jobs by product line is… departmentalization.",["Functional","Geographic","Product","Customer"],2,"Product departmentalization."],
  ["The degree to which jobs are standardized and guided by rules is…",["Specialization","Formalization","Centralization","Departmentalization"],1,"Formalization."],
  ["Which structure is best for a dynamic, uncertain environment?",["Mechanistic","Organic","Bureaucratic","Highly centralized"],1,"Organic."]
 ]}
});

/* ---------------- L20 ---------------- */
add(20,{
 primer:[
  "<b>Traditional designs</b>: <b>simple</b> (low departmentalization, wide spans, centralized), <b>functional</b> (groups similar specialists) and <b>divisional</b> (separate, semi-autonomous units).",
  "<b>Contemporary designs</b>: <b>team structure</b> (whole organization made up of teams), <b>matrix</b> (specialists from functional departments assigned to projects — two bosses), <b>project structure</b> (employees continuously work on projects), <b>boundaryless</b> designs including <b>virtual</b> and <b>network</b> organizations, and <b>learning organizations</b>.",
  "Today's organizations also use internal and external <b>collaboration</b>, <b>flexible work arrangements</b> (telecommuting, compressed work weeks, flextime, job sharing) and a <b>contingent workforce</b>.",
  "As teams grow, the number of communication links grows very fast: n(n−1)/2."
 ],
 discussion:["Would a matrix structure work for a university running many research projects? Why?","How have Pakistani software houses used virtual and network structures?","What are the risks of relying on a contingent (freelance) workforce?"],
 calc:{title:"What-if: communication links as a group grows",
  intro:"Everyone talking to everyone creates n(n−1)/2 links. Splitting people into teams, with team leaders linked to each other, cuts coordination load — one reason firms adopt team structures.",
  inputs:[
   {k:"N",label:"Total people",min:3,max:200,v:60},
   {k:"k",label:"Team size",min:2,max:30,v:8}
  ],
  run(v){
   const all=v.N*(v.N-1)/2, T=Math.ceil(v.N/v.k), within=Math.floor(v.N/v.k)*v.k*(v.k-1)/2+((v.N%v.k)*((v.N%v.k)-1)/2), between=T*(T-1)/2, team=within+between;
   return {stats:[["Links if everyone connects",fmt(all)],["Number of teams",String(T)],["Links with team structure",fmt(team)],["Reduction",fmt((1-team/all)*100)+"%"]],
    bars:[{label:"Everyone connected",value:all,color:"--c5"},{label:"Within teams",value:within,color:"--c1"},{label:"Between team leaders",value:between,color:"--c4"}],barsOpt:{fmt:x=>fmt(x)},
    fb:["info","Teams of "+v.k+" reduce communication links from "+fmt(all)+" to "+fmt(team)+". Very small teams create many teams (more leader links); very large teams overload members. Most effective work teams are kept small."]};
  }},
 sort:{title:"Sort the organizations by structural design",
  bins:["Simple","Functional","Divisional","Team","Matrix / project","Virtual / network"],
  items:[
   ["A small family bakery where the owner decides everything",0,"Low departmentalization, wide spans, centralized authority."],
   ["A hospital organized into nursing, pharmacy, radiology and finance",1,"Groups similar or related occupational specialties."],
   ["A conglomerate with separate textiles, cement and energy businesses",2,"Semi-autonomous units with their own managers."],
   ["A software firm where self-managed teams handle each product",3,"The whole organization is made up of teams."],
   ["Engineers from different departments assigned to a dam project, reporting to both their department head and the project manager",4,"Matrix — dual chain of command."],
   ["A consultancy where staff move from one client project to the next",4,"Project structure."],
   ["A small core team that hires freelance designers and developers for each job",5,"Virtual organization."],
   ["A sportswear brand that outsources all manufacturing to partner factories",5,"Network organization."]
  ],
  then:{title:"Sort: which flexible work arrangement?",
   bins:["Telecommuting","Compressed work week","Flextime","Job sharing"],
   items:[
    ["Working from home three days a week via a laptop",0,"Work from home linked by technology."],
    ["Working four 10-hour days instead of five 8-hour days",1,"Longer days, fewer days."],
    ["Choosing to start any time between 8 and 10 a.m.",2,"Required core hours with flexible start and end."],
    ["Two part-time officers sharing one full-time post",3,"Two or more people split a full-time job."]
   ]}},
 dilemma:{title:"Dilemma: two bosses in a matrix",
  intro:"You are an engineer in a matrix organization working on a metro-bus project. Your functional head and your project manager give conflicting instructions.",
  meters:[["proj","Project progress"],["rel","Relationships"],["clarity","Role clarity"]],
  steps:[
   {t:"Conflicting orders",x:"The project manager wants you on-site full-time this week; your functional head needs a design review completed.",
    c:[["Follow whoever shouts louder",{proj:0,rel:-10,clarity:-10},"Matrix structures break down without clear priorities.","bad"],
       ["Ask both managers to agree priorities in a short joint meeting",{proj:8,rel:10,clarity:15},"Matrix structures need explicit coordination between the two chains.","good"],
       ["Try to do both by working nights",{proj:5,rel:0,clarity:-5},"Hides the problem and leads to burnout.","warn"]]},
   {t:"Fixing the system",x:"The same conflict keeps happening for others too.",
    c:[["Propose clear rules: project manager decides 'what and when', functional head decides 'how and who'",{proj:10,rel:8,clarity:15},"A common way to make matrix authority workable.","good"],
       ["Abolish the matrix and return to pure functional departments",{proj:-10,rel:0,clarity:5},"Gains clarity but loses project coordination.","warn"],
       ["Ignore it — conflict is normal",{proj:-5,rel:-5,clarity:-10},"Unresolved conflict reduces performance.","bad"]]}
  ],
  lesson:"Matrix and team structures increase flexibility but need clear rules for shared authority."},
 select:{title:"Selector: which structure for this organization?",
  intro:"Rate the situation (0–10).",
  criteria:[["Small, owner-managed organization",5],["Need deep specialist expertise and efficiency",5],["Several distinct products or markets",5],["Many complex projects that need specialists from many areas",5],["Want low fixed costs and flexibility",5]],
  options:[
   ["Simple structure",[5,1,1,1,3],"Fast and cheap; risky as the firm grows."],
   ["Functional structure",[1,5,1,2,2],"Specialization efficiencies; weak cross-function coordination."],
   ["Divisional structure",[1,2,5,2,1],"Focus on results by product or market; duplication of resources."],
   ["Matrix / project structure",[1,3,2,5,2],"Fluid and flexible; complex authority."],
   ["Virtual / network organization",[3,1,2,2,5],"Highly flexible and low cost; less control."]
  ]},
 quiz:{q:[
  ["A structure that assigns specialists from functional departments to projects led by a project manager is…",["Simple","Divisional","Matrix","Network"],2,"Matrix."],
  ["An organization made up of a small core of full-time staff and outside specialists hired as needed is…",["Virtual","Functional","Bureaucratic","Divisional"],0,"Virtual organization."],
  ["Working longer days but fewer days per week is…",["Flextime","Compressed work week","Job sharing","Telecommuting"],1,"Compressed work week."],
  ["An organization that has developed the capacity to continuously learn, adapt and change is a…",["Learning organization","Simple structure","Mechanistic organization","Matrix"],0,"Learning organization."],
  ["A drawback of the matrix structure is…",["Too little flexibility","Complexity of assigning people and two bosses","No specialists","No projects"],1,"Dual chain of command."]
 ]}
});

/* ---------------- L21 ---------------- */
add(21,{
 primer:[
  "The <b>HRM process</b>: strategic HR planning → recruitment/decruitment → selection → orientation → training → performance management → compensation & benefits → career development.",
  "<b>Recruitment</b> locates, identifies and attracts capable applicants; <b>decruitment</b> reduces the workforce (firing, layoffs, attrition, transfers, reduced work weeks, early retirement, job sharing).",
  "<b>Selection</b> predicts which applicants will be successful. Decisions can be correct (accept a good performer, reject a poor one) or errors (<b>reject error</b> — rejecting someone who would succeed; <b>accept error</b> — hiring someone who fails).",
  "Good selection devices are <b>valid</b> (proven relationship to job performance) and <b>reliable</b> (measure consistently). Devices include application forms, written tests, performance-simulation tests (work sampling, assessment centres), interviews, background investigations and physical exams. A <b>realistic job preview</b> includes both positive and negative information."
 ],
 discussion:["Why is 'sifarish' (personal recommendation) risky as a selection device?","What realistic job preview would you give a new call-centre agent?","Which selection device would you use to hire a branch manager? Why?"],
 calc:{title:"What-if: how valid is your selection device?",
  intro:"Out of a pool of applicants, some would succeed on the job. A selection test classifies applicants correctly a given share of the time. See how accuracy changes the four selection outcomes.",
  inputs:[
   {k:"n",label:"Applicants",min:20,max:1000,step:10,v:200},
   {k:"base",label:"Applicants who would succeed on the job (%)",min:5,max:90,step:1,v:40,f:x=>x+"%"},
   {k:"acc",label:"Selection device accuracy (%)",min:50,max:99,step:1,v:70,f:x=>x+"%",hint:"50% = no better than tossing a coin."}
  ],
  run(v){
   const g=v.n*v.base/100, b=v.n-g, a=v.acc/100;
   const ca=g*a, re=g*(1-a), ae=b*(1-a), cr=b*a, hit=ca/(ca+ae)*100;
   return {stats:[["Hired who succeed",fmt(hit)+"%"],["Accept errors",fmt(ae)],["Reject errors",fmt(re)]],
    bars:[{label:"Correct: accept",value:ca,color:"--c3"},{label:"Correct: reject",value:cr,color:"--c3"},{label:"Reject error",value:re,color:"--c2"},{label:"Accept error",value:ae,color:"--c5"}],barsOpt:{fmt:x=>fmt(x)},
    fb:[hit>=70?"good":"warn","Of the people you accept, <b>"+fmt(hit)+"%</b> will succeed (by chance it would be "+v.base+"%). Accept errors cost training money and poor performance; reject errors lose good talent and may invite discrimination claims. Valid, reliable devices reduce both."]};
  }},
 sort:{title:"Put the HRM process in order",
  order:["Strategic human resource planning","Recruitment and decruitment","Selection","Orientation","Training","Performance management","Compensation and benefits","Career development"],
  explain:"The first three steps find competent employees, the next two keep their skills current, and the last three retain high performers.",
  then:{title:"Sort: recruitment source or decruitment option?",
   bins:["Recruitment source","Decruitment option"],
   items:[
    ["Posting the job on a university job portal",0,"Recruitment."],
    ["Employee referrals",0,"Recruitment."],
    ["Campus recruitment drive at COMSATS",0,"Recruitment."],
    ["Not filling vacancies when people retire (attrition)",1,"Decruitment."],
    ["Offering early-retirement packages",1,"Decruitment."],
    ["Temporary layoffs during a slowdown",1,"Decruitment."]
   ]}},
 dilemma:{title:"Dilemma: the 'sifarish' candidate",
  intro:"You are hiring a junior accountant for a public-sector company. A senior official calls to recommend his nephew.",
  meters:[["merit","Merit"],["rel","Relationships"],["risk","Legal & reputation safety"]],
  steps:[
   {t:"The phone call",x:"The nephew's CV is average. Two other candidates have stronger qualifications.",
    c:[["Hire the nephew to keep the official happy",{merit:-20,rel:10,risk:-15},"An accept error driven by favouritism; it also damages fairness and trust.","bad"],
       ["Thank the official and explain everyone takes the same written test and structured interview",{merit:15,rel:-3,risk:12},"Valid, reliable and equal selection protects the organization.","good"],
       ["Avoid the problem by delaying the hiring",{merit:-5,rel:0,risk:0},"Delay hurts the department.","warn"]]},
   {t:"The test results",x:"The nephew scores lowest on the work-sample test.",
    c:[["Offer the job to the top scorer and give the nephew feedback",{merit:15,rel:-5,risk:10},"Decisions based on job-related evidence are defensible.","good"],
       ["Adjust the scores to make it 'fair'",{merit:-20,rel:5,risk:-20},"Manipulating a selection process is unethical and possibly illegal.","bad"],
       ["Create a second post for the nephew",{merit:-10,rel:10,risk:-10},"Wastes resources and undermines the system.","bad"]]}
  ],
  lesson:"Selection should rely on valid, reliable, job-related devices applied equally to all candidates."},
 select:{title:"Selector: which selection device?",
  intro:"Rate the hiring situation (0–10).",
  criteria:[["Routine, lower-level job",5],["Managerial job",5],["Large number of applicants",5],["Budget is limited",5],["Need to verify honesty and past record",5]],
  options:[
   ["Written tests (ability, aptitude, integrity)",[4,3,5,4,2],"Cheap, quick and valid for many jobs."],
   ["Work sampling",[5,1,2,3,1],"Hands-on simulation of the actual job — very valid for routine jobs."],
   ["Assessment centre",[1,5,1,1,2],"Managerial simulations; valid but costly."],
   ["Structured interview",[3,4,2,3,2],"More valid than unstructured interviews."],
   ["Background investigation",[2,3,1,3,5],"Verifies application data and references."]
  ]},
 quiz:{q:[
  ["Hiring an applicant who later performs poorly is a(n)…",["Reject error","Accept error","Correct decision","Validity error"],1,"Accept error."],
  ["A selection device that measures the same thing consistently is…",["Valid","Reliable","Realistic","Structured"],1,"Reliability."],
  ["A job preview that includes both positive and negative information is…",["A sales pitch","A realistic job preview","An orientation","A background check"],1,"Realistic job preview (RJP)."],
  ["Reducing an organization's workforce is…",["Recruitment","Decruitment","Selection","Orientation"],1,"Decruitment."],
  ["Assessment centres are mainly used to select…",["Clerical staff","Managers","Labourers","Interns"],1,"Managerial potential."]
 ]}
});

/* ---------------- L22 ---------------- */
add(22,{
 primer:[
  "<b>Performance management</b> sets standards and appraises performance using methods such as written essays, critical incidents, graphic rating scales, behaviourally anchored rating scales (BARS), multiperson comparisons, MBO and <b>360-degree appraisal</b>.",
  "<b>Compensation and benefits</b> attract and retain talent; pay levels depend on factors such as tenure, performance, the kind of job, the industry, union presence, size, location and management philosophy. <b>Skill-based pay</b> and <b>variable pay</b> are common systems.",
  "<b>Contemporary HR issues</b>: managing downsizing (including care for 'survivors'), workforce diversity, sexual harassment, work-life balance and controlling HR costs.",
  "Turnover is expensive — recruiting, hiring, training and lost productivity can cost a large share of a year's salary per leaver."
 ],
 discussion:["Which appraisal method is fairest for teachers? Why?","How should a Pakistani company support survivors after layoffs?","Why do talented graduates leave their first jobs within two years?"],
 calc:{title:"What-if: the cost of employee turnover",
  intro:"A Karachi call centre loses many agents each year. Estimate the annual cost of turnover and whether a retention programme pays for itself.",
  inputs:[
   {k:"emp",label:"Employees",min:20,max:2000,step:10,v:400},
   {k:"to",label:"Annual turnover (%)",min:0,max:80,step:1,v:35,f:x=>x+"%"},
   {k:"sal",label:"Average annual salary (Rs 000)",min:300,max:5000,step:50,v:900},
   {k:"rc",label:"Replacement cost (% of annual salary)",min:10,max:150,step:5,v:40,f:x=>x+"%",hint:"Recruiting, interviewing, training and lost productivity."},
   {k:"prog",label:"Retention programme cost per year (Rs million)",min:0,max:50,step:0.5,v:8},
   {k:"red",label:"Expected cut in turnover from the programme (points)",min:0,max:30,step:1,v:10}
  ],
  run(v){
   const leavers=v.emp*v.to/100, cost=leavers*v.sal*v.rc/100/1000;
   const leavers2=v.emp*Math.max(0,v.to-v.red)/100, cost2=leavers2*v.sal*v.rc/100/1000, net=cost-cost2-v.prog;
   return {stats:[["Leavers per year",fmt(leavers)],["Annual turnover cost",rs(cost,1)+" m"],["Net saving from programme",rs(net,1)+" m"]],
    bars:[{label:"Turnover cost — now",value:cost,color:"--c5"},{label:"Turnover cost — with programme",value:cost2,color:"--c1"},{label:"Programme cost",value:v.prog,color:"--c2"}],barsOpt:{fmt:x=>"Rs "+fmt(x,1)+"m"},
    fb:net>0?["good","The programme <b>pays for itself</b> with a net saving of "+rs(net,1)+" million a year — before counting better service from experienced staff."]
     :["warn","The programme costs more than it saves at these numbers. Target the main reasons people leave (pay, supervisors, career growth, schedules) for a bigger cut in turnover."]};
  }},
 sort:{title:"Sort the performance-appraisal methods",
  bins:["Written essay","Critical incidents","Graphic rating scale","BARS","Multiperson comparison","360-degree appraisal"],
  items:[
   ["The supervisor writes a description of the employee's strengths and weaknesses",0,"Simple to use; depends on writing skill."],
   ["Recording specific examples of very effective and very ineffective behaviour",1,"Rich, behaviour-based examples."],
   ["Rating 'quality of work' from 1 to 5",2,"A list of performance factors rated on an incremental scale."],
   ["Rating against scales whose points describe real job behaviours",3,"Behaviourally anchored rating scales."],
   ["Ranking all ten officers from best to worst",4,"Compares individuals with one another."],
   ["Feedback from the boss, peers, subordinates and customers",5,"Feedback from the full circle of daily contacts."]
  ]},
 dilemma:{title:"Dilemma: downsizing with dignity",
  intro:"Your manufacturing company must cut 15% of jobs after losing a major export order.",
  meters:[["cost","Cost savings"],["surv","Survivor morale"],["rep","Reputation"]],
  steps:[
   {t:"Choosing the approach",x:"How will you reduce the workforce?",
    c:[["Immediate layoffs of the most recently hired",{cost:12,surv:-10,rep:-10},"Fast, but it may remove young talent you will need.","warn"],
       ["Combine a hiring freeze, voluntary early retirement and some job sharing before layoffs",{cost:8,surv:10,rep:10},"Decruitment has many options besides firing.","good"],
       ["Cut everyone's pay by 30% without discussion",{cost:10,surv:-20,rep:-10},"Damages trust across the whole workforce.","bad"]]},
   {t:"After the cuts",x:"Remaining employees are anxious and productivity has dropped ('survivor syndrome').",
    c:[["Tell them to be grateful they still have jobs",{cost:0,surv:-15,rep:-5},"Ignores survivors' anxiety, guilt and lower commitment.","bad"],
       ["Communicate openly, explain the future plan and offer counselling and clear roles",{cost:-2,surv:15,rep:8},"Robbins stresses caring for survivors as well as those who leave.","good"],
       ["Offer a small bonus to everyone",{cost:-5,surv:5,rep:0},"Helps a little but does not address uncertainty.","info"]]}
  ],
  lesson:"Downsizing should treat both leavers and survivors with honesty and respect."},
 select:{title:"Selector: which retention strategy?",
  intro:"Rate the main reasons good employees are leaving (0–10).",
  criteria:[["Pay below market",5],["No career growth",5],["Poor relationships with supervisors",5],["Long hours and no flexibility",5],["Work goes unrecognized",5]],
  options:[
   ["Market-competitive pay and variable pay",[5,1,1,1,2],"Close the pay gap; reward performance."],
   ["Career development paths and training",[1,5,1,1,2],"Show people a future in the organization."],
   ["Train supervisors in people skills",[1,2,5,2,3],"People leave managers, not companies."],
   ["Flexible work and work-life balance programmes",[1,1,2,5,1],"Flextime, telecommuting, family-friendly benefits."],
   ["Recognition programmes",[1,1,2,1,5],"Low-cost, frequent appreciation."]
  ]},
 quiz:{q:[
  ["An appraisal method using feedback from supervisors, peers, subordinates and customers is…",["BARS","360-degree appraisal","MBO","Written essay"],1,"360-degree."],
  ["Rewarding employees for the job skills they can demonstrate is…",["Variable pay","Skill-based pay","Piece rate","Seniority pay"],1,"Skill-based pay."],
  ["Employees who remain after layoffs often experience…",["Survivor syndrome","Glass ceiling","Role ambiguity","Escalation"],0,"Layoff-survivor sickness."],
  ["Ranking employees from best to worst is a… method.",["Graphic rating scale","Multiperson comparison","Critical incident","BARS"],1,"Multiperson comparison."],
  ["Which is a contemporary HR issue in Robbins?",["Work-life balance","Scientific management","Bureaucracy","Hawthorne effect"],0,"Work-life balance."]
 ]}
});

/* ---------------- L23 ---------------- */
add(23,{
 primer:[
  "A <b>group</b> is two or more interacting and interdependent individuals who come together to achieve specific goals. <b>Work teams</b> work intensely on a specific, common goal using positive synergy, individual and mutual accountability and complementary skills.",
  "Groups develop through five stages: <b>forming</b>, <b>storming</b>, <b>norming</b>, <b>performing</b> and <b>adjourning</b>.",
  "<b>Social loafing</b> is the tendency for individuals to exert less effort when working collectively than individually. It rises when individual contributions cannot be identified.",
  "Types of teams: <b>problem-solving</b>, <b>self-managed</b>, <b>cross-functional</b> and <b>virtual</b>. Effective teams have clear goals, relevant skills, mutual trust, unified commitment, good communication, negotiating skills, appropriate leadership and internal and external support."
 ],
 discussion:["Which stage is your current group project in? What tells you?","How can teachers reduce social loafing in student groups?","Should a Pakistani bank use self-managed teams in branches?"],
 calc:{title:"What-if: team size and social loafing",
  intro:"In Ringelmann's rope-pulling studies, group output rose with size but output per person fell. Set the team size, the effort lost per extra member and how visible each person's contribution is.",
  inputs:[
   {k:"n",label:"Team size",min:1,max:15,v:6},
   {k:"loss",label:"Effort lost per extra member (%)",min:0,max:15,step:0.5,v:7,f:x=>x+"%"},
   {k:"acc",label:"Individual accountability (0 = invisible, 10 = fully measured)",min:0,max:10,v:3}
  ],
  run(v){
   const l=v.loss/100*(1-v.acc/12);
   const eff=n=>Math.max(0.2,1-l*(n-1));
   const total=v.n*eff(v.n), lost=v.n-total;
   const rows=[]; for(let n=1;n<=Math.max(8,v.n);n++) if(n<=15) rows.push({label:n+" member"+(n>1?"s":""),value:n*eff(n),color:n===v.n?"--c4":"--c1"});
   return {stats:[["Effort per person",fmt(eff(v.n)*100)+"%"],["Team output (people-equivalents)",fmt(total,1)],["Output lost to loafing",fmt(lost,1)+" people"]],
    bars:rows,barsOpt:{fmt:x=>fmt(x,1),rowH:22},
    fb:[eff(v.n)>=0.8?"good":"warn","Each member gives about "+fmt(eff(v.n)*100)+"% of solo effort. Raising <b>individual accountability</b> (clear roles, visible contributions, peer evaluation) and keeping teams small reduce social loafing."]};
  }},
 sort:{title:"Put the stages of group development in order",
  order:["Forming — members join and define the group's purpose, structure and leadership","Storming — intragroup conflict over who controls the group","Norming — close relationships and cohesiveness develop","Performing — the structure is accepted and the group works on the task","Adjourning — the group prepares to disband"],
  explain:"Not every group moves neatly through the stages, but the sequence helps managers anticipate problems.",
  then:{title:"Sort: work group or work team?",
   bins:["Work group","Work team"],
   items:[
    ["Goal is to share information",0,"Work groups share information."],
    ["Neutral (sometimes negative) synergy",0,"Work group."],
    ["Individual accountability only",0,"Work group."],
    ["Random and varied skills",0,"Work group."],
    ["Goal is collective performance",1,"Work team."],
    ["Positive synergy",1,"Work team."],
    ["Individual and mutual accountability",1,"Work team."],
    ["Complementary skills",1,"Work team."]
   ]}},
 dilemma:{title:"Dilemma: the storming project team",
  intro:"You lead a five-member student team preparing a business plan competition entry. Two members argue constantly and one does almost nothing.",
  meters:[["task","Task progress"],["cohesion","Cohesion"],["fair","Fairness"]],
  steps:[
   {t:"Conflict",x:"The two members disagree about the business idea and meetings end in arguments.",
    c:[["Avoid meetings to keep the peace",{task:-12,cohesion:-5,fair:0},"Avoidance leaves conflict unresolved.","bad"],
       ["Set ground rules and use clear criteria to compare both ideas",{task:12,cohesion:10,fair:10},"Moving from storming to norming needs agreed norms.","good"],
       ["Pick your favourite idea yourself",{task:8,cohesion:-10,fair:-8},"Fast but members feel unheard.","warn"]]},
   {t:"Social loafing",x:"One member keeps missing deadlines.",
    c:[["Do the work yourself",{task:5,cohesion:-5,fair:-12},"Rewards loafing and burns you out.","bad"],
       ["Assign visible individual tasks and agree on peer evaluation",{task:12,cohesion:5,fair:15},"Individual accountability reduces social loafing.","good"],
       ["Report them to the teacher immediately",{task:0,cohesion:-8,fair:5},"Sometimes necessary, but try a direct conversation first.","info"]]}
  ],
  lesson:"Teams need agreed norms and individual accountability to move from storming to performing."},
 select:{title:"Selector: which type of team?",
  intro:"Rate the situation (0–10).",
  criteria:[["Need to improve an existing process",5],["Members are experienced and can plan their own work",5],["Problem cuts across several departments",5],["Members are in different cities or countries",5],["Need fast decisions with little supervision",5]],
  options:[
   ["Problem-solving team",[5,2,2,1,1],"Members from the same department improve work activities."],
   ["Self-managed team",[2,5,2,1,5],"A formal team without a manager, responsible for a complete work process."],
   ["Cross-functional team",[2,3,5,2,2],"Members from different functional areas."],
   ["Virtual team",[1,3,3,5,2],"Uses technology to link physically dispersed members."]
  ]},
 quiz:{q:[
  ["The stage marked by intragroup conflict over control is…",["Forming","Storming","Norming","Adjourning"],1,"Storming."],
  ["The tendency to exert less effort when working collectively is…",["Groupthink","Social loafing","Synergy","Cohesion"],1,"Social loafing."],
  ["A team that uses technology to link physically dispersed members is…",["Cross-functional","Virtual","Self-managed","Problem-solving"],1,"Virtual team."],
  ["Work teams differ from work groups because teams have…",["Neutral synergy","Positive synergy and mutual accountability","Random skills","Only individual accountability"],1,"Positive synergy."],
  ["A formal group without a manager, responsible for a complete work process, is a…",["Self-managed team","Command group","Task force","Problem-solving team"],0,"Self-managed team."]
 ]}
});

/* ---------------- L24 ---------------- */
add(24,{
 primer:[
  "<b>Attitudes</b> have three components — cognitive, affective and behavioural. Key job attitudes: job satisfaction, job involvement, organizational commitment and employee engagement. <b>Cognitive dissonance</b> is any incompatibility between attitudes or between behaviour and attitudes.",
  "<b>Personality</b>: the <b>Big Five</b> model — extraversion, agreeableness, conscientiousness, emotional stability and openness to experience. Other insights: locus of control, Machiavellianism, self-esteem, self-monitoring, proactive personality, and Holland's personality–job fit.",
  "<b>Perception</b> is how we give meaning to our environment. <b>Attribution theory</b>: the <b>fundamental attribution error</b> (underestimating external and overestimating internal factors when judging others) and the <b>self-serving bias</b> (crediting our successes to ourselves and blaming failures on outside factors).",
  "Perceptual shortcuts: <b>selective perception</b>, <b>assumed similarity</b>, <b>stereotyping</b> and the <b>halo effect</b>."
 ],
 discussion:["Describe a time you felt cognitive dissonance. How did you reduce it?","Which Big Five trait best predicts job performance across jobs? Why?","How might the halo effect distort a teacher's grading?"],
 calc:{title:"What-if: pressure to reduce cognitive dissonance",
  intro:"An employee who values honesty is asked to tell customers a product is 'out of stock' to push a pricier model. Festinger's theory says the pressure to reduce dissonance depends on the importance of the issue, how much control the person feels they have, and the rewards involved.",
  inputs:[
   {k:"imp",label:"Importance of the conflicting elements (0–10)",min:0,max:10,v:8},
   {k:"ctrl",label:"Degree of control the person believes they have (0–10)",min:0,max:10,v:7},
   {k:"rew",label:"Rewards involved (0–10)",min:0,max:10,v:3}
  ],
  run(v){
   const p=v.imp/10*(0.3+0.7*v.ctrl/10)*(1-0.6*v.rew/10)*100;
   return {stats:[["Pressure to reduce dissonance",fmt(p)+"/100"]],
    bars:[{label:"Importance",value:v.imp,color:"--c5"},{label:"Perceived control",value:v.ctrl,color:"--c4"},{label:"Rewards (reduce tension)",value:v.rew,color:"--c3"}],barsOpt:{max:10},
    fb:p>=50?["warn","<b>High dissonance pressure.</b> The employee will likely change the behaviour (refuse the practice), change the attitude ('it's normal in sales') or leave. Managers should not create such conflicts."]
     :["info","<b>Lower pressure.</b> Low perceived control ('I had no choice') or high rewards make dissonance easier to live with — but the ethical problem remains."]};
  }},
 sort:{title:"Sort the behaviours into the Big Five personality traits",
  bins:["Extraversion","Agreeableness","Conscientiousness","Emotional stability","Openness to experience"],
  items:[
   ["Sociable, talkative and assertive in meetings",0,"Extraversion."],
   ["Enjoys networking events",0,"Extraversion."],
   ["Good-natured, cooperative and trusting",1,"Agreeableness."],
   ["Avoids conflict and helps colleagues",1,"Agreeableness."],
   ["Responsible, dependable and organized",2,"Conscientiousness — the best predictor of job performance across jobs."],
   ["Always meets deadlines",2,"Conscientiousness."],
   ["Calm and secure under pressure",3,"Emotional stability."],
   ["Imaginative, curious and open to new ideas",4,"Openness to experience."]
  ],
  then:{title:"Sort the perception errors",
   bins:["Fundamental attribution error","Self-serving bias","Halo effect","Assumed similarity"],
   items:[
    ["'He was late because he is lazy' (ignoring the traffic jam)",0,"Overestimating internal causes for others' behaviour."],
    ["Blaming a colleague's missed target entirely on poor effort",0,"Fundamental attribution error."],
    ["'I passed because I'm smart; I failed because the paper was unfair'",1,"Self-serving bias."],
    ["Rating a well-dressed candidate highly on every criterion",2,"A general impression based on one characteristic."],
    ["Assuming a new hire must love cricket because you do",3,"Believing others are like yourself."]
   ]}},
 dilemma:{title:"Dilemma: perception in a performance review",
  intro:"You are reviewing two officers. Ali is charming and articulate; Sana is quiet but delivers the best numbers.",
  meters:[["acc","Accuracy"],["fair","Fairness"],["motiv","Team motivation"]],
  steps:[
   {t:"First impressions",x:"Your instinct is to rate Ali highest overall.",
    c:[["Trust your instinct — Ali impresses everyone",{acc:-15,fair:-12,motiv:-8},"The halo effect: one trait colours the whole judgement.","bad"],
       ["Rate both on each criterion separately using recorded results",{acc:15,fair:12,motiv:10},"Objective data reduces perceptual shortcuts.","good"],
       ["Give both the same average rating to avoid conflict",{acc:-8,fair:-5,motiv:-10},"Central tendency hides real differences.","warn"]]},
   {t:"Explaining a miss",x:"Sana missed one target because a supplier failed to deliver.",
    c:[["Mark it as her personal failure",{acc:-10,fair:-12,motiv:-8},"Fundamental attribution error — ignoring external causes.","bad"],
       ["Consider the external cause and discuss what she could control",{acc:12,fair:12,motiv:8},"Balanced attribution.","good"],
       ["Ignore the missed target completely",{acc:-3,fair:0,motiv:2},"Too lenient; still discuss what could be learned.","info"]]}
  ],
  lesson:"Perception shapes behaviour; managers must check shortcuts and attributions against evidence."},
 select:{title:"Selector: personality–job fit (Holland)",
  intro:"Rate how much each preference describes you (0–10). The selector suggests the Holland personality type and congruent jobs.",
  criteria:[["I like working with tools and machines",5],["I like analysing and solving problems",5],["I like helping and developing others",5],["I like rules, order and accuracy",5],["I like persuading and leading people",5],["I like creative, unstructured work",5]],
  options:[
   ["Realistic — engineer, technician, farmer",[5,2,1,2,1,1],"Practical, physical activities requiring skill and coordination."],
   ["Investigative — analyst, researcher, economist",[2,5,1,2,1,2],"Thinking, organizing and understanding."],
   ["Social — teacher, counsellor, HR officer",[1,2,5,1,3,2],"Helping and developing others."],
   ["Conventional — accountant, banker, auditor",[1,3,1,5,1,1],"Rule-regulated, orderly activities."],
   ["Enterprising — manager, entrepreneur, sales",[1,2,3,2,5,2],"Verbal activities to influence others."],
   ["Artistic — designer, writer, marketer",[1,2,2,1,2,5],"Ambiguous, unsystematic, creative expression."]
  ]},
 quiz:{q:[
  ["Any incompatibility between two or more attitudes or between behaviour and attitudes is…",["Job satisfaction","Cognitive dissonance","Halo effect","Locus of control"],1,"Cognitive dissonance."],
  ["Which Big Five trait is most consistently related to job performance?",["Extraversion","Openness","Conscientiousness","Agreeableness"],2,"Conscientiousness."],
  ["Taking credit for success and blaming failure on external factors is…",["Fundamental attribution error","Self-serving bias","Stereotyping","Selective perception"],1,"Self-serving bias."],
  ["Forming a general impression of someone based on a single characteristic is…",["Halo effect","Assumed similarity","Stereotyping","Projection"],0,"Halo effect."],
  ["Holland's theory is about…",["Motivation","Personality–job fit","Leadership","Communication"],1,"Matching personality types to congruent jobs."]
 ]}
});

})();
