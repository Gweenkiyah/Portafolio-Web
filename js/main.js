/*Show sidebar*/
const navMenu= document.getElementById('sidebar'),
    navToggle= document.getElementById('nav-toggle'),
    navClose= document.getElementById('nav-close')

/*Sidebar show*/
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*Show hidden*/
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*Mixitup Filter Portfolio*/
let mixerPortafolio = mixitup('.project_container', {
    selectors: {
        target: '.project_card'
    },
    animation: {
        duration: 300
    }
});

/*link active project*/
const linkProject= document.querySelectorAll('.project_item')

function activeProject() {
    linkProject.forEach(L=> L.classList.remove('active-project'))
    this.classList.add('active-project')
        
}
linkProject.forEach(L=> L.addEventListener("click", activeProject))

/*Project Popup*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_button")) {
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})

function toggleProjectPopup() {
    document.querySelector(".project_popup").classList.toggle("open");
}

document.querySelector(".project_popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem) {
    document.querySelector(".pp_thumbnail img").src= projectItem.querySelector(".project_img").src;
    document.querySelector(".project_popup-subtitle span").innerHTML= projectItem.querySelector(".project_title").innerHTML;
    document.querySelector(".project_popup-body").innerHTML= projectItem.querySelector(".project_item-details").innerHTML;
}

/*Input animation*/
const inputs= document.querySelectorAll(".input");

function focusFunc() {
    let parent= this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent= this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*Scroll sections active link*/
const sections= document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let srcollY= window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight= current.offsetHeight;
        const sectionTop= current.offsetTop - 50,
        sectionId= current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.add("active-link")
        }else {
            document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.remove("active-link")
        }
    })
}
