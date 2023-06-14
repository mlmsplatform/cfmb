
const nav = document.querySelector(".navbar");
fetch("navbar.html")
.then( res => res.text())
.then(data=>{
    nav.innerHTML = data
})

const footer = document.querySelector(".footer");
fetch("footer.html")
.then( res => res.text())
.then(data=>{
    footer.innerHTML = data
})


function onClickFunction(){
    document.querySelector(".menu").classList.toggle("cross");
    // console.log("doc",document.querySelector(".menu"));
    // console.log("doc",document.querySelector(".nav-list"))
    document.querySelector(".nav-list").classList.toggle("nav-list-shown");
}