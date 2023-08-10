let menuBtn = document.querySelector("#menu-btn");
let menuContainer = document.querySelector("#menu-container");
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
    } else if (!workOpen) {
        workList.style.visibility = "visible";
    }
    workOpen = !workOpen;
}
