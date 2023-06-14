  window.addEventListener('DOMContentLoaded', function() {
    var scrollToTop = document.querySelector('#scroll-to-top');
    if (scrollToTop) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
          scrollToTop.classList.add('show');
        } else {
          scrollToTop.classList.remove('show');
        }
      });
  
      scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });