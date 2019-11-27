window.addEventListener('resize', adjustMenu);

function adjustMenu() {
    var menu = document.getElementById("nav-main");
    if (window.innerWidth < 760) {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function toggleMenu() {
    var menu = document.getElementById("nav-main");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

adjustMenu();