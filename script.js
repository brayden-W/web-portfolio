document.addEventListener('DOMContentLoaded', function () {
  var flkty = new Flickity('.gallery', {
    cellAlign: 'center', // Align cells to the center
    contain: true,       // Keep cells within the container
    wrapAround: true,    // Enable infinite scrolling
    autoPlay: 6000
  });

  // Trigger resize after the page has fully loaded
  window.addEventListener('load', function () {
    flkty.resize();
  });

  // Resume dropdown logic
  var resumeDropdownBtn = document.getElementById('resumeDropdownBtn');
  var resumeList = document.getElementById('resumeList');
  var resumeDropdownContainer = document.querySelector('.resume-dropdown-container');


  function showResumeList() {
    if (resumeDropdownBtn) {
      resumeDropdownBtn.classList.remove('fading-in');
      resumeDropdownBtn.style.display = 'none';
    }
    if (resumeList) resumeList.classList.add('open');
  }

  function hideResumeList() {
    if (resumeList) resumeList.classList.remove('open');
    if (resumeDropdownBtn && resumeList) {
      var transitionHandler = function(e) {
        if (e.propertyName === 'max-height') {
          resumeList.removeEventListener('transitionend', transitionHandler);
          resumeDropdownBtn.style.display = 'flex';
          // Fade in
          resumeDropdownBtn.classList.add('fading-in');
          // Force reflow to apply the class before removing it
          void resumeDropdownBtn.offsetWidth;
          setTimeout(function() {
            resumeDropdownBtn.classList.remove('fading-in');
          }, 10); // Start fade in almost immediately
        }
      };
      resumeList.addEventListener('transitionend', transitionHandler);
    }
  }

  if (resumeDropdownBtn && resumeList && resumeDropdownContainer) {
    resumeDropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      showResumeList();
    });

    // Hide resume list when clicking outside
    document.addEventListener('click', function (e) {
      if (!resumeDropdownContainer.contains(e.target)) {
        hideResumeList();
      }
    });
    // Prevent click inside the list from closing it
    resumeList.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});