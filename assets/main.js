'use strict';
for (const element of document.querySelectorAll('[data-year]')) {
  element.textContent = String(new Date().getFullYear());
}

 
// NASA SVS hover footage is a real, externally hosted GIF. Reveal it only
// when it has loaded successfully so a failed external request cannot replace
// the static NASA photograph with a broken image.
const nasaFlareGif = document.querySelector('.solar-nasa-gif');
if (nasaFlareGif) {
  const markReady = () => {
    if (nasaFlareGif.naturalWidth > 0) nasaFlareGif.classList.add('is-ready');
  };
  nasaFlareGif.addEventListener('load', markReady);
  nasaFlareGif.addEventListener('error', () => nasaFlareGif.classList.remove('is-ready'));
  if (nasaFlareGif.complete) markReady();
}
