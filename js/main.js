/* Fitur bersama: navbar, tema, reveal, counter, tilt, form WhatsApp */
(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var nav=$('#nav');
function sc(){nav.classList.toggle('s',scrollY>20)}sc();addEventListener('scroll',sc,{passive:true});
$('#mb').onclick=function(){$('#nl').classList.toggle('o')};
$$('#nl a').forEach(function(a){a.addEventListener('click',function(){$('#nl').classList.remove('o')})});
// theme
var root=document.documentElement;
$('#th').onclick=function(){
var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
root.dataset.theme=dark?'light':'dark';};
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.15});
$$('.rv,.sp').forEach(function(el){io.observe(el)});
// counters
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);
var t=+e.target.dataset.n,s=e.target.dataset.s,st=performance.now();
(function f(n){var p=Math.min((n-st)/1400,1);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)})},{threshold:.6});
$$('[data-n]').forEach(function(el){co.observe(el)});
// active link
var ids=['beranda','tentang','layanan','portofolio','kontak'];
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$('#nl a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
ids.forEach(function(i){var el=document.getElementById(i);if(el)so.observe(el)});
// tilt
if(matchMedia('(hover:hover)').matches){
$$('.sk').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateY('+x*8+'deg) rotateX('+-y*8+'deg) translateY(-6px)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});
var v=$('#vis'),p=$('#phone');if(v&&p){
v.addEventListener('pointermove',function(e){var r=v.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform='rotate('+(3+x*6)+'deg) translate('+x*12+'px,'+y*12+'px)'});
v.addEventListener('pointerleave',function(){p.style.transform=''});}}
// form -> WhatsApp (ganti nomor di bawah)
if($('#fm'))$('#fm').addEventListener('submit',function(e){e.preventDefault();var f=e.target,m='Halo Temu Pasar Digital, saya '+f.n.value+' dari usaha '+f.u.value+'. Saya tertarik dengan layanan: '+f.s.value+'. '+f.p.value;
window.open('https://wa.me/6281215127922?text='+encodeURIComponent(m),'_blank')});

})();
