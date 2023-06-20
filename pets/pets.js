//burger

document.querySelector('.header-nav-burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.wrapper').classList.toggle('back');
})

