// Shared helpers + demo "database" (browser localStorage). Replace with API calls to Express/MongoDB later.
const K={u:'ss_users',i:'ss_items',r:'ss_reqs',p:'ss_reports'};
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
if(!localStorage.getItem(K.u)){
 save(K.u,[
  {email:'yourname@gmail.com',pw:'YourPass@123',name:'Your Name',role:'admin',status:'active'},
  {email:'donor1@gmail.com',pw:'Donor@123',name:'Asha',role:'donor',status:'active'},
  {email:'receiver1@gmail.com',pw:'Recv@123',name:'Hope NGO',role:'receiver',status:'active'}]);
 save(K.i,[
  {id:1,owner:'donor1@gmail.com',cat:'Books',title:'School textbooks',qty:3,loc:'Indiranagar',desc:'Class 8 set',status:'Available'},
  {id:2,owner:'donor1@gmail.com',cat:'Clothes',title:'Winter clothes',qty:5,loc:'Whitefield',desc:'Washed, good condition',status:'Available'}]);
 save(K.r,[]);save(K.p,[]);
}
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(t){const e=$('#toast');e.textContent=t;e.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display='none',3200)}
const HOME={donor:'donor.html',receiver:'receiver.html',admin:'admin.html'};
// Route guard: only an active user with the right role may open a dashboard
function guard(role){
 const u=load(K.u,[]).find(x=>x.email===sessionStorage.getItem('ss_me'));
 if(!u||u.role!==role||u.status!=='active'){location.href='index.html';throw 0}
 $('#hdr').innerHTML=`<b>SafeShare</b><span>${esc(role)} · ${esc(u.name)} · <button onclick="logout()">Log out</button></span>`;
 return u}
function logout(){sessionStorage.removeItem('ss_me');location.href='index.html'}
// URL filter: blocks short links, plain http, IP addresses and risky endings
function badLink(t){
 const m=t.match(/(https?:\/\/\S+|www\.\S+|\b[\w-]+\.(?:ly|co|gl|xyz|top|click|zip)\/\S*)/gi)||[];
 return m.find(u=>/^http:\/\//i.test(u)||/bit\.ly|tinyurl|t\.co|goo\.gl|\.xyz|\.top|\.click|\.zip|\d+\.\d+\.\d+\.\d+/i.test(u))||null}
const stat=(n,l)=>`<div class="card"><b>${n}</b><span>${l}</span></div>`;
