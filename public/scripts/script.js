function initMenuMobile() {
    const navbar = document.getElementById("navbar");
    if (navbar.className === "menu") {
        navbar.className += " responsive";
        console.log('abriu');
    } else {
      navbar.className = "menu";
      console.log('fechou');
    }
}