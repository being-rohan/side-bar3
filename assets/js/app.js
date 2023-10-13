cl= console.log;

const icon = document.getElementById("icon");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
const cancel = document.getElementById("cancel");


const toggleSidebar = ()=>{
    sidebar.classList.toggle("active");
    backdrop.classList.toggle("active2");
}

backdrop.addEventListener("click", toggleSidebar);
cancel.addEventListener("click", toggleSidebar);
icon.addEventListener("click", toggleSidebar);