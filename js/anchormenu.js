// Smooth scroll and active state for anchor menu
        document.addEventListener('DOMContentLoaded', function() {
            const anchorLinks = document.querySelectorAll('.anchor-link');
            const sections = document.querySelectorAll('#cot-section, #fewshot-section, #cod-section, #zeroshot-section');

            // Click handler for smooth scroll
            anchorLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offset = 100;
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Update active state
                        anchorLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });

            // Scroll spy - update active link based on scroll position
            function updateActiveLink() {
                const scrollPosition = window.scrollY + 200;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        anchorLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }

            // Listen to scroll events
            window.addEventListener('scroll', updateActiveLink);
            
            // Set initial active state
            if (anchorLinks.length > 0) {
                anchorLinks[0].classList.add('active');
            }
        });