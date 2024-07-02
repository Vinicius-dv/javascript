const mobile_btn = document.getElementById('mobile-btn')
const mobile_menu = document.getElementById('mobile-menu')
let mobileIcon = mobile_btn.querySelector('i');

const sections = document.querySelectorAll('section')
const nav_item = document.querySelectorAll('.nav-item')


mobile_btn.addEventListener('click',()=>{
    mobile_menu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")

 
})    

window.addEventListener('scroll',()=>{
    let current = ''

    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        const sectionHeigth = section.offsetHeight

        if(pageYOffset >= (sectionTop - sectionHeigth /3)){
            current = section.getAttribute('id')
        }
    })

    nav_item.forEach(li=>{
        li.querySelector('a').classList.remove('active')
        if(li.getAttribute('data-section')=== current) {
            li.querySelector('a').classList.add('active')
        }
    })
})


