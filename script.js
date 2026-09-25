document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-sun';
    }

    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        }
    });

    // Uptime timer
    let seconds = 0;
    const uptimeEl = document.getElementById('uptimeCounter');
    setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        if (mins > 0) {
            uptimeEl.textContent = `Uptime: ${mins}m ${secs}s`;
        } else {
            uptimeEl.textContent = `Uptime: ${secs}s`;
        }
    }, 1000);

    // Counter feature
    let count = 0;
    const counterValueEl = document.getElementById('counterValue');
    const btnIncrement = document.getElementById('btnIncrement');
    const btnDecrement = document.getElementById('btnDecrement');

    btnIncrement.addEventListener('click', () => {
        count++;
        counterValueEl.textContent = count;
    });

    btnDecrement.addEventListener('click', () => {
        count--;
        counterValueEl.textContent = count;
    });
});
