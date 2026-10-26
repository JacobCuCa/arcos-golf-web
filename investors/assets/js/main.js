(function(){
  var nav=document.querySelector('.nav');
  function onScroll(){ if(window.scrollY>window.innerHeight*0.6) nav.classList.add('solid'); else nav.classList.remove('solid'); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  var burger=document.querySelector('.burger'), menu=document.querySelector('.menu');
  if(burger){burger.addEventListener('click',function(){menu.classList.toggle('open')});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open')})});}
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el)});
  } else { els.forEach(function(el){el.classList.add('in')}); }
  // film lightbox
  var lb=document.querySelector('.lb'), lv=lb&&lb.querySelector('video');
  document.querySelectorAll('[data-film]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();lb.classList.add('open');lv.currentTime=0;lv.play()})});
  if(lb){lb.addEventListener('click',function(e){if(e.target===lb||e.target.tagName==='BUTTON'){lv.pause();lb.classList.remove('open')}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){lv.pause();lb.classList.remove('open')}});}
  // map dots -> sections
  document.querySelectorAll('.mapbox [data-go]').forEach(function(g){g.addEventListener('click',function(){var t=document.getElementById(g.getAttribute('data-go'));if(t)t.scrollIntoView({behavior:'smooth'})})});
})();
