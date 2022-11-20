var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var p = this.nextElementSibling;
    if (p.style.maxHeight){
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + "px";
    } 
  });
}