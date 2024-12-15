//! ============================================================== NAVBAR STARTS ====================================================
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Navbar").style.top = "0";
  } else {
    document.getElementById("Navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

//! ============================================================== NAVBAR ENDS ====================================================
//! ============================================================== PRODUCT STARTS ====================================================
let redBtn = document.getElementById("Red");
let blueBtn = document.getElementById("Blue");
let blackBtn = document.getElementById('Black');
let bike = document.getElementById("ProductContainer");

redBtn.onclick  = function(){
    bike.style.backgroundImage = "url(./../ASSETS/IMAGES/Products/BMW/BMW1.png)";
}

blueBtn.onclick  = function(){
    bike.style.backgroundImage = "url(./../ASSETS/IMAGES/Products/BMW/BMW2.png)";
}

blackBtn.onclick  = function(){
    bike.style.backgroundImage = "url(./../ASSETS/IMAGES/Products/BMW/BMW3.png)";
}
//! ============================================================== PRODUCT ENDS ===================================================

