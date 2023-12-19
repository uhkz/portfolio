//switch function
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme =rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (dataTheme === 'dark') ? 'light' : 'dark'

    rootElem.setAttribute('data-theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);