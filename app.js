/* App logic: navigation, auth, reports, map, updates */
const $=id=>document.getElementById(id);
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let user=load("ww_session",null), filter="all", mode="login", selected=null;

function toast(m){const t=$("toast");t.textContent=m;t.classList.add("on");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),2600)}
function go(v){document.querySelectorAll(".view").forEach(e=>e.classList.toggle("on",e.id==="v-"+v));
  document.querySelectorAll(".links button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));
  $("links").classList.remove("open");window.scrollTo(0,0);
  if(v==="report")renderReport();if(v==="map")renderMap();if(v==="updates")renderAnns()}
document.querySelectorAll(".links button").forEach(b=>b.onclick=()=>go(b.dataset.v));

/* auth */
function renderAuth(){$("auth").innerHTML=user
  ?`<span>Hi, <b>${esc(user.name.split(" ")[0])}</b></span><button class="btn sm" onclick="logout()">Log out</button>`
  :`<button class="txt" onclick="openModal('login')">Login</button><button class="btn sm" onclick="openModal('signup')">Sign Up</button>`}
function openModal(m){mode=m;const s=m==="signup";$("mtitle").textContent=s?"Create your account":"Log in";
  $("namebox").style.display=s?"block":"none";$("asubmit").textContent=s?"Sign up":"Log in";$("aerr").textContent="";
  $("aswitch").innerHTML=s?`Already have an account? <button class="txt" style="color:var(--blue)" onclick="openModal('login')">Log in</button>`:`New here? <button class="txt" style="color:var(--blue)" onclick="openModal('signup')">Create an account</button>`;
  $("modal").classList.add("on");setTimeout(()=>$(s?"aname":"aemail").focus(),50)}
function closeModal(){$("modal").classList.remove("on")}
function doAuth(e){e.preventDefault();const email=$("aemail").value.trim().toLowerCase(),pass=$("apass").value,users=load("ww_users",[]);
  if(mode==="signup"){const name=$("aname").value.trim();
    if(!name)return $("aerr").textContent="Enter your full name.";
    if(users.some(u=>u.email===email))return $("aerr").textContent="That email is already registered. Log in instead.";
    users.push({name,email,pass});save("ww_users",users);user={name,email}}
  else{const u=users.find(u=>u.email===email&&u.pass===pass);
    if(!u)return $("aerr").textContent="Email or password is incorrect.";user={name:u.name,email}}
  save("ww_session",user);closeModal();e.target.reset();renderAuth();renderReport();toast("Welcome, "+user.name.split(" ")[0]+"!")}
function logout(){user=null;localStorage.removeItem("ww_session");renderAuth();renderReport();toast("Logged out")}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* reports */
const reports=()=>load("ww_reports",[]);
$("rbrgy").innerHTML=Object.keys(BRGY).map(b=>`<option>${b}</option>`).join("");
function renderReport(){$("gate").style.display=user?"none":"block";
  [...$("rform").elements].forEach(el=>el.disabled=!user);
  const mine=reports().filter(r=>user&&r.by===user.email).reverse();
  $("myreps").innerHTML=!user?`<p class="sub" style="margin-top:8px">Log in to see your reports.</p>`:mine.length?mine.map(r=>`<div class="rep"><span class="dot" style="background:${TYPES[r.type].c};margin-top:7px"></span><div><b>${TYPES[r.type].l}</b><br><small>${esc(r.brgy)} · ${esc(r.desc)}</small></div><span class="tag">${r.status}</span></div>`).join(""):`<p class="sub" style="margin-top:8px">You haven't reported anything yet.</p>`}
function submitReport(e){e.preventDefault();if(!user)return openModal("login");
  const list=reports();list.push({id:Date.now(),type:$("rtype").value,brgy:$("rbrgy").value,desc:$("rdesc").value.trim(),when:"Just now",by:user.email,status:"Pending review",j:[Math.random()*50-25,Math.random()*40-20]});
  save("ww_reports",list);$("rform").reset();renderReport();toast("Report submitted. It now shows on the map.")}

/* map */
function allPins(){return SEED.map(s=>({...s,j:[(s.id*17)%40-20,(s.id*11)%30-15]})).concat(reports())}
function renderMap(){
  $("chips").innerHTML=[["all","All"],...Object.entries(TYPES).map(([k,v])=>[k,v.l])].map(([k,l])=>`<button class="chip ${filter===k?"on":""}" onclick="filter='${k}';renderMap()">${l}</button>`).join("");
  let s=`<rect width="600" height="420" fill="#e8efe4"/><path d="M0 300C120 260 180 340 300 300S480 230 600 270V420H0z" fill="#b9d8f3"/><path d="M0 150C100 130 200 190 300 160S500 100 600 130" stroke="#fff" stroke-width="10" fill="none"/><path d="M220 0V420M0 210H600" stroke="#fff" stroke-width="6"/>`;
  for(const [n,[x,y]] of Object.entries(BRGY))s+=`<text x="${x}" y="${y+38}" text-anchor="middle" font-size="12" fill="#5d6b85" font-weight="600">${n}</text>`;
  allPins().filter(p=>filter==="all"||p.type===filter).forEach(p=>{const [bx,by]=BRGY[p.brgy],x=bx+p.j[0],y=by+p.j[1];
    s+=`<g class="pin" tabindex="0" role="button" aria-label="${TYPES[p.type].l} in ${p.brgy}" onclick="showPin(${p.id})" onkeydown="if(event.key==='Enter')showPin(${p.id})"><path d="M${x} ${y}c-10-12-14-18-14-24a14 14 0 0 1 28 0c0 6-4 12-14 24z" fill="${TYPES[p.type].c}" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y-24}" r="5" fill="#fff"/></g>`});
  $("map").innerHTML=s;if(selected)showPin(selected)}
function showPin(id){selected=id;const p=allPins().find(x=>x.id===id);if(!p)return;
  $("pininfo").innerHTML=`<h3 style="color:var(--navy)">${TYPES[p.type].l}</h3><p><span class="dot" style="background:${TYPES[p.type].c}"></span>${esc(p.brgy)}</p><p style="margin:12px 0">${esc(p.desc)}</p><small style="color:var(--mute)">${p.when}${p.status?" · "+p.status:""}</small>`}

/* updates */
function renderAnns(){$("anns").innerHTML=ANNS.map(a=>`<div class="card ann ${a.c}"><small>${a.d}</small><h3>${a.t}</h3><p>${a.b}</p></div>`).join("")}

renderAuth();renderReport();
