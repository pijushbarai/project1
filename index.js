var element = document.getElementById("loginbtn");
// element.addEventListener("click", function(){ alert("Hello World!"); });

element.addEventListener("click",()=>{
    alert("I am an alert box!");
    element.innerHTML = "ball";
    document.getElementById("passid").innerHTML = "ball";
    // document.getElementById("name").innerHTML = "ball";
});


