function initMenuMobile() {
    const links = document.getElementById("hidden");
    if (links.style.display === 'none') {
      links.style.display = 'block';
    } else {
      links.style.display = 'none';
    }
}

// function initMenuMobile() {
//   const navbar = document.getElementById("navbar");
//   if (navbar.className === "menu") {
//       navbar.className += " responsive";
//       console.log('abriu');
//   } else {
//     navbar.className = "menu";
//     console.log('fechou');
//   }
// }