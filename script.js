const parallax = document.querySelector('.parallax'); 

let isAnimating = false; 

function updateParallax() { 

    let scrollY = window.scrollY; 
    const maxScroll = 400; 

    let progress = Math.min(scrollY / maxScroll, 1);

    let scale = 1 + progress * 5;
    let opacity = 1 - progress;

    parallax.style.transform = `scale(${scale})`;
    parallax.style.opacity = opacity;
    isAnimating = false;

}

window.addEventListener('scroll', () => {
    if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(updateParallax);
    }
});