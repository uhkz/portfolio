let localS = localStorage.getItem('theme'),
    themeToSet = localS



      if (!localS) {
       themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }

      document.documentElement.setAttribute('data-theme', themeToSet)