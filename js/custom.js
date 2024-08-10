var x = document.getElementById("btn");
x.addEventListener("click", myFunction, false);

function myFunction() {
  var y = document.getElementById("toggle-bar");
  if ( y.className === "active" ){
    y.className = "";
  }else {
    y.className = "active";
  }
  
};

function dltFun(){
  var z = document.getElementById("toggle-bar");
  
  if ( z.className === "active" ){
    z.className = "";
  }else {
    z.className = "active";
  }
  
}