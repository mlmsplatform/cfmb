function onClickFunction(){
    document.querySelector(".menu").classList.toggle("cross");
    // console.log("doc",document.querySelector(".menu"));
    // console.log("doc",document.querySelector(".nav-list"))
    document.querySelector(".nav-list").classList.toggle("nav-list-shown");
}

const nav = document.querySelector(".navbar");
fetch("html/navbar.html")
.then( res => res.text())
.then(data=>{
    nav.innerHTML = data
})

const footer = document.querySelector(".footer");
fetch("html/footer.html")
.then( res => res.text())
.then(data=>{
    footer.innerHTML = data
})