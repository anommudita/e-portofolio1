// console.log("JS jalan bro!");

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TYPED JS ===============*/



/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

        if (!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data, .resume__content:nth-child(2)`, { delay: 300, origin: 'bottom' })

sr.reveal(`.about__content, .contact__content`, { origin: 'bottom' })
sr.reveal(`.about__image, .contact__form, .container2,.nilaiReveal`, { delay: 300 })

sr.reveal(`.projects__card`, { interval: 100 })




