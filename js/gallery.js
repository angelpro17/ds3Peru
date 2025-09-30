// Galería de imágenes del producto
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            src: 'icons/Caja.jpg',
            alt: 'Empaque Cable UTP AMP'
        },
        {
            src: 'icons/cable.jpg',
            alt: 'Cable UTP AMP Categoría 6'
        }
    ];
    
    let currentImageIndex = 0;
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
    
    // Función para cambiar imagen
    function changeImage(index) {
        if (index >= 0 && index < images.length) {
            currentImageIndex = index;
            mainImage.src = images[index].src;
            mainImage.alt = images[index].alt;
            
            // Actualizar bordes de miniaturas
            thumbnailBtns.forEach((btn, i) => {
                if (i === index) {
                    btn.classList.remove('thumbnail-inactive');
                    btn.classList.add('thumbnail-active');
                } else {
                    btn.classList.remove('thumbnail-active');
                    btn.classList.add('thumbnail-inactive');
                }
            });
        }
    }
    
    // Navegación con botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
            changeImage(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
            changeImage(newIndex);
        });
    }
    
    // Navegación con miniaturas
    thumbnailBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            changeImage(index);
        });
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
            changeImage(newIndex);
        } else if (e.key === 'ArrowRight') {
            const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
            changeImage(newIndex);
        }
    });
});