// $('.page-scroll').on('click', function (e) {
//     e.preventDefault();
//     // ambil nilai href
//     let tujuan = $(this).attr('href');

//     // ambil elemen yang dituju
//     let elemenTujuan = $(tujuan);

//     let hash = this.hash

//     $(window).animate({
//         scrollTop: $(hash).offset().top - 50
//     }, 1000, 'swing', function () {
//         window.location.hash = hash
//     });


// });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


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