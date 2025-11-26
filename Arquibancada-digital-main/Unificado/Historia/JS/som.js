
document.addEventListener('DOMContentLoaded', function() {
    
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            
            const time = this.getAttribute('data-time');
            const nextPage = this.getAttribute('href');
            
            playTeamSoundAndRedirect(time, nextPage);
        });
    });
});

function playTeamSoundAndRedirect(time, nextPage) {
    const sound = document.getElementById(time + 'Sound');
    
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        
        sound.onended = function() {
            console.log('Áudio do ' + time + ' terminou, redirecionando...');
            window.location.href = nextPage;
        };
        
        const fallbackTimeout = setTimeout(() => {
            console.log('Fallback: redirecionando após timeout');
            window.location.href = nextPage;
        }, 10000);

        sound.onended = function() {
            clearTimeout(fallbackTimeout);
            window.location.href = nextPage;
        };
        
        sound.play().then(() => {
            console.log('Som do ' + time + ' tocando!');
        }).catch(error => {
            console.log('Erro ao tocar som, redirecionando:', error);
            clearTimeout(fallbackTimeout);
            window.location.href = nextPage;
        });
        
    } else {
        console.log('Áudio não encontrado, redirecionando...');
        window.location.href = nextPage;
    }
}