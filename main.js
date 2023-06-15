const nav = document.getElementById('current_nav');
window.addEventListener('scroll', ()=>{
    const position = window.pageYOffset;
    if(position > 10){
        nav.classList.add('active_nav');
        console.log("show");
    }else{
        nav.classList.remove('active_nav');
        console.log("hidden");
    }
    console.log(nav.classList)
})

var banner= document.getElementById('signbtn');
signbtn.style.display="none";

var newDiv= document.createElement('div')
