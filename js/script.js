window.addEventListener('scroll', function() {
    var navbar = document.querySelector('');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
    }
});

