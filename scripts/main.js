window.addEventListener('load', function() {
    // HIDE PRELAODER
    document.querySelector(".preloader").classList.add("preloader-hidden");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){
        document.querySelectorAll(".hero .animation-container").forEach(function(element){
            setTimeout(function(){
                element.classList.add("run-animation");
            }, element.dataset.animationDelay);
        });
    }, 900);
});

document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    
    // REPLACE PARALLAX PLUGIN
    const parallaxElements = document.querySelectorAll(".hero .background-content.parallax-on");
    if (parallaxElements.length > 0) {
        window.addEventListener('mousemove', function(e) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            parallaxElements.forEach(function(element) {
                const moveX = ((mouseX - windowWidth / 2) / windowWidth) * 24;
                const moveY = ((mouseY - windowHeight / 2) / windowHeight) * 15;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
                element.style.transition = 'transform 0.1s ease-out';
            });
        });
    }
    
    // SCROLL TOP BUTTON
    document.querySelectorAll(".scroll-top").forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // SCROLL REVEAL SETUP - Keep this as it's a separate library
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-bottom", { 
        duration: 600,
        delay: 500,
        origin: "bottom",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
        useDelay: 'onload',
    });
    
    // IMAGE CAROUSEL - Basic Vanilla JS Implementation
    const setupCarousels = function() {
        document.querySelectorAll('.image-carousel').forEach(function(carousel) {
            const items = Array.from(carousel.children);
            let currentIndex = 0;
            
            // Prepare carousel
            items.forEach((item, index) => {
                item.style.position = 'absolute';
                item.style.transition = 'opacity 0.5s ease-in-out';
                item.style.opacity = index === 0 ? '1' : '0';
                item.style.zIndex = index === 0 ? '1' : '0';
            });
            
            // Auto rotation
            setInterval(() => {
                items[currentIndex].style.opacity = '0';
                items[currentIndex].style.zIndex = '0';
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].style.opacity = '1';
                items[currentIndex].style.zIndex = '1';
            }, 3000);
        });
    };
    
    setupCarousels();
    
    // HERO/BUTTON ON SCROLL ANIMATING
    function onScrollAnimating() {
        const hero = document.querySelector(".hero");
        const windowHeight = hero ? hero.offsetHeight : 0;
        const frontContent = document.querySelector(".hero .front-content");
        const backContent = document.querySelector(".hero .background-content");
        const navigationButton = document.querySelector(".navigation-button");
        let scrollOffset;
        let calculatedOpacityFrontContent;
        let calculatedScaleFrontContent;
        let calculatedTranslateHeader;
        let calculatedOpacityBackground;
        
        function navigationButtonHide() {
            if (calculatedTranslateHeader <= 200) {
                navigationButton.style.transform = `translateX(${calculatedTranslateHeader}%) translateY(-50%)`;
            } else if (scrollOffset > windowHeight) {
                navigationButton.style.transform = "translateX(200%) translateY(-50%)";
            }
        }
        
        function frontContentMargin() {
            if (scrollOffset <= windowHeight) {
                frontContent.style.marginTop = `${scrollOffset}px`;
            } else if (scrollOffset > windowHeight) {
                frontContent.style.marginTop = `${windowHeight}px`;
            }
        }
        
        function frontContentOpacity() {
            if (calculatedOpacityFrontContent >= 0) {
                frontContent.style.opacity = calculatedOpacityFrontContent;
            } else if (scrollOffset > windowHeight) {
                frontContent.style.opacity = "0";
            }
        }
        
        function frontContentScale() {
            if (calculatedScaleFrontContent >= 0.4) {
                frontContent.style.transform = `scale(${calculatedScaleFrontContent})`;
            } else if (scrollOffset > windowHeight) {
                frontContent.style.transform = "scale(0.6)";
            }
        }
        
        function backgroundOpacity() {
            if (calculatedOpacityBackground >= 0) {
                backContent.style.opacity = calculatedOpacityBackground;
            } else if (scrollOffset > windowHeight) {
                backContent.style.opacity = "0";
            }
        }
        
        function runStep() {
            scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
            
            if (windowHeight > scrollOffset && scrollOffset >= 0) {
                calculatedTranslateHeader = (scrollOffset / windowHeight) * 650;
                calculatedOpacityFrontContent = 1 - (scrollOffset / windowHeight) * 4.2;
                calculatedScaleFrontContent = 1 - (scrollOffset / windowHeight) * 1.2;
                calculatedOpacityBackground = 1 - (scrollOffset / windowHeight) * 1.4;

                if (navigationButton) navigationButtonHide();
                if (frontContent) {
                    frontContentMargin();
                    frontContentOpacity();
                    frontContentScale();
                }
                if (backContent) backgroundOpacity();
            }
        }
        
        window.addEventListener('resize', function() {
            if (hero) windowHeight = hero.offsetHeight;
        });

        window.addEventListener('scroll', runStep);
        
        runStep();
    }
    
    onScrollAnimating();

    const speedometer = document.querySelector('.speedometer-container');
    if (speedometer) {
        setTimeout(() => {
            speedometer.style.opacity = 1;
        }, 2000);
    }
});
