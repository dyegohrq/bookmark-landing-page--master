const burger = document.getElementById('burger')
const headerContainer = document.getElementById('header_container')
const navMenuMobile = document.getElementById('nav_menu_mobile')
const list = document.getElementById('list')
const li = list.querySelectorAll('#list li')

navMenuMobile.addEventListener('click', animarMenu)

function animarMenu() {
    headerContainer.classList.toggle('active')
    burger.classList.toggle('open')
}

function selectItem() {
    li.forEach((li) => {
        li.classList.remove('active_li')
    })

    this.classList.add('active_li')
}


li.forEach((li) => {
    li.addEventListener('click', selectItem)
})