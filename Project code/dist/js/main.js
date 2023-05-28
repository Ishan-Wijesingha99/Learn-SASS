const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn-burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav-item')

let showMenu = false

const toggleMenu = () => {
  console.log('helloos')

  if(!showMenu) {
    hamburger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach(htmlItem => htmlItem.classList.add('open'))

    showMenu = true
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach(htmlItem => htmlItem.classList.remove('open'))

    showMenu = false
  }
}

menuBtn.addEventListener('click', toggleMenu)

