// script.js

//Theming: Toggling the browser window from Light mode to Dark mode
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function () {
        toggleTheme();
    });

    function toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        // Toggle between 'dark' and 'light' themes
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Update the data-theme attribute on the root element
        root.setAttribute('data-theme', newTheme);

        // Update CSS variables based on the theme
        updateThemeVariables(newTheme);
    }

    function updateThemeVariables(theme) {
        const root = document.documentElement;

        if (theme === 'dark') {
            // Dark theme variables
            root.style.setProperty('--main-bg-color', '#333');
            root.style.setProperty('--main-txt-color', '#fff');
            root.style.setProperty('--header-bg-color', '#555');
            root.style.setProperty('--header-txt-color', '#fff');
            root.style.setProperty('--box-bg-color', '#444');
            root.style.setProperty('--box-main-color', '#90caf9');
            root.style.setProperty('--box-shadow-color', '#333');
        } else {
            // Light theme variables (default values)
            root.style.setProperty('--main-bg-color', '#f5f5f5');
            root.style.setProperty('--main-txt-color', '#333');
            root.style.setProperty('--header-bg-color', '#4285f4');
            root.style.setProperty('--header-txt-color', '#fff');
            root.style.setProperty('--box-bg-color', '#fff');
            root.style.setProperty('--box-main-color', '#4285f4');
            root.style.setProperty('--box-shadow-color', '#4285f4');
        }
    }
});
