/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('clicked-sowsidebar')
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })
        target.classList.add("skills__active")

        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })
        tab.classList.add("skills__active")
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

var mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => {
        l.classList.remove('active__work')
        this.classList.add('active__work')
    })
}

linkWork.forEach(l => {
    l.addEventListener('click', activeWork)
})
/*===== Work Popup =====*/

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    // console.log(document.querySelector('.portfolio__popup').classList.toggle('.open'))
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);

})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');

        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
        navMenu.classList.remove('show-sidebar');
    })
}
/*=============== SHOW SCROLL UP ===============*/
sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    console.log('send messasge')
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const message = document.getElementById('message')
  
    if(email.value != ''){
        sendEmail(email.value,name.value,message.value);
    }
    console.log(email.value,name.value,message.value)
})

function sendEmail(email,name,message) {
    // console.log(Email)
    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "dakshgamer167@gmail.com",
    //   Password: "E6B2FC1793EC151C2BE62C0E4FC2159A7580",
    //   To: 'ayushbais167@gmail.com',
    //   From: "ayushbais167@gmail.com",
    //   Subject: "Sending Email using javascript",
    //   Body: "Well that was easy!!",
    // })
    // .then(function (message) {
    //     console.log(message)
    //     alert(message)
    //   });

    var templateParams = {
        name: name,
        email:email,
        message: message
    };
     
    emailjs.send('service_awkdjvi', 'template_xx4hgo6', templateParams)
        .then(function(response) {
            alert('message sent successfuuly');
            location.reload()

           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
