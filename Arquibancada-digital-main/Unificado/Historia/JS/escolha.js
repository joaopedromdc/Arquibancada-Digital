    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.team-card');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
          this.classList.remove('hovered');
        });
      });
    });