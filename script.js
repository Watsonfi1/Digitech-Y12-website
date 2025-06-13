//Setting Variables to be used//
let num = 0;
const linkEl = [ 'index.html', 'countries.html', 'aam.html', 'quiz.html']
const navEl = ['#myLink', '#myLink2', '#myLink3', '#myLink4', '#logo', '.hamburger', '.headline'];
const elements = navEl.map(selector => document.querySelector(selector));
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');  
const gripen = document.querySelector('.gripen');
// Setting TimelineMax which was imported in HTML//
const tl = new TimelineMax();

//Unique Animations//
tl.fromTo(hero, 1, { height: "0%" }, {height: "100%", ease: Power2.easeInOut})
.fromTo(gripen, 0.7 ,{x:"-110%"}, {x:'380%', ease: Power2.easeOutIn} );
//Shortens the code for animations that are not unique//
elements.forEach(el => {
  if (el) {
    tl.fromTo(el, 1, { opacity: 0 }, { opacity: 1, onComplete: () => {
      //Make it so the buttons only work when visable//
      el.classList.remove('disabled-link');
      el.classList.add('enabled-link');
      el.removeAttribute('aria-disabled');
      el.href = linkEl[num];
      num++;
      if (num == 4){ num -= 4};
    }},'-=1');
  }
});

