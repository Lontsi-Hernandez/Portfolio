/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i = 0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tabs => {
    tabContents.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
   modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
});
/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]'); // Ajout de la virgule pour déclarer la variable "sections"

function scrollActive() {
  const scrollY = window.pageYOffset; // Correction de la faute de frappe ("pagevoffset" à "pageYOffset")

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id"); // Correction de la faute de frappe ("sectionId" au lieu de "sectionId")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link'); // Ajout de la concaténation correcte
    } else {
      document.querySelector('.nav__menu a[href=' + sectionId + ']').classList.remove('active-link'); // Ajout de la concaténation correcte
    }
  });
} 

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){

 
    
    const nav =  document.getElementById('header');
    
    if(this.scrolly >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag if(this.scrolly >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    
  window.addEventListener('scroll', scrollHeader);
}
/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
     const scrollUp = document.getElementById('scroll-up');
    
     // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the sc if(this.scrolly >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scr
     if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
    
    
    } 
    
     window.addEventListener('scroll', scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';

const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)

const selectedTheme = localstorage.getItem('selected-theme');

const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";


if (selectedTheme) {

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
themeButton.classList[selectedIcon === 'fa-moon' ? "add" : 'remove'](iconTheme)

}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toogle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
});