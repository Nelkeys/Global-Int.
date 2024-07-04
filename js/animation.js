document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-left, .fade-right, .fade-up, .fade-down');
  
    function handleScroll() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  
    // Trigger the scroll event once to check initial visibility
    handleScroll();
  });
  