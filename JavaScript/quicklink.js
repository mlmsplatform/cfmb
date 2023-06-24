const liSection = document.querySelectorAll('.selection li');
const filtercards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
}

liSection.forEach((li) =>
    li.addEventListener('click', filtercards)
)

const content = document.querySelector(".content");
fetch("quick/career.html")
.then( res => res.text())
.then(data=>{
    content.innerHTML = data
})

function career(){
    fetch("quick/career.html")
    .then( res => res.text())
    .then(data=>{
        content.innerHTML = data
    })
}

function research(){
    fetch("quick/research.html")
    .then( res => res.text())
    .then(data=>{
        content.innerHTML = data
    })
}

function blog(){
    fetch("quick/blog.html")
    .then( res => res.text())
    .then(data=>{
        content.innerHTML = data
    })
}

function support(){
    fetch("quick/support.html")
    .then( res => res.text())
    .then(data=>{
        content.innerHTML = data
    })
}

function faq(){
    fetch("quick/faq.html")
    .then( res => res.text())
    .then(data=>{
        content.innerHTML = data
    })
}
