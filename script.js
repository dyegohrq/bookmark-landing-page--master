const burger = document.getElementById('burger')
const headerContainer = document.getElementById('header_container')
const navMenuMobile = document.getElementById('nav_menu_mobile')

navMenuMobile.addEventListener('click', animarMenu)

function animarMenu() {
    headerContainer.classList.toggle('active')
    burger.classList.toggle('open')
}