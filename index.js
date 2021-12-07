var element = document.getElementById("loginbtn");


var maindiv = document.getElementById("left_property");
var login = document.getElementById("log_in_page");

element.addEventListener("click", ()=> {
    var maindiv = document.getElementById("left_property");
    var login = document.getElementById("log_in_page");
    login.style.display = "block";
    // maindiv.style.display = "none"
    maindiv.textContent = login.value;
   alert("hiii")
});
