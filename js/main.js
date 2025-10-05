
// Background color change on #projects section scroll
$(window).on('scroll', function() {
    var projects = document.getElementById('projects');
    var rect = projects.getBoundingClientRect();
    var inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
        document.body.classList.add('body-projects-bg');
        document.body.classList.remove('body-projects-bg-dark');
    } else {
        document.body.classList.add('body-projects-bg-dark');
        document.body.classList.remove('body-projects-bg');

    }
});

// Background color change on table-story-item scroll
window.addEventListener('scroll', function() {
  const storyItems = document.getElementsByClassName('table-story-item');
  const grid = document.querySelector('.table-story-item-grid');
  if (!storyItems.length || !grid) return;

  let anyInView = false;
  for (let i = 0; i < storyItems.length; i++) {
    const rect = storyItems[i].getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      anyInView = true;
      break;
    }
  }

  if (anyInView) {
    grid.classList.add('table-story-item-grid-bg-lite');
    grid.classList.remove('table-story-item-grid-bg-dark');
  } else {
    grid.classList.add('table-story-item-grid-bg-dark');
    grid.classList.remove('table-story-item-grid-bg-lite');
  }
});

// Background color change on airbnb-story-item scroll
window.addEventListener('scroll', function() {
  const storyItems = document.getElementsByClassName('airbnb-story-item');
  const grid = document.querySelector('.airbnb-story-item-grid');
  if (!storyItems.length || !grid) return;

  let anyInView = false;
  for (let i = 0; i < storyItems.length; i++) {
    const rect = storyItems[i].getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      anyInView = true;
      break;
    }
  }

  if (anyInView) {
    grid.classList.add('airbnb-story-item-grid-bg-lite');
    grid.classList.remove('airbnb-story-item-grid-bg-dark');
  } else {
    grid.classList.add('airbnb-story-item-grid-bg-dark');
    grid.classList.remove('airbnb-story-item-grid-bg-lite');
  }
});

// Background color change on slate-story-item scroll
window.addEventListener('scroll', function() {
  const storyItems = document.getElementsByClassName('slate-story-item');
  const grid = document.querySelector('.slate-story-item-grid');
  if (!storyItems.length || !grid) return;

  let anyInView = false;
  for (let i = 0; i < storyItems.length; i++) {
    const rect = storyItems[i].getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      anyInView = true;
      break;
    }
  }

  if (anyInView) {
    grid.classList.add('slate-story-item-grid-bg-lite');
    grid.classList.remove('slate-story-item-grid-bg-dark');
  } else {
    grid.classList.add('slate-story-item-grid-bg-dark');
    grid.classList.remove('slate-story-item-grid-bg-lite');
  }
});

// Scroll Reveal Animations

/*Main Page*/
ScrollReveal().reveal('.hero-title', { duration: 2000, distance: '40px', origin: 'bottom', });
ScrollReveal().reveal('#autumn', { duration: 2000, delay: 1000, distance: '40px', origin: 'left', });
ScrollReveal().reveal('#pen', { duration: 3000, delay: 500, distance: '120px', origin: 'left', });
ScrollReveal().reveal('#splash-description', { duration: 1000, delay: 2000, distance: '40px', origin: 'bottom', });
ScrollReveal().reveal('.project', { duration: 1000, delay: 500,});
ScrollReveal().reveal('#top-bar', { duration: 1000, delay: 2000,});
ScrollReveal().reveal('#scroll-down', { duration: 1000, delay: 2500,});
ScrollReveal().reveal('#contact', { duration: 2000, delay:1000, distance: '40px', origin: 'bottom', });

/*Project Pages*/
ScrollReveal().reveal('.story-item', { duration: 2000, });
ScrollReveal().reveal('.story-video', { duration: 3000, });
ScrollReveal().reveal('.img-grid', { duration: 3000, })


