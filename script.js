//  script.js 

// Add JavaScript functionality here as needed.

// Example: A simple image gallery with fade effectconst images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('mouseover', () =>
    image.style.opacity = 1;
  });
  image.addEventListener('mouseout', () => {
    imagestyle.opacity = 0;
  });
});