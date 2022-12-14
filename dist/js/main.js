//Select DOM items

const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const navItmes=document.querySelectorAll('.nav-item');


//Set initial state of menu
let showMenu=false;

menuBtn.addEventListener('click',toggleMenu)
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItmes.forEach(item=>item.classList.add('show'));
        //Set Menu state
        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItmes.forEach(item=>item.classList.remove('show'));
        //Set Menu state
        showMenu=false;
    }
}
