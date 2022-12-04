let coll = document.getElementsByClassName("collapse");
let i;
/*collapsible button */
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let p = this.nextElementSibling;
    if (p.style.maxHeight){
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + "px";
    } 
  });
}
/*form validation */
function formValidation(){
  let x = document.forms["form"]["email"].value;
  if(x == ""){
  alert("Please fill in your email");
  return false
}
  else{

    document.querySelector("#email").value = "";
    alert("You have subscribed to our newsletter!");

  }
}

