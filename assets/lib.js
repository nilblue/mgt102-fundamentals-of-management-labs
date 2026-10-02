/* MGT102 Fundamentals of Management — Interactive Worksheets — shared library
   Plain JS, no dependencies. Each lecture page loads this file plus its week-block content file,
   then calls Lab.worksheet(n). Every worksheet has five tabs:
   What-if calculator · Sorting exercise · Dilemma scenario · Selector · Concept check.
   Note: rich-text strings passed as `html` are authored teaching content bundled in this repo (never user input). */
(function(){
const COURSE = {code:'MGT102', title:'Fundamentals of Management', programme:'BS(BA) / BS(BAF) · Semester 1', text:'Robbins & Coulter, Management (16th ed.)'};
const LECTURES = [
 {n:1,w:1,ch:'Ch.1',topic:"Management and Organizations: Why Managers Are Important, Who/Where Managers Work, What They Do",app:"Efficiency vs Effectiveness Worksheet",desc:"Measure a manager's efficiency and effectiveness, sort managers by level, and decide what makes someone a manager."},
 {n:2,w:1,ch:'Ch.1',topic:"Management Functions, Roles, Skills, the Changing Managerial Job, and Management History",app:"Functions, Roles & Skills Worksheet",desc:"Run Taylor's productivity numbers, sort Mintzberg's roles, and match the skill mix to the management level."},
 {n:3,w:2,ch:'Ch.2',topic:"Understanding Management's Context: Omnipotent vs. Symbolic View, the External Environment",app:"Environmental Uncertainty Worksheet",desc:"Place an industry on Duncan's change × complexity grid, sort environmental forces, and weigh stakeholder claims."},
 {n:4,w:2,ch:'Ch.2',topic:"Organizational Culture: Constraints, Challenges, Current Issues",app:"Organizational Culture Worksheet",desc:"Score culture strength, sort how culture is learned, and choose a culture that fits the strategy."},
 {n:5,w:3,ch:'Ch.3',topic:"Managing in a Global Environment: Global Perspective, Trade Mechanisms",app:"Global Trade Worksheet",desc:"See how tariffs and the rupee exchange rate change an export price, sort trade blocs, and spot parochialism."},
 {n:6,w:3,ch:'Ch.3',topic:"Doing Business Globally; Managing in a Global Environment (continued)",app:"Going Global Worksheet",desc:"Measure cultural distance, sort ways of going global, and pick an entry mode for a Pakistani firm."},
 {n:7,w:4,ch:'Ch.4',topic:"Managing Diversity: Workplace Diversity, the Changing Workplace, Types of Diversity",app:"Workplace Diversity Worksheet",desc:"Compute a team's diversity index, sort surface- vs deep-level diversity, and handle a hiring dilemma."},
 {n:8,w:4,ch:'Ch.4',topic:"Challenges in Managing Diversity and Workplace Diversity Initiatives",app:"Diversity Initiatives Worksheet",desc:"Model the leaky pipeline to the top, sort diversity challenges, and choose an initiative that fits."},
 {n:9,w:5,ch:'Ch.5',topic:"Managing Social Responsibility and Ethics: Green Management, Ethical Behavior",app:"Social Responsibility & Green Management Worksheet",desc:"Check the payback of a green investment, sort the four views of social responsibility, and face a CSR dilemma."},
 {n:10,w:5,ch:'Ch.5',topic:"Encouraging Ethical Behavior; Social Responsibility and Ethics Issues Today",app:"Encouraging Ethics Worksheet",desc:"Weigh the expected cost of misconduct, sort ethics-building practices, and decide a whistle-blowing case."},
 {n:11,w:6,ch:'Ch.6',topic:"Managing Change and Innovation: the Change Process, Resistance to Change",app:"Force-Field Change Worksheet",desc:"Balance driving and restraining forces (Lewin), sort reasons for resistance, and pick a technique to reduce it."},
 {n:12,w:6,ch:'Ch.6',topic:"Contemporary Issues in Managing Change; Stimulating Innovation",app:"Innovation Funnel Worksheet",desc:"Run ideas through an innovation funnel, sort structural, cultural and HR variables, and manage employee stress."},
 {n:13,w:7,ch:'Ch.7',topic:"Managers as Decision Makers: the Decision-Making Process",app:"Decision-Making Process Worksheet",desc:"Find when to stop searching (satisficing), put the eight steps in order, and weigh decision criteria."},
 {n:14,w:7,ch:'Ch.7',topic:"Decision-Making Conditions, Styles, Biases, and Errors",app:"Decisions Under Risk Worksheet",desc:"Compare expected values under risk, spot the decision bias in each case, and choose a decision style."},
 {n:15,w:8,ch:'Ch.8',topic:"Foundations of Planning: What/Why of Planning, Goals and Plans",app:"Goals & Plans Worksheet",desc:"Turn a target into the growth rate it needs, sort types of plans, and set goals that are SMART."},
 {n:16,w:8,ch:'Ch.8',topic:"Setting Goals and Planning Tools and Techniques",app:"Planning Tools Worksheet",desc:"Run a break-even analysis, sort planning tools, and pick the right technique for the situation."},
 {n:17,w:9,ch:'Ch.9',topic:"Strategic Management: the Strategic Management Process",app:"SWOT & Strategy Process Worksheet",desc:"Score a SWOT to find the strategic posture, order the six steps, and decide a strategy for a local brand."},
 {n:18,w:9,ch:'Ch.9',topic:"Corporate and Competitive Strategies; Current Strategic Management Issues",app:"Corporate & Competitive Strategy Worksheet",desc:"Place businesses on the BCG matrix, sort growth/stability/renewal strategies, and choose a Porter strategy."},
 {n:19,w:10,ch:'Ch.10',topic:"Basic Organizational Design: Designing Organizational Structure",app:"Span of Control Worksheet",desc:"See how span of control changes levels and managers, sort the six design elements, and pick mechanistic or organic."},
 {n:20,w:10,ch:'Ch.11',topic:"Adaptive Organizational Design: Team, Matrix, and Boundaryless Structures",app:"Adaptive Structures Worksheet",desc:"Count communication links as teams grow, sort contemporary designs, and choose a structure for a project."},
 {n:21,w:11,ch:'Ch.12',topic:"Managing Human Resources: HRM Process, Selecting Competent Employees",app:"Selection Decisions Worksheet",desc:"Test how a selection device's validity changes hiring outcomes, sort the HRM process, and pick a selection tool."},
 {n:22,w:11,ch:'Ch.12',topic:"Retaining Employees, Contemporary HR Issues; Managing Your Career",app:"Employee Retention Worksheet",desc:"Count the cost of turnover, sort pay and benefit decisions, and handle a downsizing dilemma."},
 {n:23,w:12,ch:'Ch.13',topic:"Managing Teams: Groups vs. Teams, Group/Team Development",app:"Team Size & Development Worksheet",desc:"See social loafing as teams grow, put the five stages in order, and choose the right type of team."},
 {n:24,w:12,ch:'Ch.14',topic:"Understanding Individual Behavior: Attitudes, Personality, Perception",app:"Individual Behavior Worksheet",desc:"Gauge cognitive-dissonance pressure, sort Big Five traits and attribution errors, and match personality to job."},
 {n:25,w:13,ch:'Ch.15',topic:"Managers and Communication: Interpersonal and Organizational Communication",app:"Communication Chain Worksheet",desc:"Watch a message lose accuracy down a chain, sort communication barriers, and choose the right channel."},
 {n:26,w:13,ch:'Ch.15',topic:"Information Technology and Communication Issues in Today's Organizations",app:"Digital Communication Worksheet",desc:"Count the hours lost to information overload, sort communication issues, and set a channel policy."},
 {n:27,w:14,ch:'Ch.16',topic:"Motivating Employees: Early and Contemporary Theories of Motivation",app:"Job Design & Motivation Worksheet",desc:"Compute a job's Motivating Potential Score, sort hygiene vs motivator factors, and redesign a job."},
 {n:28,w:14,ch:'Ch.16',topic:"Current Issues in Motivation; Integrating Contemporary Motivation Theories",app:"Expectancy & Equity Worksheet",desc:"Apply expectancy theory (E×I×V) and equity theory, sort current motivation issues, and choose a reward."},
 {n:29,w:15,ch:'Ch.17',topic:"Managers as Leaders: Early Leadership Theories and Contingency Theories",app:"Contingency Leadership Worksheet",desc:"Use Fiedler's model to read situational control, sort leadership theories, and pick a Hersey-Blanchard style."},
 {n:30,w:15,ch:'Ch.17',topic:"Contemporary Views on Leadership; 21st-Century Leadership Issues",app:"Trust & Contemporary Leadership Worksheet",desc:"Build a trust profile, sort transactional vs transformational behaviours, and lead a virtual team."},
 {n:31,w:16,ch:'Ch.18',topic:"Introduction to Controlling: the Control Process, Tools for Measuring Performance",app:"Control Process Worksheet",desc:"Compare performance with a standard and acceptable range, sort feedforward/concurrent/feedback control, and act."},
 {n:32,w:16,ch:'Ch.19 + App.',topic:"Managing Operations (Value Chain); Appendix: Managing Entrepreneurial Ventures",app:"Productivity & Value Chain Worksheet",desc:"Measure productivity, sort value-chain activities, and decide how an entrepreneurial venture should grow."}
];
const WEEKS = {1:"Management and Organizations",2:"Management's Context & Culture",3:"Managing in a Global Environment",4:"Managing Diversity",5:"Social Responsibility & Ethics",6:"Managing Change & Innovation",7:"Managers as Decision Makers",8:"Foundations of Planning",9:"Strategic Management",10:"Organizational Design",11:"Managing Human Resources",12:"Teams & Individual Behavior",13:"Managers & Communication",14:"Motivating Employees",15:"Managers as Leaders",16:"Controlling & Operations"};
const CLO = {1:"CLO1",2:"CLO1",3:"CLO4",4:"CLO4",5:"CLO4",6:"CLO4",7:"CLO4",8:"CLO4",9:"CLO4",10:"CLO4",11:"CLO2",12:"CLO2",13:"CLO3",14:"CLO3",15:"CLO2",16:"CLO2",17:"CLO2",18:"CLO2",19:"CLO5",20:"CLO5",21:"CLO5",22:"CLO5",23:"CLO5",24:"CLO2",25:"CLO2",26:"CLO2",27:"CLO2",28:"CLO2",29:"CLO2",30:"CLO2",31:"CLO2",32:"CLO2"};
const PART = n => n<=8?1:n<=16?2:n<=24?3:4;
const clear = e => { e.replaceChildren(); return e; };
const markup = str => document.createRange().createContextualFragment(str); // authored content only
function h(tag, attrs, ...kids){
  const e = document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v = attrs[k];
    if(v==null || v===false) continue;
    if(k==='class') e.className=v;
    else if(k==='html') e.append(markup(v));
    else if(k==='style' && typeof v==='object') Object.assign(e.style,v);
    else if(k.startsWith('on')) e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);
  }
  for(const c of kids.flat()){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(String(c))); }
  return e;
}
const pad = n => String(n).padStart(2,'0');
const fmt = (n,d=0) => (isFinite(n)? Number(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d}) : '—');
const money = (n,d=0,cur='$') => (n<0?'-':'')+cur+fmt(Math.abs(n),d);
const pct = (n,d=0) => fmt(n*100,d)+'%';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };

function page(cfg){
  const L = LECTURES.find(x=>x.n===cfg.n);
  document.title = `L${pad(L.n)} · ${L.app} | MGT102`;
  const root = clear(document.body);
  const prev = LECTURES.find(x=>x.n===L.n-1), next = LECTURES.find(x=>x.n===L.n+1);
  root.append(
    h('div',{class:'brandstrip'}),
    h('header',{class:'top'}, h('div',{class:'wrap'},
      brandBlock('../'),
      h('div',{class:'navlinks'},
        prev && h('a',{class:'btn',href:`L${pad(prev.n)}.html`},'← L'+prev.n),
        h('a',{class:'btn',href:'../index.html'},'All worksheets'),
        next && h('a',{class:'btn',href:`L${pad(next.n)}.html`},'L'+next.n+' →')
      ))),
    h('main',{class:'wrap'},
      h('section',{class:'hero'},
        h('div',{class:'kicker'},`Week ${L.w} · Lecture ${L.n} · ${WEEKS[L.w]}`),
        h('h1',null,L.app),
        h('p',{class:'lead'},L.topic+' — '+L.desc),
        h('div',{class:'tags'}, h('span',{class:'tag'},'Interactive worksheet'), h('span',{class:'tag'},L.ch), h('span',{class:'tag'},CLO[L.n]))
      ),
      cfg.primer && h('section',{class:'card primer'},
        h('h2',null,'Concept primer'),
        h('ul',null, cfg.primer.map(p=>h('li',{html:p})))
      ),
      Lab.app = h('section',{id:'app'}),
      cfg.discussion && h('section',{class:'card discuss'},
        h('h2',null,'Discuss & reflect'),
        h('ol',null, cfg.discussion.map(p=>h('li',{html:p})))
      ),
      h('div',{class:'pager'},
        prev ? h('a',{class:'btn',href:`L${pad(prev.n)}.html`},'← '+prev.app) : h('span'),
        next ? h('a',{class:'btn',href:`L${pad(next.n)}.html`},next.app+' →') : h('span')
      ),
      h('p',{class:'small muted datanote'},'MGT102 Fundamentals of Management. '+DATA_NOTE)
    ),
    footerBlock('../')
  );
  return Lab.app;
}


const ORG = {uni:'COMSATS University Islamabad, Wah Campus', dept:'Management Sciences Department', credit:'Made by Abid Naeem'};
const DATA_NOTE='Figures in these worksheets are simplified or illustrative for teaching; verify real-world data before using it in assignments.';
function brandBlock(base){
  return h('a',{class:'brand',href:base+'index.html','aria-label':ORG.uni+' — MGT102 Worksheets home'},
    h('img',{src:base+'assets/cui-logo.png',alt:'COMSATS University Islamabad logo',width:52,height:52}),
    h('span',{class:'b1'},ORG.uni));
}
function footerBlock(base){
  return h('footer',null,h('div',{class:'wrap fbrand'},
    h('img',{src:base+'assets/cui-logo.png',alt:'',width:36,height:36}),
    h('span',null,h('b',null,ORG.dept+'.'),' '+ORG.credit+'.')));
}

function card(title, ...kids){ return h('div',{class:'card'}, title && h('h2',null,title), ...kids); }

function slider(o){ // {label,min,max,step,value,fmt,oninput,hint}
  const out = h('output');
  const inp = h('input',{type:'range',min:o.min,max:o.max,step:o.step||1,value:o.value,'aria-label':o.label});
  const f = o.fmt || (v=>v);
  const upd = ()=>{ out.textContent=f(+inp.value); o.oninput && o.oninput(+inp.value); };
  inp.addEventListener('input',upd);
  const wrap = h('div',{class:'ctl'}, h('label',null, h('span',null,o.label), out), inp, o.hint && h('div',{class:'small muted'},o.hint));
  wrap.input=inp; wrap.get=()=>+inp.value; wrap.set=v=>{inp.value=v;upd();};
  out.textContent=f(+o.value);
  return wrap;
}
function numInput(o){
  const inp=h('input',{type:'number',value:o.value,step:o.step||'any',min:o.min,'aria-label':o.label});
  inp.addEventListener('input',()=>o.oninput&&o.oninput(+inp.value));
  const w=h('div',{class:'ctl'},h('label',null,h('span',null,o.label)),inp);
  w.get=()=>+inp.value; w.input=inp; return w;
}
function selectBox(o){ // {label, options:[[v,t]], value, onchange}
  const sel=h('select',{'aria-label':o.label||'select'},o.options.map(([v,t])=>h('option',{value:v, selected: v==o.value?true:null},t)));
  sel.addEventListener('change',()=>o.onchange&&o.onchange(sel.value));
  const w=h('div',{class:'ctl'}, o.label && h('label',null,h('span',null,o.label)), sel); w.get=()=>sel.value; w.input=sel; return w;
}
function stat(label){ const v=h('div',{class:'v'},'—'); const e=h('div',{class:'stat'},h('div',{class:'l'},label),v); e.set=t=>{v.textContent=t;}; e.v=v; return e; }
function fb(kind,html){ return h('div',{class:'fb '+kind,html}); }
function cssVar(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
const SERIES=['--c1','--c2','--c3','--c4','--c5','--c6'];

/* ---------- Charts (SVG) ---------- */
const NS='http://www.w3.org/2000/svg';
function s(tag,attrs,...kids){ const e=document.createElementNS(NS,tag); for(const k in attrs||{}) e.setAttribute(k,attrs[k]); kids.flat().forEach(c=>c!=null&&e.append(c.nodeType?c:document.createTextNode(c))); return e; }
function bars(el, data, o={}){ // data [{label,value,color?}]
  clear(el);
  const W=o.width||Math.max(300,Math.min(el.clientWidth||600,720)), rowH=o.rowH||30, lw=Math.min(o.labelW||170,Math.round(W*0.42)), H=data.length*rowH+10;
  const fit=t=>{ const maxc=Math.floor((lw-12)/6.6); t=String(t); return t.length>maxc? t.slice(0,maxc-1)+'…' : t; };
  const max=o.max ?? Math.max(1e-9,...data.map(d=>d.value));
  const min=o.min ?? Math.min(0,...data.map(d=>d.value));
  const span=max-min||1, plotW=W-lw-80, x0=lw+(0-min)/span*plotW;
  const svg=s('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',style:`max-width:${W}px`,role:'img'});
  data.forEach((d,i)=>{
    const y=5+i*rowH, x=lw+(Math.min(0,d.value)-min)/span*plotW, w=Math.abs(d.value)/span*plotW;
    svg.append(s('text',{x:lw-8,y:y+rowH/2+4,'text-anchor':'end','font-size':13},s('title',null,d.label),fit(d.label)));
    svg.append(s('rect',{x,y:y+5,width:Math.max(w,1),height:rowH-10,rx:4,fill:cssVar(d.color||'--c1')}));
    svg.append(s('text',{x:(d.value<0?x-4:x+w+6),y:y+rowH/2+4,'font-size':12,'text-anchor':d.value<0?'end':'start',fill:cssVar('--muted')},o.fmt?o.fmt(d.value):fmt(d.value,1)));
  });
  if(min<0) svg.append(s('line',{x1:x0,x2:x0,y1:0,y2:H,stroke:cssVar('--muted')}));
  el.append(svg);
}
function radar(el, axes, series, o={}){ // axes [labels], series [{name, values, color}]
  clear(el);
  const W=o.size||420, c=W/2, R=W/2-80, max=o.max||10, n=axes.length;
  const svg=s('svg',{viewBox:`0 0 ${W} ${W}`,width:'100%',style:`max-width:${W+40}px;display:block;margin:auto`,role:'img'});
  const pt=(i,r)=>[c+r*Math.sin(2*Math.PI*i/n), c-r*Math.cos(2*Math.PI*i/n)];
  for(let k=1;k<=4;k++){ svg.append(s('polygon',{points:axes.map((_,i)=>pt(i,R*k/4).join(',')).join(' '),fill:'none',stroke:cssVar('--border')})); }
  axes.forEach((a,i)=>{ const [x,y]=pt(i,R); svg.append(s('line',{x1:c,y1:c,x2:x,y2:y,stroke:cssVar('--border')}));
    const [lx,ly]=pt(i,R+18); svg.append(s('text',{x:lx,y:ly+4,'text-anchor':Math.abs(lx-c)<5?'middle':(lx>c?'start':'end'),'font-size':12},a)); });
  series.forEach((sr,j)=>{ const col=cssVar(sr.color||SERIES[j%6]);
    svg.append(s('polygon',{points:sr.values.map((v,i)=>pt(i,R*clamp(v,0,max)/max).join(',')).join(' '),fill:col,'fill-opacity':.15,stroke:col,'stroke-width':2}));
    sr.values.forEach((v,i)=>{const [x,y]=pt(i,R*clamp(v,0,max)/max); svg.append(s('circle',{cx:x,cy:y,r:3.5,fill:col}));});
  });
  el.append(svg);
  if(series.length>1) el.append(legend(series));
}
function legend(series){ return h('div',{class:'row small',style:{justifyContent:'center',marginTop:'6px'}}, series.map((sr,j)=>h('span',{class:'row',style:{gap:'4px'}}, h('i',{style:{display:'inline-block',width:'12px',height:'12px',borderRadius:'3px',background:cssVar(sr.color||SERIES[j%6])}}), sr.name))); }
function line(el, series, o={}){ // series [{name, points:[[x,y]], color, dash}]
  clear(el);
  const W=o.width||640,H=o.height||300,m={l:56,r:16,t:14,b:40};
  const all=series.flatMap(q=>q.points);
  const xmin=o.xmin??Math.min(...all.map(p=>p[0])), xmax=o.xmax??Math.max(...all.map(p=>p[0]));
  const ymin=o.ymin??Math.min(0,...all.map(p=>p[1])), ymax=o.ymax??(Math.max(...all.map(p=>p[1]))*1.05||1);
  const X=x=>m.l+(x-xmin)/(xmax-xmin||1)*(W-m.l-m.r), Y=y=>H-m.b-(y-ymin)/(ymax-ymin||1)*(H-m.t-m.b);
  const svg=s('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',role:'img'});
  for(let k=0;k<=4;k++){ const yv=ymin+(ymax-ymin)*k/4; svg.append(s('line',{x1:m.l,x2:W-m.r,y1:Y(yv),y2:Y(yv),stroke:cssVar('--border'),'stroke-dasharray':k?'3 3':''}));
    svg.append(s('text',{x:m.l-6,y:Y(yv)+4,'text-anchor':'end','font-size':11,fill:cssVar('--muted')},o.yfmt?o.yfmt(yv):fmt(yv))); }
  const ticks=o.xticks||5; for(let k=0;k<=ticks;k++){ const xv=xmin+(xmax-xmin)*k/ticks; svg.append(s('text',{x:X(xv),y:H-m.b+16,'text-anchor':'middle','font-size':11,fill:cssVar('--muted')},o.xfmt?o.xfmt(xv):fmt(xv))); }
  if(o.xlabel) svg.append(s('text',{x:(W+m.l)/2,y:H-4,'text-anchor':'middle','font-size':12,fill:cssVar('--muted')},o.xlabel));
  series.forEach((sr,j)=>{ const col=cssVar(sr.color||SERIES[j%6]);
    svg.append(s('polyline',{points:sr.points.map(p=>X(p[0])+','+Y(p[1])).join(' '),fill:'none',stroke:col,'stroke-width':2.5,'stroke-linejoin':'round','stroke-dasharray':sr.dash||''}));
  });
  (o.marks||[]).forEach(mk=>{ svg.append(s('line',{x1:X(mk.x),x2:X(mk.x),y1:m.t,y2:H-m.b,stroke:cssVar('--accent2'),'stroke-dasharray':'4 3'})); svg.append(s('text',{x:X(mk.x)+4,y:m.t+12,'font-size':11,fill:cssVar('--accent2')},mk.label)); });
  el.append(svg); if(series.length>1) el.append(legend(series));
}

/* ---------- Engines ---------- */
function quiz(el, items, o={}){ // items [{q, options:[], answer:index, explain}]
  let i=0, score=0; const list=o.shuffle===false?items:shuffle(items);
  function render(){
    clear(el);
    if(i>=list.length){ el.append(h('h3',null,`Score: ${score} / ${list.length}`), fb(score/list.length>=.7?'good':'warn', score/list.length>=.7?'Well done — you have a solid grasp of this topic.':'Review the primer and try again.'), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>{i=0;score=0;render();}},'Try again')); return; }
    const it=list[i];
    el.append(h('div',{class:'row small muted'},`Question ${i+1} of ${list.length}`), h('div',{class:'progress',style:{margin:'6px 0 12px'}},h('i',{style:{width:(i/list.length*100)+'%'}})), h('h3',null,it.q));
    const box=h('div'); let done=false;
    it.options.forEach((op,k)=>{ const b=h('button',{class:'opt',onclick:()=>{ if(done) return; done=true;
      if(k===it.answer){score++; b.classList.add('right');} else { b.classList.add('wrong'); box.children[it.answer].classList.add('right'); }
      el.append(fb(k===it.answer?'good':'bad',(k===it.answer?'<b>Correct.</b> ':'<b>Not quite.</b> ')+(it.explain||'')), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>{i++;render();}}, i+1<list.length?'Next question':'See score'));
    }},op); box.append(b); });
    el.append(box);
  }
  render();
}
function classify(el, cfg){ // {bins:[names], items:[{text, bin, why}], prompt}
  let pick=null; const placed={};
  const pool=h('div'), binsEl=h('div',{class:'grid3',style:{marginTop:'12px'}}), out=h('div');
  const items=shuffle(cfg.items);
  function render(){
    clear(pool); clear(binsEl);
    pool.append(h('div',{class:'small muted'}, cfg.prompt || 'Click an item, then click the category it belongs to. Click a placed item to send it back.'));
    items.forEach((it,idx)=>{ if(placed[idx]==null) pool.append(h('button',{class:'chip'+(pick===idx?' sel':''),onclick:()=>{pick=idx;render();}},it.text)); });
    cfg.bins.forEach((b,bi)=>{ binsEl.append(h('div',{class:'bin',onclick:()=>{ if(pick==null) return; placed[pick]=bi; pick=null; render(); }},
      h('h3',null,b), items.map((it,idx)=>placed[idx]===bi? h('button',{class:'chip',title:'Click to return',onclick:(e)=>{e.stopPropagation(); delete placed[idx]; render();}},it.text):null))); });
  }
  const check=h('button',{class:'primary',style:{marginTop:'12px'},onclick:()=>{
    clear(out); let ok=0; const rows=[];
    items.forEach((it,idx)=>{ const good=placed[idx]===it.bin; if(good) ok++; rows.push(h('tr',null,h('td',null,it.text),h('td',null,placed[idx]==null?'—':cfg.bins[placed[idx]]),h('td',null,good?'✓':'✗ '+cfg.bins[it.bin]),h('td',{class:'small muted'},it.why||''))); });
    out.append(fb(ok===items.length?'good':ok/items.length>=.6?'warn':'bad',`<b>${ok} of ${items.length} correct.</b>`), h('div',{class:'tablewrap'},h('table',null,h('tr',null,h('th',null,'Item'),h('th',null,'Your answer'),h('th',null,'Correct'),h('th',null,'Why')),rows)));
  }},'Check answers');
  const reset=h('button',{style:{marginTop:'12px'},onclick:()=>{for(const k in placed) delete placed[k]; pick=null; clear(out); render();}},'Reset');
  el.append(pool,binsEl,h('div',{class:'row'},check,reset),out); render();
}
function sequence(el, cfg){ // {steps:[text in correct order], explain, prompt}
  let order=shuffle(cfg.steps.map((t,i)=>i)); if(order.every((v,i)=>v===i)) order.reverse();
  const ol=h('ol',{class:'seq'}), out=h('div');
  function render(marks){ clear(ol); order.forEach((si,pos)=>{ ol.append(h('li',{class:marks?(si===pos?'ok':'no'):''}, h('b',null,pos+1+'.'), h('span',null,cfg.steps[si]),
      h('button',{'aria-label':'Move up',onclick:()=>{ if(pos>0){[order[pos-1],order[pos]]=[order[pos],order[pos-1]]; clear(out); render();}}},'↑'),
      h('button',{'aria-label':'Move down',onclick:()=>{ if(pos<order.length-1){[order[pos+1],order[pos]]=[order[pos],order[pos+1]]; clear(out); render();}}},'↓'))); }); }
  el.append(h('div',{class:'small muted'},cfg.prompt||'Use the arrows to put the steps in the correct order.'), ol,
    h('div',{class:'row',style:{marginTop:'10px'}},
      h('button',{class:'primary',onclick:()=>{ render(true); const ok=order.filter((v,i)=>v===i).length; clear(out); out.append(fb(ok===order.length?'good':'warn',`<b>${ok} of ${order.length} in the right position.</b> `+(ok===order.length?(cfg.explain||''):'Green = correct position. Keep adjusting.'))); }},'Check order'),
      h('button',{onclick:()=>{order=cfg.steps.map((t,i)=>i); render(true); clear(out); out.append(fb('info','Correct order shown. '+(cfg.explain||'')));}},'Show answer')),
    out); render();
}
function scenarios(el, cfg){ // {start, meters:[{key,label,init}], nodes:{id:{title,text, choices:[{label, effects, result, tone, next}]}}, endText(state)}
  const state={}; cfg.meters.forEach(m=>state[m.key]=m.init);
  const meters=h('div',{class:'grid3'}), body=h('div',{style:{marginTop:'14px'}}), log=[];
  function drawMeters(){ clear(meters); cfg.meters.forEach(m=>{ const v=clamp(state[m.key],0,100); meters.append(h('div',{class:'stat'},h('div',{class:'l'},m.label),h('div',{class:'v'},fmt(v)),h('div',{class:'progress'},h('i',{style:{width:v+'%',background:cssVar(v<35?'--bad':v<65?'--warn':'--good')}})))); }); }
  function go(id){ drawMeters(); clear(body);
    if(!id){ body.append(h('h3',null,'Debrief'), fb('info',cfg.endText?cfg.endText(state):'Scenario complete.'), h('ol',null,log.map(l=>h('li',{class:'small',html:l}))), h('button',{class:'primary',onclick:()=>{cfg.meters.forEach(m=>state[m.key]=m.init); log.length=0; go(cfg.start);}},'Play again')); return; }
    const n=cfg.nodes[id];
    body.append(n.title && h('div',{class:'kicker'},n.title), h('p',{html:n.text}));
    n.choices.forEach(c=>body.append(h('button',{class:'opt',onclick:()=>{
      for(const k in c.effects||{}) state[k]=clamp(state[k]+c.effects[k],0,100);
      log.push(`<b>${n.title||''}</b> — ${c.label}`);
      drawMeters(); clear(body);
      body.append(n.title && h('div',{class:'kicker'},n.title), h('p',null,h('b',null,'You chose: '),c.label), fb(c.tone||'info',c.result), h('button',{class:'primary',style:{marginTop:'10px'},onclick:()=>go(c.next)},c.next?'Continue':'See debrief'));
    }},c.label)));
  }
  el.append(meters,body); go(cfg.start);
}
function weighted(el, cfg){ // {criteria:[{name,weight}], options:[{name, scores:[..]}], max, explain(name)}
  const wrap=h('div',{class:'grid2'}), res=h('div'), chart=h('div');
  let ready=false;
  const wEls=cfg.criteria.map(c=>slider({label:c.name,min:0,max:10,value:c.weight,oninput:()=>ready&&calc()}));
  function calc(){
    const ws=wEls.map(w=>w.get()), tot=ws.reduce((a,b)=>a+b,0)||1;
    const scored=cfg.options.map(o=>({label:o.name,value:o.scores.reduce((a,sc,i)=>a+sc*ws[i],0)/tot})).sort((a,b)=>b.value-a.value);
    scored.forEach((d,i)=>d.color=i===0?'--c3':'--c1');
    bars(chart,scored,{max:cfg.max||5,fmt:v=>fmt(v,2),labelW:cfg.labelW||190});
    clear(res); res.append(fb('good',`<b>Best fit: ${scored[0].label}</b> (weighted score ${fmt(scored[0].value,2)} / ${cfg.max||5}). `+(cfg.explain?cfg.explain(scored[0].label):'')));
  }
  wrap.append(h('div',null,h('h3',null,cfg.weightTitle||'How important is each criterion? (0–10)'),wEls), h('div',null,h('h3',null,'Weighted fit'),chart,res));
  el.append(wrap, h('details',{style:{marginTop:'12px'}},h('summary',null,'Show the scoring matrix (1 = poor fit, 5 = strong fit)'),h('div',{class:'tablewrap'},h('table',null,h('tr',null,h('th',null,'Option'),cfg.criteria.map(c=>h('th',{class:'num'},c.name))),cfg.options.map(o=>h('tr',null,h('td',null,o.name),o.scores.map(v=>h('td',{class:'num'},v))))))));
  ready=true; calc();
}
function tabs(el, defs){ // [{label, build(container)}]
  const bar=h('div',{class:'tabs',role:'tablist'}), body=h('div'); const built={};
  const panes=defs.map(()=>h('div'));
  defs.forEach((d,i)=>bar.append(h('button',{role:'tab',onclick:()=>show(i)},d.label)));
  function show(i){ [...bar.children].forEach((b,j)=>b.classList.toggle('on',i===j)); panes.forEach((p,j)=>p.style.display=i===j?'':'none'); if(!built[i]){built[i]=1; defs[i].build(panes[i]);} }
  body.append(...panes); el.append(bar,body); show(0);
}


/* ---------- Worksheet engines (MGT102) ---------- */
function calc(el, cfg){ // {title,intro,inputs:[{k,label,min,max,step,v,f,hint,type,options}], run(v)=>{stats,bars,barsOpt,fb:[tone,html]}}
  const vals={}; let ready=false;
  const left=h('div'), statsEl=h('div',{class:'grid3'}), chart=h('div',{style:{marginTop:'12px'}}), out=h('div');
  cfg.inputs.forEach(inp=>{
    vals[inp.k]=inp.v;
    if(inp.type==='select'){
      left.append(selectBox({label:inp.label,options:inp.options,value:inp.v,onchange:x=>{vals[inp.k]=isNaN(+x)?x:+x; ready&&run();}}));
    } else {
      left.append(slider({label:inp.label,min:inp.min,max:inp.max,step:inp.step||1,value:inp.v,fmt:inp.f,hint:inp.hint,oninput:x=>{vals[inp.k]=x; ready&&run();}}));
    }
  });
  function run(){
    const r=cfg.run(Object.assign({},vals))||{};
    clear(statsEl); (r.stats||[]).forEach(([l,t])=>{ const st=stat(l); st.set(t); statsEl.append(st); });
    clear(chart); if(r.bars && r.bars.length) bars(chart,r.bars,Object.assign({fmt:v=>fmt(v,1)},r.barsOpt||{}));
    clear(out); if(r.fb) out.append(fb(r.fb[0],r.fb[1]));
  }
  const c=card(cfg.title, cfg.intro && h('p',{class:'small muted',html:cfg.intro}), h('div',{class:'grid2'}, left, h('div',null,statsEl,chart,out)));
  el.append(c); ready=true; run();
}
function dilemma(el, cfg){ // {title,intro,meters:[[key,label]],steps:[{t,x,c:[[label,effects,result,tone]]}],lesson}
  const nodes={};
  cfg.steps.forEach((st,i)=>{ nodes['s'+i]={title:st.t,text:st.x,choices:st.c.map(([label,effects,result,tone])=>({label,effects,result,tone:tone||'info',next:i+1<cfg.steps.length?'s'+(i+1):null}))}; });
  const c=card(cfg.title, cfg.intro && h('p',{class:'small muted',html:cfg.intro})); el.append(c);
  scenarios(c,{start:'s0',meters:cfg.meters.map(([key,label])=>({key,label,init:50})),nodes,
    endText:st=>{ const parts=cfg.meters.map(([k,l])=>`${l}: <b>${fmt(st[k])}</b>`).join(' · ');
      const avg=cfg.meters.reduce((a,[k])=>a+st[k],0)/cfg.meters.length, low=Math.min(...cfg.meters.map(([k])=>st[k]));
      const verdict= low<35?'One of your scores fell into the danger zone — a good manager rarely sacrifices one stakeholder completely.':avg>=65?'A balanced, well-judged set of decisions.':'A workable outcome, but there were stronger options.';
      return parts+'<br>'+verdict+(cfg.lesson?'<br><b>Key lesson:</b> '+cfg.lesson:''); }});
}
function selector(el, cfg){ // {title,intro,criteria:[[name,w]],options:[[name,scores,explain]]}
  const c=card(cfg.title, cfg.intro && h('p',{class:'small muted',html:cfg.intro})); el.append(c);
  const ex={}; cfg.options.forEach(o=>ex[o[0]]=o[2]||'');
  weighted(c,{criteria:cfg.criteria.map(([name,weight])=>({name,weight})),options:cfg.options.map(([name,scores])=>({name,scores})),explain:n=>ex[n],labelW:cfg.labelW,weightTitle:cfg.weightTitle});
}
function sorter(el, cfg){ // {title,intro,bins,items:[[text,bin,why]]} or {order:[steps],explain}
  const c=card(cfg.title, cfg.intro && h('p',{class:'small muted',html:cfg.intro})); el.append(c);
  if(cfg.order) sequence(c,{steps:cfg.order,explain:cfg.explain,prompt:cfg.prompt});
  else classify(c,{bins:cfg.bins,items:cfg.items.map(([text,bin,why])=>({text,bin,why})),prompt:cfg.prompt});
  if(cfg.then){ const c2=card(cfg.then.title, cfg.then.intro && h('p',{class:'small muted',html:cfg.then.intro})); el.append(c2);
    if(cfg.then.order) sequence(c2,{steps:cfg.then.order,explain:cfg.then.explain}); else classify(c2,{bins:cfg.then.bins,items:cfg.then.items.map(([text,bin,why])=>({text,bin,why}))}); }
}
function check(el, cfg){ const c=card(cfg.title||'Concept check'); el.append(c); quiz(c,cfg.q.map(([q,options,answer,explain])=>({q,options,answer,explain}))); }

const W={};
function add(n,cfg){ W[n]=cfg; }
const TABS=[['calc','What-if calculator',calc],['sort','Sorting exercise',sorter],['dilemma','Dilemma scenario',dilemma],['select','Selector',selector],['quiz','Concept check',check]];
function worksheet(n){
  const cfg=W[n]; if(!cfg){ document.body.textContent='Worksheet content not found.'; return; }
  const app=page({n,primer:cfg.primer,discussion:cfg.discussion});
  tabs(app, TABS.filter(([k])=>cfg[k]).map(([k,label,fn],i)=>({label:`${i+1} · ${label}`, build:el=>fn(el,cfg[k])})));
}

window.Lab = {COURSE,ORG,brandBlock,footerBlock,LECTURES,WEEKS,CLO,PART,h,s,clear,markup,pad,fmt,money,pct,clamp,shuffle,page,card,slider,numInput,selectBox,stat,fb,cssVar,bars,radar,line,legend,quiz,classify,sequence,scenarios,weighted,tabs,calc,dilemma,selector,sorter,check,add,worksheet,W};
})();
