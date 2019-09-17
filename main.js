var addInput = document.getElementById("add-input");
var updateInput = document.getElementById("update-input");

var addBtn = document.getElementById("add");
var updateBtn = document.getElementById("update");

addBtn.addEventListener("click", function(){
   updateInput.style.display = "none";
   addInput.style.display = "flex";
})

updateBtn.addEventListener("click", function(){
   addInput.style.display = "none";
   updateInput.style.display = "flex";
})