document.addEventListener('DOMContentLoaded', function () {
  var flkty = new Flickity('.gallery', {
    cellAlign: 'center', // Align cells to the center
    contain: true,       // Keep cells within the container
    wrapAround: true,    // Enable infinite scrolling
    autoPlay: false,     // Disable autoplay
  });

  // Trigger resize after the page has fully loaded
  window.addEventListener('load', function () {
    flkty.resize();
  });
});