// ДАННЫЕ ТУРОВ
var TOURS = [
  { id:1, name:'Майорка: Велотур', location:'Майорка, Испания', difficulty:'Средний', diffBg:'#fffbeb', diffBorder:'#fee685', diffColor:'#bb4d00', dates:'5–12 окт 2026', duration:'7 дней', group:'8 чел.', price:'74 000 ₽', img:'images/majorka.jpg', desc:'Семь дней по легендарным дорогам Майорки — от горных перевалов Сьерра-де-Трамунтана до живописного побережья. Маршрут разработан совместно с профессиональными велогидами.' },
  { id:2, name:'Бали: Сёрф & SUP', location:'Бали, Индонезия', difficulty:'Лёгкий', diffBg:'#ecfdf5', diffBorder:'#a4f4cf', diffColor:'#007a55', dates:'15–22 авг 2026', duration:'7 дней', group:'10 чел.', price:'55 000 ₽', img:'images/bali.jpg', desc:'Неделя на лучших волнах Бали — обучение серфингу с профи-тренером, утренние SUP-сессии на рассвете и вечерние закаты над океаном.' },
  { id:3, name:'Доломиты: Трейлраннинг кемп', location:'Доломиты, Италия', difficulty:'Эксперт', diffBg:'#fef2f2', diffBorder:'#ffc9c9', diffColor:'#c10007', dates:'3–10 авг 2026', duration:'7 дней', group:'12 чел.', price:'92 000 ₽', img:'images/dolomit.jpg', desc:'Интенсивный тренировочный кемп среди доломитовых пиков — 5 тренировочных дней, разборы техники с профессиональными тренерами.' },
  { id:4, name:'Горные лыжи и сноуборд', location:'Альпы, Австрия', difficulty:'Средний', diffBg:'#fffbeb', diffBorder:'#fee685', diffColor:'#bb4d00', dates:'5–9 янв 2027', duration:'5 дней', group:'8 чел.', price:'85 000 ₽', img:'images/alpy_camp.jpg', desc:'Пять насыщенных дней на лучших склонах австрийских Альп — катание с профи-инструктором, неограниченные скипассы и уютный шале с видом на горы.' },
  { id:5, name:'Дайвинг на Мальдивах', location:'Мальдивы', difficulty:'Лёгкий', diffBg:'#ecfdf5', diffBorder:'#a4f4cf', diffColor:'#007a55', dates:'10–15 нояб 2026', duration:'6 дней', group:'6 чел.', price:'110 000 ₽', img:'images/maldiv.jpg', desc:'Погружения в кристально чистые воды Индийского океана, встречи с мантами и коралловыми рифами. Под руководством сертифицированных инструкторов PADI.' },
  { id:6, name:'Скалолазание на Калимносе', location:'Калимнос, Греция', difficulty:'Эксперт', diffBg:'#fef2f2', diffBorder:'#ffc9c9', diffColor:'#c10007', dates:'22 сент–1 окт 2026', duration:'10 дней', group:'8 чел.', price:'78 000 ₽', img:'images/calimnos.jpg', desc:'Десять дней на знаменитых скалах острова Калимнос — маршруты для всех уровней, тренировки с сертифицированными гидами IFMGA.' }
];

// TOAST
function showToast(msg) {
  var t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},3600);
}

// HEADER
function initHeader(){
  var h=document.getElementById('site-header');
  window.addEventListener('scroll',function(){h.classList.toggle('scrolled',window.scrollY>60);},{passive:true});
  document.querySelectorAll('[data-scroll]').forEach(function(el){
    el.addEventListener('click',function(){
      var t=document.querySelector(el.getAttribute('data-scroll'));
      if(t)t.scrollIntoView({behavior:'smooth'});
    });
  });
}

// HERO
function initHero(){
  var bgs=document.querySelectorAll('.hero-bg'),lines=document.querySelectorAll('.hero-title .line'),dots=document.querySelectorAll('.hero-dot'),cur=0;
  function set(i){
    bgs.forEach(function(b,k){b.classList.toggle('active',k===i);});
    lines.forEach(function(l,k){l.classList.toggle('hl',k===i);});
    dots.forEach(function(d,k){d.classList.toggle('active',k===i);d.style.width=k===i?'24px':'8px';});
    cur=i;
  }
  dots.forEach(function(d){d.addEventListener('click',function(){set(parseInt(d.getAttribute('data-hi')));});});
  set(0);
  setInterval(function(){set((cur+1)%bgs.length);},4000);
}

// TOURS
function initTours(){
  var PAGE=3,page=0,expandedId=TOURS[0].id,total=Math.ceil(TOURS.length/PAGE);
  function iCal(){return'<svg viewBox="0 0 14 14" fill="none" stroke="#6cc6ec" stroke-width="1.17" stroke-linecap="round"><rect x="1.75" y="2.33" width="10.5" height="10.5" rx=".83"/><path d="M4.67 1.17V3.5M9.33 1.17V3.5M1.75 5.83H12.25"/></svg>';}
  function iClk(){return'<svg viewBox="0 0 14 14" fill="none" stroke="#6cc6ec" stroke-width="1.17" stroke-linecap="round"><circle cx="7" cy="7" r="5.83"/><path d="M7 3.5V7l2.33 1.17"/></svg>';}
  function iUsr(){return'<svg viewBox="0 0 14 14" fill="none" stroke="#6cc6ec" stroke-width="1.17" stroke-linecap="round"><path d="M9.33 12.25v-1.17a2.33 2.33 0 0 0-2.33-2.33H3.5a2.33 2.33 0 0 0-2.33 2.33v1.17"/><circle cx="5.25" cy="4.08" r="2.33"/><path d="M12.83 12.25v-1.17a2.33 2.33 0 0 0-1.75-2.26M9.33 1.83a2.33 2.33 0 0 1 0 4.51"/></svg>';}
  function iPin(){return'<svg viewBox="0 0 12 12" fill="none" stroke="#90a1b9" stroke-width="1.2" stroke-linecap="round"><path d="M6.3 10.9C7.23 10.1 10 7.5 10 5A4 4 0 1 0 2 5c0 2.5 2.77 5.1 3.7 5.9a1 1 0 0 0 1.3 0Z"/><circle cx="6" cy="5" r="1.5"/></svg>';}

  function renderCards(){
    var g=document.getElementById('toursGrid');
    g.innerHTML=TOURS.slice(page*PAGE,page*PAGE+PAGE).map(function(t){
      return'<div class="tour-card"><div class="tour-img"><img src="'+t.img+'" alt="'+t.name+'" loading="lazy"><div class="t-ov"></div><div class="diff" style="background:'+t.diffBg+';border:1px solid '+t.diffBorder+';color:'+t.diffColor+'">'+t.difficulty+'</div></div><div class="tour-body"><div class="tour-name">'+t.name+'</div><div class="t-loc">'+iPin()+t.location+'</div><div class="tour-chips"><div class="t-chip">'+iCal()+'<span>'+t.dates+'</span></div><div class="t-chip">'+iClk()+'<span>'+t.duration+'</span></div><div class="t-chip">'+iUsr()+'<span>'+t.group+'</span></div></div><div class="tour-foot"><div><div class="t-price-lbl">от</div><div class="t-price">'+t.price+'</div></div><button class="btn-more" data-tid="'+t.id+'" style="opacity:'+(expandedId===t.id?0.7:1)+'">Подробнее</button></div></div></div>';
    }).join('');
    g.querySelectorAll('.btn-more').forEach(function(b){
      b.addEventListener('click',function(){
        expandedId=parseInt(b.getAttribute('data-tid'));
        renderCards();
        updateDetail();
        if(window.innerWidth<=767){
          var td=document.querySelector('.tour-detail');
          if(td){
            setTimeout(function(){
              var rect=td.getBoundingClientRect();
              var offset=80;
              var top=window.scrollY+rect.top-offset;
              window.scrollTo({top:top,behavior:'smooth'});
            },100);
          }
        }
      });
    });
  }

  function updateDetail(){
    var t=TOURS.find(function(x){return x.id===expandedId;});
    document.getElementById('tdName').textContent=t.name;
    document.getElementById('tdLoc').textContent=t.location;
    document.getElementById('tdDesc').textContent=t.desc;
    document.getElementById('tdDate').textContent=t.dates;
    document.getElementById('tdDur').textContent=t.duration;
    document.getElementById('tdGroup').textContent=t.group;
    document.getElementById('tdPrice').textContent=t.price;
    document.getElementById('tdBook').setAttribute('data-tname',t.name);
  }

  function renderDots(){
    var el=document.getElementById('pageDots');el.innerHTML='';
    for(var i=0;i<total;i++){
      var d=document.createElement('button');d.className='p-dot'+(i===page?' active':'');d.style.width=i===page?'24px':'8px';d.setAttribute('data-p',i);el.appendChild(d);
    }
    el.querySelectorAll('.p-dot').forEach(function(d){d.addEventListener('click',function(){page=parseInt(d.getAttribute('data-p'));expandedId=TOURS[page*PAGE].id;render();});});
  }

  function render(){renderCards();updateDetail();renderDots();document.getElementById('tourPrev').disabled=page===0;document.getElementById('tourNext').disabled=page===total-1;}
  document.getElementById('tourPrev').addEventListener('click',function(){if(page>0){page--;expandedId=TOURS[page*PAGE].id;render();}});
  document.getElementById('tourNext').addEventListener('click',function(){if(page<total-1){page++;expandedId=TOURS[page*PAGE].id;render();}});
  document.getElementById('tdClose').addEventListener('click',function(){expandedId=TOURS[page*PAGE].id;render();});
  document.getElementById('tdBook').addEventListener('click',function(){openModal(document.getElementById('tdBook').getAttribute('data-tname'));});
  render();
}

// TOUR SWIPE (Mobile)
function initTourSwipe() {
  var grid = document.getElementById('toursGrid');
  if (!grid) return;
  var startX = 0, startY = 0, isSwiping = false;
  grid.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = true;
  }, {passive: true});
  grid.addEventListener('touchend', function(e) {
    if (!isSwiping) return;
    isSwiping = false;
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    var diffX = startX - endX;
    var diffY = startY - endY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        document.getElementById('tourNext').click();
      } else {
        document.getElementById('tourPrev').click();
      }
    }
  }, {passive: true});
}

// MODAL
function openModal(name){document.getElementById('mTourName').textContent=name||'';document.getElementById('bookingModal').classList.remove('hidden');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('bookingModal').classList.add('hidden');document.body.style.overflow='';}

function initModal(){
  var ov=document.getElementById('bookingModal');
  ov.addEventListener('click',function(e){if(e.target===ov)closeModal();});
  document.getElementById('mClose').addEventListener('click',closeModal);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
  document.getElementById('bookForm').addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true,name=document.getElementById('fName'),email=document.getElementById('fEmail'),phone=document.getElementById('fPhone');
    ['fNameErr','fEmailErr','fPhoneErr'].forEach(function(id){document.getElementById(id).textContent='';});
    [name,email,phone].forEach(function(f){f.classList.remove('err');});
    if(!name.value.trim()){name.classList.add('err');document.getElementById('fNameErr').textContent='Введите ваше имя';ok=false;}
    if(!email.value.trim()){email.classList.add('err');document.getElementById('fEmailErr').textContent='Введите email';ok=false;}
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){email.classList.add('err');document.getElementById('fEmailErr').textContent='Некорректный email (должен содержать @)';ok=false;}
    if(!phone.value.trim()){phone.classList.add('err');document.getElementById('fPhoneErr').textContent='Введите телефон';ok=false;}
    else{var d=phone.value.replace(/\D/g,'');if(!((d.length===11&&(d[0]==='7'||d[0]==='8'))||d.length===10)){phone.classList.add('err');document.getElementById('fPhoneErr').textContent='Введите корректный номер (+7 XXX XXX-XX-XX)';ok=false;}}
    if(!ok)return;
    var btn=document.getElementById('mSubmit');btn.disabled=true;btn.textContent='Отправляем...';
    setTimeout(function(){closeModal();document.getElementById('bookForm').reset();btn.disabled=false;btn.textContent='Отправить заявку';showToast('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');},800);
  });
}

// GALLERY
function initGallery(){
  var items=document.querySelectorAll('.g-item'),count=items.length,cur=0,el=document.getElementById('galleryDots');
  for(var i=0;i<count;i++){var d=document.createElement('button');d.className='g-dot'+(i===0?' active':'');d.style.width=i===0?'24px':'8px';d.setAttribute('data-gi',i);el.appendChild(d);}
  function set(i){items.forEach(function(x,k){x.classList.toggle('active',k===i);});el.querySelectorAll('.g-dot').forEach(function(d,k){d.classList.toggle('active',k===i);d.style.width=k===i?'24px':'8px';});cur=i;}
  el.querySelectorAll('.g-dot').forEach(function(d){d.addEventListener('click',function(){set(parseInt(d.getAttribute('data-gi')));});});
  setInterval(function(){set((cur+1)%count);},5000);
}

// GALLERY SWIPE (Mobile)
function initGallerySwipe() {
  var wrap = document.querySelector('.gallery-wrap');
  if (!wrap) return;
  var startX = 0, startY = 0, isSwiping = false;
  var items = document.querySelectorAll('.g-item');
  var count = items.length;
  var cur = 0;
  items.forEach(function(item, i) { if (item.classList.contains('active')) cur = i; });
  wrap.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = true;
  }, {passive: true});
  wrap.addEventListener('touchend', function(e) {
    if (!isSwiping) return;
    isSwiping = false;
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    var diffX = startX - endX;
    var diffY = startY - endY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      var dots = document.querySelectorAll('.g-dot');
      if (diffX > 0) { cur = (cur + 1) % count; } else { cur = (cur - 1 + count) % count; }
      items.forEach(function(x, k) { x.classList.toggle('active', k === cur); });
      dots.forEach(function(d, k) { d.classList.toggle('active', k === cur); d.style.width = k === cur ? '24px' : '8px'; });
    }
  }, {passive: true});
}

// FAQ
function initFaq(){
  document.querySelectorAll('.acc-btn').forEach(function(btn){
    btn.addEventListener('click',function(){var item=btn.closest('.acc-item'),was=item.classList.contains('open');document.querySelectorAll('.acc-item').forEach(function(i){i.classList.remove('open');});if(!was)item.classList.add('open');});
  });
}

// NEWSLETTER
function initNewsletter(){
  document.getElementById('nlForm').addEventListener('submit',function(e){
    e.preventDefault();
    var inp=document.getElementById('nlEmail'),err=document.getElementById('nlErr'),btn=document.getElementById('nlBtn');
    err.textContent='';inp.classList.remove('err');
    var v=inp.value.trim();
    if(!v){inp.classList.add('err');err.textContent='Введите ваш email';return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){inp.classList.add('err');err.textContent='Некорректный email (должен содержать @)';return;}
    btn.disabled=true;btn.textContent='...';
    setTimeout(function(){btn.disabled=false;btn.textContent='Подписаться';inp.value='';showToast('Вы успешно подписались на рассылку!');},700);
  });
}

// MOBILE MENU — Separate overlay, does NOT touch desktop nav
function initMobileMenu(){
  var burger=document.getElementById('burgerBtn');
  if(!burger)return;

  // Create mobile menu overlay if not exists
  var mm=document.querySelector('.mobile-menu');
  if(!mm){
    mm=document.createElement('div');
    mm.className='mobile-menu';
    mm.innerHTML=
      '<div class="mm-top">'+
        '<a href="#" class="mm-logo"><span class="ak">Актив</span><span class="tu">Тур</span></a>'+
        '<button class="mm-close" aria-label="Закрыть">'+
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.67" stroke-linecap="round"><path d="M15 5L5 15M5 5L15 15"/></svg>'+
        '</button>'+
      '</div>'+
      '<button class="mm-link" data-scroll="#directions">Направления</button>'+
      '<button class="mm-link" data-scroll="#how-it-works">Как это работает</button>'+
      '<button class="mm-link" data-scroll="#tours">Туры</button>'+
      '<button class="mm-link" data-scroll="#reviews">Отзывы</button>'+
      '<button class="mm-link" data-scroll="#faq">FAQ</button>'+
      '<button class="mm-book" data-scroll="#tours">Забронировать</button>';
    document.body.appendChild(mm);

    // Close button
    mm.querySelector('.mm-close').addEventListener('click',function(){
      burger.classList.remove('active');
      mm.classList.remove('open');
      document.body.style.overflow='';
    });

    // Menu links — close menu and scroll
    mm.querySelectorAll('.mm-link, .mm-book').forEach(function(btn){
      btn.addEventListener('click',function(){
        burger.classList.remove('active');
        mm.classList.remove('open');
        document.body.style.overflow='';
        var target=document.querySelector(btn.getAttribute('data-scroll'));
        if(target)target.scrollIntoView({behavior:'smooth'});
      });
    });
  }

  // Burger toggle
  burger.addEventListener('click',function(){
    burger.classList.toggle('active');
    mm.classList.toggle('open');
    document.body.style.overflow=mm.classList.contains('open')?'hidden':'';
  });

  // Close on resize to desktop
  window.addEventListener('resize',function(){
    if(window.innerWidth>767&&mm.classList.contains('open')){
      burger.classList.remove('active');
      mm.classList.remove('open');
      document.body.style.overflow='';
    }
  });
}

// INIT
document.addEventListener('DOMContentLoaded',function(){
  initHeader(); initHero(); initTours(); initTourSwipe(); initModal(); initGallery(); initGallerySwipe(); initFaq(); initNewsletter(); initMobileMenu();
})