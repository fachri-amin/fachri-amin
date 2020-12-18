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

if (window.innerWidth <= 992) {
  let navbar = document.querySelector('.navbar');

  navbar.classList.remove('fixed-top');
}

const services = document.querySelectorAll('.service-bullet');

services.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    const service_child = e.children;
    service_child[1].classList.remove('d-none');
    service_child[2].classList.remove('d-none');
  })
})

services.forEach(function (e) {
  e.addEventListener('mouseout', function () {
    const service_child = e.children;
    service_child[1].classList.add('d-none');
    service_child[2].classList.add('d-none');
  })
})