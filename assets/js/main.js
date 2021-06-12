/* MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('navToggle', 'navMenu')

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    // ACTIVE LINK
    navLink.forEach(n => n.classList.remove('active'))

    this.classList.add('active')

    // REMOVE MENU MOBILE
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))