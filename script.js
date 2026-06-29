// script.js — логика для страницы
document.addEventListener('DOMContentLoaded', function () {
    // Подсветка 21 июля 2026
    const dayElements = document.querySelectorAll('.calendar-day');
    const targetDate = 21;
    
    dayElements.forEach(day => {
        if (day.textContent.trim() === String(targetDate)) {
            day.classList.add('highlight');
        }
    });
    
    console.log('Сайт загружен');
});

// Обработка формы RSVP
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvpForm');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const attendance = document.querySelector('input[name="attendance"]:checked');
            
            if (!name) {
                alert('Пожалуйста, введите ваше имя и фамилию');
                return;
            }
            
            if (!attendance) {
                alert('Пожалуйста, выберите, придёте ли вы');
                return;
            }
            
            const message = attendance.value === 'yes' 
                ? `Спасибо, ${name}! Будем ждать вас с нетерпением! ❤️`
                : `${name}, нам будет вас не хватать. До встречи в другой раз! 🌸`;
            
            alert(message);
            form.reset();
        });
    }
});


// Таймер обратного отсчёта
document.addEventListener('DOMContentLoaded', function () {
    const weddingDate = new Date('July 21, 2026 18:30:00').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
});


// Музыкальная кнопка
function initMusic() {
    const musicBtn = document.getElementById('musicBtn');
    if (!musicBtn) return;
    
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;
    
    let isPlaying = false;

    musicBtn.addEventListener('click', function () {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            // Меняем иконки
            const playIcon = musicBtn.querySelector('.play-icon');
            const pauseIcon = musicBtn.querySelector('.pause-icon');
            if (playIcon) playIcon.style.display = 'block';
            if (pauseIcon) pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            bgMusic.play().catch(function(error) {
                console.log('Автовоспроизведение заблокировано');
            });
            musicBtn.classList.add('playing');
            // Меняем иконки
            const playIcon = musicBtn.querySelector('.play-icon');
            const pauseIcon = musicBtn.querySelector('.pause-icon');
            if (playIcon) playIcon.style.display = 'none';
            if (pauseIcon) pauseIcon.style.display = 'block';
            isPlaying = true;
        }
    });

    bgMusic.addEventListener('ended', function () {
        musicBtn.classList.remove('playing');
        const playIcon = musicBtn.querySelector('.play-icon');
        const pauseIcon = musicBtn.querySelector('.pause-icon');
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        isPlaying = false;
    });
}

// ★★★ ВАЖНО: ВЫЗЫВАЕМ ФУНКЦИЮ ★★★
initMusic();
