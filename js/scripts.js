/* phone/tablet size navbar animation */
const navSlide = () => {
    const tabs = document.querySelector('.tabs');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    tabs.addEventListener('click', () => {
     // Toggle Nav
     nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //Tabs Animation
    tabs.classList.toggle('toggle');

   });

}

navSlide();
/* image popup gallery */
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getFullImgUrlPos = getFullImgUrl.split("/images/gallery/");
            let setNewImgUrl = getFullImgUrlPos[1].replace('")','');
            
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "images/gallery/" + setNewImgUrl);
            
            

        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
}
