let abtMeSectionEl = document.getElementById("about-me-section")
let projectSectionEl = document.getElementById("projects-section")
projectSectionEl.classList.add("d-none")


let aboutMeSectionLinkEl = document.getElementById("aboutMeSectionLink")
let projectSectionLinkEl = document.getElementById("projectSectionLink")

let navbarNavAltMarkupEl = document.getElementById("navbarNavAltMarkup")


projectSectionLinkEl.addEventListener("click", function() {
    navbarNavAltMarkupEl.classList.remove("show")
    // Highlight selected link
    if(aboutMeSectionLinkEl.classList.contains("active")) {
        aboutMeSectionLinkEl.classList.remove("active")
    }

    if(!projectSectionLinkEl.classList.contains("active")){
        projectSectionLinkEl.classList.add("active")
    }
    



    if (projectSectionEl.classList.contains("d-none")){
        projectSectionEl.classList.remove("d-none")
    }

    if(!abtMeSectionEl.classList.contains("d-none")){
        abtMeSectionEl.classList.add("d-none")
    }
})

aboutMeSectionLinkEl.addEventListener("click", function() {
    navbarNavAltMarkupEl.classList.remove("show")
    projectSectionLinkEl.classList.remove("active")
    aboutMeSectionLinkEl.classList.add("active")

    abtMeSectionEl.classList.remove("d-none")
    projectSectionEl.classList.add("d-none")
})