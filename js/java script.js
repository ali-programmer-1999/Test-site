let nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 10){
        nav.classList.add("stiky");
    }
    else{
        nav.classList.remove("stiky");
    }
}
);
