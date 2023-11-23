const doc = document.documentElement;

// HEADLINES
let h = 0;
let headline = document.getElementById('headline');
let headlines = [
   "premium digital marketing service",
   "grow your marketing reach",
   "spread your market influence",
   "enahance your business today",
   "scale your sales with us",
   "let's develop your sales together"
];

headline.innerHTML = headlines[h];

document.getElementById('headline-btn').onclick = () => {
   h < headlines.length - 1 ? h++ : h = 0;
   headline.innerHTML = headlines[h];
}


// COLORS
let c = 0;
let colors = [
   { frst: '#1d1647', frstL: '#312c66', sec: 'orange', heading: '#fbfbfb' },
   { frst: '#003d7d', frstL: '#034994', sec: 'purple', heading: 'white' },
   { frst: '#d44d5c', frstL: '#d44d5c', sec: 'purple', heading: 'white' },
   { frst: '#153875', frstL: '#1e4588', sec: 'purple', heading: 'white' },
   { frst: '#094159', frstL: '#0b4f6c', sec: 'purple', heading: 'white' },
];

let setColor = () => {
   doc.style.setProperty("--col-main", colors[c].frst);
   doc.style.setProperty("--col-main-light", colors[c].frstL);
   doc.style.setProperty("--col-sec", colors[c].sec);
   doc.style.setProperty("--col-heading", colors[c].heading);
}
setColor();

document.getElementById('colors-btn').onclick = () => {
   c < colors.length - 1 ? c++ : c = 0;
   setColor();
}


// FONTS
let f = 0;
let fonts = [
   'Neue Haas Grotesk Display Pro',
   'Cal Sans',
];

doc.style.setProperty("--fontFam", fonts[f]);

document.getElementById('fonts-btn').onclick = () => {
   f < fonts.length - 1 ? f++ : f = 0;
   doc.style.setProperty("--fontFam", fonts[f]);
}


// LOGO
let l = 0;
let logoImg = document.getElementById("logo");
let logos = [
   'icons/logo3.svg',
   'icons/logo1.svg',
   'icons/logo2.svg',
   'icons/logo4.svg',
];

logoImg.src = logos[l];

document.getElementById('logo-btn').onclick = () => {
   l < logos.length - 1 ? l++ : l = 0;
   logoImg.src = logos[l];
}


// NAV
const nav = document.querySelector('nav');
window.onscroll = () => window.scrollY > 100 ? nav.classList.add('scr') : nav.classList.remove('scr')


// IO
const io3Arts = [...document.querySelectorAll('.io3>div>article')].forEach((ar,i) => ar.style.transitionDelay = `.${i}s`);

let zones = [document.querySelector('header'), ...document.querySelectorAll('main section'), document.querySelector('footer')];

let options = {
   rootMargin: "-120px 0px 0px 0px",
   threshold: 0,
};

let callback = (entries) => {
   entries.forEach(entry => {
      var cls = entry.target.classList;
      if (entry.isIntersecting) {
         if (entry.boundingClientRect.top < 0) {   // enters from top
            switch (true) {
               case cls.contains('io1'):
                  nav.classList.remove('paint');
                  break;
            }
         } else {                                  // enters from bottom
            switch (true) {
               case cls.contains('io4'):
                  document.querySelector('.io3>div').classList.add('show');
                  break;
            }
         }
      } else {
         if (entry.boundingClientRect.top < 0) {   // exit top
            switch (true) {
               case cls.contains('io1'):
                  nav.classList.add('paint');
                  break;
               
            }
         } else {                                  // exit bottom
         }
      }
   });
};

let io1 = new IntersectionObserver(callback, options);
zones.forEach(el => io1.observe(el));


// NAV SCROLL TO
const navLis = [...document.querySelectorAll('nav ul li')];
const sections = [...document.querySelectorAll('main section')];

navLis.forEach((el, i) => el.onclick = () => window.scrollTo({ top: sections[i].offsetTop, behavior: "smooth" }))




