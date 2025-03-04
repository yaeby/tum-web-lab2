document.addEventListener('DOMContentLoaded', function() {
    // Select elements with more robust selectors
    const hamburger = document.querySelector('.mobile-nav-hamburger .hamburger-icon');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const closeButton = document.querySelector('.mobile-nav-close');

    // Debug elements
    console.log('Debug information:');
    console.log('Hamburger element found:', hamburger);
    console.log('Navigation overlay found:', navOverlay);
    console.log('Close button found:', closeButton);
    console.log('Current page path:', window.location.pathname);

    // Check if elements exist before adding event listeners
    if (hamburger && navOverlay && closeButton) {
        console.log('All required elements found, adding event listeners');
        
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked');
            e.preventDefault(); // Prevent default link behavior
            e.stopPropagation(); // Stop event from propagating
            
            // Toggle the active class
            navOverlay.classList.toggle('is-active');
            console.log('Toggled is-active class. Current classes:', navOverlay.className);
            
            // Force visibility with inline style for debugging
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
            console.log('Close button clicked');
            e.preventDefault();
            e.stopPropagation();
            navOverlay.classList.remove('is-active');
            
            // Reset inline styles
            navOverlay.style.display = '';
            navOverlay.style.opacity = '';
            navOverlay.style.visibility = '';
        });

        // Optional: Close overlay when clicking outside navigation
        navOverlay.addEventListener('click', function(e) {
            if (e.target === navOverlay) {
                navOverlay.classList.remove('is-active');
                
                // Reset inline styles
                navOverlay.style.display = '';
                navOverlay.style.opacity = '';
                navOverlay.style.visibility = '';
            }
        });
    } else {
        console.error('Navigation elements not found. Check your HTML.');
    }
});