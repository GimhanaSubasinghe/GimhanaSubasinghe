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
    delay:50
});

ScrollReveal().reveal('.header, .about, .services, .task, .contact', { origin:'top' });
ScrollReveal().reveal('.img src', { orogin:'bottom' });


/*--------------------------focusing----------------------------*/ 
window.onload = function() {
    var section = document.getElementById("header");
    section.scrollIntoView();
  }