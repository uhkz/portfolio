let localS = localStorage.getItem('theme');

      if (localS === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
      }