const menu = document.getElementById("menu-btn");
const sideBar = document.getElementById("closeMenu");

const displayMenu =()=>{
 document.getElementById("sidebar").style.display = "flex"; 
}

const closeMenu = ()=>{
  document.getElementById("sidebar").style.display = "none";
}
menu.onclick = displayMenu; 
sideBar.onclick = closeMenu;
