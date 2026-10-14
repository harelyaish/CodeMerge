(function(){
 var r=document.documentElement,k="cm-theme";
 try{var s=localStorage.getItem(k);if(s)r.setAttribute("data-theme",s)}catch(e){}
 var b=document.getElementById("theme");
 function paint(){var d=r.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");if(b)b.textContent=d==="dark"?"☀︎":"☾"}
 if(b){b.onclick=function(){var d=r.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");var n=d==="dark"?"light":"dark";r.setAttribute("data-theme",n);try{localStorage.setItem(k,n)}catch(e){}paint()}}
 paint();
 // reveal on scroll
 var els=[].slice.call(document.querySelectorAll(".reveal"));
 if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add("in")});
 // notch demo: a clickable dock over the real captures
 try{ var ns=document.getElementById("nshots"),nl=document.getElementById("nlabel");
 if(ns){
  var im=[].slice.call(ns.querySelectorAll("img")),bt=[].slice.call(ns.querySelectorAll(".dock button")),ci=0,hold=false;
  function go(j){ci=j;im.forEach(function(x,k){x.classList.toggle("on",k===j)});if(nl)nl.textContent=bt[j].getAttribute("aria-label")}
  bt.forEach(function(x,k){x.addEventListener("click",function(){hold=true;go(k)});x.addEventListener("mouseenter",function(){hold=true})});
  ns.addEventListener("keydown",function(e){if(e.key==="ArrowRight")go((ci+1)%im.length);if(e.key==="ArrowLeft")go((ci+im.length-1)%im.length)});
  setInterval(function(){if(!hold&&!document.hidden)go((ci+1)%im.length)},3400);
 }
 }catch(e){}
 // settings viewer
 try{
 var sv=document.getElementById("sv"),sw=document.getElementById("setwin");
 if(sv&&sw)[].forEach.call(sv.children,function(x){x.onclick=function(){[].forEach.call(sv.children,function(y){y.classList.toggle("on",y===x)});[].forEach.call(sw.children,function(i){i.classList.toggle("on",i.dataset.s===x.dataset.s)})}});
 }catch(e){}
 // the light/dark switch in the menu-bar picture flips the window picture
 var mt=document.getElementById("mtheme");
 if(mt)mt.onclick=function(){var w=document.getElementById("bw");if(w)w.classList.toggle("light")};
 // install tabs
 [].forEach.call(document.querySelectorAll("[data-tabs]"),function(g){
  var bs=g.querySelectorAll("button");bs.forEach(function(x){x.onclick=function(){bs.forEach(function(y){y.classList.toggle("on",y===x)});document.querySelectorAll(".ipane").forEach(function(p){p.classList.toggle("on",p.id===x.dataset.t)})}})});
 // copy
 [].forEach.call(document.querySelectorAll(".code button"),function(c){c.onclick=function(){var t=c.parentNode.querySelector("code").innerText;try{navigator.clipboard.writeText(t)}catch(e){}c.textContent="Copied";setTimeout(function(){c.textContent="Copy"},1400)}});

 var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
 // headline words
 var h=document.querySelector(".hero h1");
 if(h&&!rm){var k=0;(function split(n){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(t))}else{var s=document.createElement("span");s.className="w";s.style.animationDelay=(.15+k++*.09)+"s";s.textContent=t;f.appendChild(s)}});n.replaceChild(f,c)}else if(c.nodeType===1&&!c.classList.contains("w")){split(c)}})})(h)}
 // scroll progress + nav shadow
 var pg=document.getElementById("prog"),nv=document.querySelector("nav"),tk=false;
 function onS(){var d=document.documentElement,m=d.scrollHeight-innerHeight;if(pg)pg.style.transform="scaleX("+(m>0?d.scrollTop/m:0)+")";if(nv)nv.classList.toggle("sc",d.scrollTop>10);tk=false}
 addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();
 // card spotlight
 [].forEach.call(document.querySelectorAll(".card"),function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});
 // 3D tilt on pictures
 if(!rm&&matchMedia("(hover:hover)").matches)[].forEach.call(document.querySelectorAll(".frame,.way-view"),function(f){
  f.addEventListener("pointermove",function(e){var r=f.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;f.classList.add("tilt");f.style.transform="perspective(900px) rotateY("+(x*7)+"deg) rotateX("+(-y*7)+"deg) scale(1.015)"});
  f.addEventListener("pointerleave",function(){f.classList.remove("tilt");f.style.transform=""})});
 // count-up numbers
 var cs=[].slice.call(document.querySelectorAll("[data-count]"));
 if(cs.length&&"IntersectionObserver" in window&&!rm){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,to=+el.dataset.count,t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});cs.forEach(function(e){e.textContent="0";co.observe(e)})}

 // second pass: story, cursor glow, floating chips, magnetic buttons
 try{
  var sp=[].slice.call(document.querySelectorAll(".step")),si=[].slice.call(document.querySelectorAll(".story-stage img")),sd=[].slice.call(document.querySelectorAll("#sdots i"));
  function pick(i){sp.forEach(function(s,k){s.classList.toggle("on",k===i)});si.forEach(function(s,k){s.classList.toggle("on",k===i)});sd.forEach(function(s,k){s.classList.toggle("on",k===i)})}
  if(sp.length){pick(0);if("IntersectionObserver" in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)pick(+e.target.dataset.i)})},{rootMargin:"-45% 0px -45% 0px"});sp.forEach(function(s){so.observe(s)})}}
 }catch(e){}
 try{
  var hero=document.querySelector(".hero");
  if(hero&&matchMedia("(hover:hover)").matches){
   hero.addEventListener("pointermove",function(e){var r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;hero.style.setProperty("--gx",x+"px");hero.style.setProperty("--gy",y+"px");
    if(!rm){var px=(x/r.width-.5),py=(y/r.height-.5);[].forEach.call(hero.querySelectorAll(".chips span"),function(c,k){var d=(k%2?-1:1)*(10+k*4);c.style.translate=(px*d)+"px "+(py*d)+"px"})}});
   if(!rm)[].forEach.call(document.querySelectorAll(".btn:not(.ghost)"),function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.12)+"px "+((e.clientY-r.top-r.height/2)*.2)+"px"});b.addEventListener("pointerleave",function(){b.style.translate=""})})
  }
 }catch(e){}
})();
