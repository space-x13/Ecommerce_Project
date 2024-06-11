// making the menu bar and navbar clickable
const menu = document.getElementById("bars");
const nav = document.getElementById("navbar");
// making the close button clickable
const exist = document.getElementById("close");

// condition to make the navbar open
if (menu){
    menu.addEventListener("click", () =>{
        nav.classList.add("active")
    })
}

// condition to make the navbar close or quit
if (exist){
    exist.addEventListener("click", () =>{
        nav.classList.remove("active")
    })
}