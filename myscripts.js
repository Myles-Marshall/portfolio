const projectButton = document.getElementById('view-button');
const backButton = document.getElementById('back-button')
const hiddenContent = document.getElementById('hidden');
const projects = document.getElementById('projects')
const mainContent = document.getElementById('main-content');
const mainStyle = mainContent.style
const hiddenStyle = hiddenContent.style



// projectButton.addEventListener("click", function() {
//     mainContent.classList.add("fade-out")
//     console.log(mainContent)
//     fadeMain.style.animationPlayState =;
// })


projectButton.addEventListener("click", function() {
    mainStyle.animation = "fadeUp 2.3s linear forwards"
    projects.style.animation = "fadeIn 1.5s ease-out forwards"
    // mainStyle.display = "none"
})

backButton.addEventListener("click", function() {
    mainStyle.animation = "fadeDown 1.5s ease-out forwards"
    projects.style.animation = "fadeOut 2.3s linear forwards"
})