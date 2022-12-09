const menu = document.getElementById("menu-btn");
const sideBar = document.getElementById("closeMenu");
const up = document.getElementById('uPTo');

const displayMenu =()=>{
 document.getElementById("sidebar").style.display = "flex"; 
}

const closeMenu = ()=>{
  document.getElementById("sidebar").style.display = "none";
}
menu.onclick = displayMenu; 
sideBar.onclick = closeMenu;



const upTo = () => {
  window.scroll({
  top: 0,
    behavior: 'smooth'
  });
}

up.onclick = upTo;
