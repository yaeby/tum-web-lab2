document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.mobile-nav-hamburger .hamburger-icon');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const closeButton = document.querySelector('.mobile-nav-close');


    if (hamburger && navOverlay && closeButton) {
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault(); 
            e.stopPropagation(); 
            
            navOverlay.classList.toggle('is-active');
            
            if (navOverlay.classList.contains('is-active')) {
                navOverlay.style.display = 'block';
                navOverlay.style.opacity = '1';
                navOverlay.style.visibility = 'visible';
            } else {
                navOverlay.style.display = '';
                navOverlay.style.opacity = '';
                navOverlay.style.visibility = '';
            }
        });

        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navOverlay.classList.remove('is-active');
            
            navOverlay.style.display = '';
            navOverlay.style.opacity = '';
            navOverlay.style.visibility = '';
        });

        navOverlay.addEventListener('click', function(e) {
            if (e.target === navOverlay) {
                navOverlay.classList.remove('is-active');
                
                navOverlay.style.display = '';
                navOverlay.style.opacity = '';
                navOverlay.style.visibility = '';
            }
        });
    } else {
        console.error('Navigation elements not found');
    }
});