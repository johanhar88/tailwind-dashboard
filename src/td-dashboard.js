// Dark Mode
const switcher = document.querySelector('#theme-toggle')
const html = document.querySelector('html')

switcher.addEventListener('click', function () {
    switcher.checked ? html.classList.add('dark') : html.classList.remove('dark')
})
// END