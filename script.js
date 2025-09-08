// Get filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

// Add event listener for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    const images = document.querySelectorAll('.gallery img');
    images.forEach((image) => {
      if (image.dataset.category === filter || filter === 'all') {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});
