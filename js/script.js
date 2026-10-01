const darkbutton = document.getElementById('darkmode');
const lightbutton = document.getElementById('lightmode');
const body = document.body;

/* If the saved theme is already dark, set it to dark mode */
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

/* Clicking dark button turns on dark-mode CSS */
 darkbutton.addEventListener('click', () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
 });

 /* Clicking light button turns off dark-mode CSS */
 lightbutton.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light')
 });