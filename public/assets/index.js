(function () {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const body = document.body;
    const storedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        const isDark = theme === 'dark';
        if (isDark) {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    };

    // Force dark mode as default
    if (storedTheme !== 'dark') {
        localStorage.setItem('theme', 'dark');
    }
    applyTheme('dark');

    themeToggle.addEventListener('click', () => {
        const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        applyTheme(nextTheme);
    });

    const skillsScrollContainer = document.querySelector('.skills-scroll-container');
    const scrollButtons = document.querySelectorAll('.skills-scroll-btn');
    const scrollByAmount = () => {
        if (!skillsScrollContainer) return 320;
        const card = skillsScrollContainer.querySelector('.skill-card');
        return (card ? card.offsetWidth : 320) + 16;
    };

    scrollButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.classList.contains('skills-scroll-prev') ? -1 : 1;
            skillsScrollContainer.scrollLeft += direction * scrollByAmount();
        });
    });

    const projectsScrollContainer = document.querySelector('.project-slider');
    const projectScrollButtons = document.querySelectorAll('.projects-scroll-btn');
    const projectScrollByAmount = () => {
        if (!projectsScrollContainer) return 320;
        const slide = projectsScrollContainer.querySelector('.project-slide');
        return (slide ? slide.offsetWidth : 320) + 16;
    };

    projectScrollButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.classList.contains('projects-scroll-prev') ? -1 : 1;
            projectsScrollContainer.scrollLeft += direction * projectScrollByAmount();
        });
    });
})();