/*-------------------------Type Text-----------------*/
const typed = new Typed('.multiple-text', {
    strings: [,'The Guider', 'Lecturer', 'Traveller'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});


/*---------------------scroll reveal--------------------*/
ScrollReveal({ 
    reset: true ,
    distance: '60px',
    duration:2000,
    delay:500
});

ScrollReveal().reveal('.home-name', { orogin:'bottom' });


/*--------------------------focusing----------------------------*/ 
window.onload = function() {
    var section = document.getElementById("home");
    section.scrollIntoView();
  }