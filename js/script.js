const doc = document.documentElement

// NAV
const nav = document.querySelector('nav')
window.onscroll = () => window.scrollY > 100 ? nav.classList.add('scr') : nav.classList.remove('scr')
window.onload = () => window.scrollY > 100 ? nav.classList.add('paint') : nav.classList.remove('paint')


// IO
const aboutus = document.querySelector('.about-us')
const services = document.querySelector('.services')
const cta = document.querySelector('.entry4')

let zones = [...document.querySelectorAll('main section, header, footer, .entry1, .entry2, .entry3, .entry4')]

let options = {
   rootMargin: "0px",
   threshold: 0,
};

let callback = (entries) => {
   entries.forEach(entry => {
      var cls = entry.target.classList

      if (entry.isIntersecting) {
         
         switch (true) {
            case cls.contains('entry1'):
               aboutus.classList.add('show')
               break;
            case cls.contains('entry3'):
               services.classList.add('show')
               break;
            case cls.contains('entry4'):
               cta.classList.add('pulse')
               break;
         }

         if (entry.boundingClientRect.top < 0) {   // enters from top
         } else {                                  // enters from bottom
            switch (true) {
               case cls.contains('entry2'):
                  nav.classList.add('paint')
                  break;
            }
         }
      } else {

         switch (true) {
            case cls.contains('entry4'):
               cta.classList.remove('pulse')
               break;
         }

         if (entry.boundingClientRect.top < 0) {   // exit top
         } else {                                  // exit bottom
            switch (true) {
               case cls.contains('entry1'):
                  aboutus.classList.remove('show')
                  services.classList.remove('show')
                  break;
               case cls.contains('entry2'):
                  nav.classList.remove('paint')
                  break;
            }
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


// SEND MAIL
let sendMail = () => {
   let emailVal = document.getElementById('email').value;
   let commentVal = document.getElementById('comment').value;
   let reqVals = [emailVal, commentVal];
   let reqs = document.getElementsByClassName('req');

   if (emailVal === '' || commentVal === '') {
      reqVals.forEach((val, i) => val === '' ? reqs[i].classList.add('missing') : true)
   } else {
      (function () {
         emailjs.init("zYY-jPsXqa7AYLqbk");
      })();

      var params = {
         sender: document.getElementById('email').value,
         to: "world-lead-data@proton.me",
         subject: `${document.getElementById('name').value} from ${document.getElementById('company').value}`,
         message: document.getElementById('comment').value,
         replyto: "noreply@gmail.com",
      }

      var serviceID = "service_vdl4k4h";
      var templateID = "template_dlz8wki";

      emailjs.send(serviceID, templateID, params).then(res => {
         alert("email sent");
         document.getElementById('name').value = '';
         document.getElementById('company').value = '';
         document.getElementById('comment').value = '';
         document.getElementById('email').value = '';
      }).catch();
   }
}