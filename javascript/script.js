$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate(
    {
      scrollTop: position,
    },
    1500,
    "easeInOutBack"
  );
});

console.log(window.innerWidth);

if(window.innerWidth <= 992){
  let navbar = document.querySelector('.navbar');

  navbar.classList.remove('fixed-top');
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $('a[href*="#"]')
//     .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
//     .unbind('click.smoothScroll')
//     .bind('click.smoothScroll', event => {
//         const targetId = event.currentTarget.getAttribute('href').split('#')[1];
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             event.preventDefault();
//             $('html, body').animate({
//                 scrollTop: $(targetElement).offset().top
//             }, 1000);
//         }
//     });
