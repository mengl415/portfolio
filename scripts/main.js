let menuBtn = document.querySelector("#menu-btn");
let menuContainer = document.querySelector("#menu-container");
let mainMenu2 = document.querySelector("#main-menu-2");
let menuOpen = false;

let workBtn = document.querySelector("#work-btn");
let workList = document.querySelector("#work-list");
let workOpen = false;

function toggleMenu() {
    if (menuOpen) {
        menuContainer.style.top = "-100vh";
        menuBtn.style.backgroundColor = "var(--whiteColor)";
        menuBtn.style.color = "var(--textColor)";
        workList.style.visibility = "hidden";
        mainMenu2.style.borderTop = "none";
        workOpen = false;
    } else if (!menuOpen) {
        menuContainer.style.top = "0px";
        menuBtn.style.backgroundColor = "var(--textColor)";
        menuBtn.style.color = "var(--whiteColor)";
    }
    menuOpen = !menuOpen;
}

workBtn.addEventListener("click", toggleWork);
function toggleWork() {
    if (workOpen) {
        workList.style.visibility = "hidden";
        mainMenu2.style.borderTop = "1px solid transparent";
    } else if (!workOpen) {
        workList.style.visibility = "visible";
        mainMenu2.style.borderTop = "1px solid var(--textColor)";
    }
    workOpen = !workOpen;
}
