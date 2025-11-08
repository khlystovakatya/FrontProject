document.addEventListener('DOMContentLoaded', () => {
  class ThemeToggle {
    constructor() {
      this.button = document.querySelector('.nav__theme-button');
      this.html = document.documentElement;
      this.currentTheme = window.localStorage.getItem('theme') || 'light';

      console.log('Initial theme:', this.currentTheme);
      this.init();
    }

    init() {
      this.setTheme(this.currentTheme);
      if (this.button) {
        this.button.addEventListener('click', () => this.toggleTheme());
      }
    }

    setTheme(theme) {
      console.log('Setting theme to:', theme);
      this.html.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
      this.currentTheme = theme;
    }

    toggleTheme() {
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      console.log('Toggling to:', newTheme);
      this.setTheme(newTheme);
    }
  }

  new ThemeToggle();
});
