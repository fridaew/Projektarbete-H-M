// function show(){
//     window.getComputedStyle(document.getElementById('#c1')).display="inline-block"
// }

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Läs mer";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Läs mindre";
      moreText.style.display = "inline";
    }
  }







