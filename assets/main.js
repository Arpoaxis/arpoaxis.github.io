'use strict';
for (const element of document.querySelectorAll('[data-year]')) {
  element.textContent = String(new Date().getFullYear());
}

 
// Display a captured frame of the same NASA AIA 131 GIF at rest.
// The blended NASA still remains as a fallback until animation loading succeeds.
// Cross-origin canvas drawing may taint the canvas; we only display it, never read pixels.
const nasaFlareGif = document.querySelector('.solar-nasa-gif');
const nasaFlarePoster = document.querySelector('.solar-nasa-poster');
if (nasaFlareGif && nasaFlarePoster) {
  const markReady = () => {
    if (!nasaFlareGif.naturalWidth) return;
    try {
      nasaFlarePoster.width = nasaFlareGif.naturalWidth;
      nasaFlarePoster.height = nasaFlareGif.naturalHeight;
      const context = nasaFlarePoster.getContext('2d');
      if (!context) return;
      context.drawImage(nasaFlareGif, 0, 0);
      nasaFlarePoster.classList.add('is-ready');
      nasaFlareGif.classList.add('is-ready');
    } catch {
      // Preserve the readable NASA still if the browser cannot draw the GIF.
    }
  };
  nasaFlareGif.addEventListener('load', markReady);
  nasaFlareGif.addEventListener('error', () => {
    nasaFlareGif.classList.remove('is-ready');
    nasaFlarePoster.classList.remove('is-ready');
  });
  if (nasaFlareGif.complete) markReady();
}
