/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});
/*Main Page*/
ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('.gallery-grid', { duration: 2000, distance: '200px', origin: 'left'});
ScrollReveal().reveal('.about-grid', { duration: 2000, delay:500,distance: '200px', origin: 'right'});

/*About*/
ScrollReveal().reveal('#slide-in', {duration: 2000, distance:'90px', origin:'right'})
ScrollReveal().reveal('#slide-in2', {duration: 2000, delay:500, distance:'90px', origin:'right'});

/*Contact*/
ScrollReveal().reveal('.left-contact', {duration: 2000,distance:'500px', origin:'left'})
ScrollReveal().reveal('.right-contact', {duration: 2000,distance:'500px', origin:'right'})

/*123 Page*/
ScrollReveal().reveal('#what-if-fade', {duration: 4000})
ScrollReveal().reveal('#table-one', {duration: 2000})
ScrollReveal().reveal('#table-two', {duration: 2000, delay:500})
ScrollReveal().reveal('#table-three', {duration: 2000, delay:1000});