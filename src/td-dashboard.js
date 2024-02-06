// Dark Mode
const switcher = document.querySelector('#theme-toggle')
const html = document.querySelector('html')

switcher.addEventListener('click', function () {
    switcher.checked ? html.classList.add('dark') : html.classList.remove('dark')
})
// END

// Tab
const btnConvo = document.getElementById('drill-thread')
const profile = document.getElementById('profile-tab');
const overview = document.getElementById('thread-tab');

$(function () {
    $(btnConvo).click(function () {
        $(overview).prop('aria-selected',true);
    });
});

// function clickTrigger() {
//     localStorage.setItem('buttonClicked', 'true');
//     window.location.href = 'index2.html';
// }

// window.onload = function () {
//     var buttonClicked = localStorage.getItem('buttonClicked');
//     if (buttonClicked === 'true') {
//         var button = document.getElementById('thread-tab');
//         button.click();
//         console.log(buttonClicked);
//         localStorage.removeItem('buttonClicked');
//     }
// }
