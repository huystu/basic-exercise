(function () {
    'use strict';

    // Back to Top button functionality
    var backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        var scrollSpeed = 300;
        var easingType = 'linear';

        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }
})();
