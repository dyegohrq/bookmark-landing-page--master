const burger = document.getElementById('burger')
const headerContainer = document.getElementById('header_container')
const navMenuMobile = document.getElementById('nav_menu_mobile')
const list = document.getElementById('list')
const li = list.querySelectorAll('#list li')
const faqs = document.querySelectorAll('.faq')
const body = document.getElementById('body')


navMenuMobile.addEventListener('click', animarMenu)

function animarMenu() {
    headerContainer.classList.toggle('active')
    burger.classList.toggle('open')

    if (headerContainer.classList == 'header_container active') {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
}

function selectItem() {
    li.forEach((li) => {
        li.classList.remove('active_li')
    })

    this.classList.add('active_li')
}


li.forEach((li) => {
    li.addEventListener('click', selectItem)

    li.addEventListener('click', (e) => {
        e.preventDefault()

        document.querySelectorAll('.group').forEach((div) => {
            div.classList.remove('ativo')
        })
    
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId).classList.add('ativo')
    })
})

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active_faq')
    })
})