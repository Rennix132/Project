function selectCard(element, type) {
    console.log(`User selected category: ${type}`);
}

document.addEventListener('DOMContentLoaded', () => {
    
    //Theme Switcher
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    //Checking the saved theme
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light-mode') {
        body.classList.add('light-mode');
        if (themeBtn) themeBtn.innerText = "Dark Mode"; 
    } else {
        if (themeBtn) themeBtn.innerText = "Light Mode"; 
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
                themeBtn.innerText = "Dark Mode"; 
            } else {
                localStorage.removeItem('theme');
                themeBtn.innerText = "Light Mode";
            }
        });
    }

    //Mobile Menu
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.right = '20px';
              
                nav.style.background = getComputedStyle(document.documentElement).getPropertyValue('--card-bg');
                nav.style.padding = '20px';
                nav.style.borderRadius = '10px';
                nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
                nav.style.zIndex = '1000';
            }
        });
    }
});