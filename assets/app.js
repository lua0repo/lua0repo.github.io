const root=document.body, btn=document.getElementById("theme");
const saved=localStorage.getItem("luther-theme");
if(saved==="dark") root.classList.add("darkmode");
btn.addEventListener("click",()=>{root.classList.toggle("darkmode");localStorage.setItem("luther-theme",root.classList.contains("darkmode")?"dark":"light")});
document.getElementById("year").textContent=new Date().getFullYear();
