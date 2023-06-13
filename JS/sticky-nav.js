var navBar = document.querySelector(".navbar");
var cover = document.querySelector(".cover");

// console.log("doc",document.querySelector(".navbar"))
window.onscroll = function(){
    if(window.pageYOffset >= cover.offsetTop){
        navBar.classList.add("sticky");   
    }
    // else{
    //      navBar.classList.remove("sticky");
    // }
}