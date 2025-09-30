// Navbar functionality mejorado
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const searchButton = document.getElementById('search-button');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const mobileContactButton = document.getElementById('mobile-contact-button');

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('-translate-x-full');
        document.body.classList.toggle('overflow-hidden');
        
        // Add backdrop
        if (!mobileMenu.classList.contains('-translate-x-full')) {
            const backdrop = document.createElement('div');
            backdrop.id = 'menu-backdrop';
            backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 z-40';
            backdrop.addEventListener('click', closeMobileMenu);
            document.body.appendChild(backdrop);
        } else {
            const backdrop = document.getElementById('menu-backdrop');
            if (backdrop) backdrop.remove();
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-x-full');
        document.body.classList.remove('overflow-hidden');
        const backdrop = document.getElementById('menu-backdrop');
        if (backdrop) backdrop.remove();
    }

    // Search functionality
    function handleSearch() {
        const searchTerm = prompt('¿Qué producto estás buscando?');
        if (searchTerm) {
            // Aquí puedes implementar la lógica de búsqueda
            alert(`Buscando: "${searchTerm}"\n\nEsta funcionalidad se implementará próximamente.`);
        }
    }

    // Contact functionality
    function handleContact() {
        const contactInfo = `
📞 Teléfonos:
• 533-4339
• 994-428-965
• 996-533-223
• 937-514-867

📧 Email: netperu100@hotmail.com
📍 Ubicación: Lima, PERÚ

¿Te gustaría llamar ahora?
        `;
        
        if (confirm(contactInfo)) {
            window.location.href = 'tel:+51996533223';
        }
    }

    // Event listeners
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    if (mobileSearchButton) {
        mobileSearchButton.addEventListener('click', handleSearch);
    }

    if (mobileContactButton) {
        mobileContactButton.addEventListener('click', handleContact);
    }

    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) { // lg breakpoint
            closeMobileMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add transition to navbar
    navbar.style.transition = 'transform 0.3s ease-in-out';
});