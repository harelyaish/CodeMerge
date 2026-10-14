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
 // notch demo: cycle the real captures
 var ns=document.getElementById("nshots"),nt=document.getElementById("ntabs");
 if(ns&&nt){
  var im=[].slice.call(ns.children),bt=[].slice.call(nt.children),ci=0,hold=false;
  function go(j){ci=j;im.forEach(function(x,k){x.classList.toggle("on",k===j)});bt.forEach(function(x,k){x.classList.toggle("on",k===j)})}
  bt.forEach(function(x,k){x.onclick=function(){hold=true;go(k)}});
  setInterval(function(){if(!hold&&!document.hidden)go((ci+1)%im.length)},3200);
 }
 // install tabs
 [].forEach.call(document.querySelectorAll("[data-tabs]"),function(g){
  var bs=g.querySelectorAll("button");bs.forEach(function(x){x.onclick=function(){bs.forEach(function(y){y.classList.toggle("on",y===x)});document.querySelectorAll(".ipane").forEach(function(p){p.classList.toggle("on",p.id===x.dataset.t)})}})});
 // copy
 [].forEach.call(document.querySelectorAll(".code button"),function(c){c.onclick=function(){var t=c.parentNode.querySelector("code").innerText;try{navigator.clipboard.writeText(t)}catch(e){}c.textContent="Copied";setTimeout(function(){c.textContent="Copy"},1400)}});
})();
