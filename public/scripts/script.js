function initMenuMobile() {
    const navbar = document.getElementById("navbar");
    if (navbar.className === "menu") {
        navbar.className += "responsive";
    } else {
      navbar.className = "menu-mobile";
    }
}