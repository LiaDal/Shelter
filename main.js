//burger

document.querySelector('.header-nav-burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.wrapper').classList.toggle('back');
    document.querySelector(".body").classList.toggle("scroll");
})

//slider

let left = document.querySelector('.arrow-prev');
let right = document.querySelector('.arrow-next');
let viewport = document.querySelector('.friends-cards');
left.addEventListener('click', function() {
   viewport.scrollBy({
      left: -350,
      behavior: 'smooth'
   });
});
right.addEventListener('click', function() {
   viewport.scrollBy({
      left: 350,
      behavior: 'smooth'
   });
});

//popup

function popupOpen() {
    var popup = document.getElementById(".popup");
    popup.classList.toggle(".show");
}
