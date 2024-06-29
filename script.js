// JavaScript code to handle scroll behavior
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    // If the scroll position is greater than 0, add class 'scrolled'; otherwise, remove it
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
