
    document.addEventListener('DOMContentLoaded', function() {
        gsap.from('#now-btn', {
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            x: '6%',
            delay: 1.2,
            ease: 'power2.out'  // Corrected ease type
        });
        
        gsap.from('.nav-link', {
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            x: '5%',
            delay: 0.1,
            ease: 'power2.out'  // Corrected ease type
        });

        gsap.from('.navbar-brand', {
            duration: 3.1,
            scale: 0.8, // Start smaller (50% size)
            delay: 0.3,
            ease: 'power2.out'
        }); 
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
    
        // Animate the paragraph (coming from the left)
        gsap.from('.profile-text', {
            y: '18%', // Start from the left
            opacity: 0,
            duration: 1.9,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.profile-text', // The element that triggers the animation
                start: 'top 80%', // Start animation when 80% of the element is in the viewport
                end: 'top 20%', // End the animation when it's near the top
                scrub: false, // Makes the animation progress smoothly with scrolling
                markers: false // Set to true if you want to see the trigger markers for testing
            }
        });

        gsap.from('.profile-pic', {
            opacity: 0,
            stagger: 0.2,
            duration: 2,
            x: '20%',
            ease: 'power2.out', // Corrected ease type
            scrollTrigger: {
                trigger: '.profile-pic', // The element that triggers the animation
                start: 'top 80%', // Start animation when 80% of the element is in the viewport
                end: 'top 20%', // End the animation when it's near the top
                scrub: false, // Makes the animation progress smoothly with scrolling
                markers: false // Set to true if you want to see the trigger markers for testing
            }
        });

        gsap.from('.logo', {
            x: '20%',
            opacity: 0,
            stagger: 0.08,
            duration: 0.4,
            x: '20%',
            ease: 'power2.out', // Corrected ease type
            scrollTrigger: {
                trigger: '.logo', // The element that triggers the animation
                start: 'top 80%', // Start animation when 80% of the element is in the viewport
                end: 'top 20%', // End the animation when it's near the top
                scrub: false, // Makes the animation progress smoothly with scrolling
                markers: false // Set to true if you want to see the trigger markers for testing
            }
        });

    });
    

