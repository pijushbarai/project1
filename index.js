// var element = document.getElementById("loginbtn");
// element.addEventListener("click", ()=> {
//     alert("ok");
//    //// document.getElementById("log_in_page").style.display = "block";
//    document.getElementById("ll").style.background==""
//     document.getElementById("left_property").innerHTML = document.getElementById("log_in_page").innerHTML;
//     //document.getElementById("lefft_property").style.backgroundcolor=="#ff77ee";
    
// });


const loginHtml = `
<div class="login" id="log_in_page">
<div class="logo">
  <img src="image/logo.svg" alt="icon" class="icon_design">
</div>
<div class="appname">
  <p style="font-family: raleway;" id="name">lenden.</p>
</div>


<p class="sign_up login_text" id="ll">Log in.</p>
<p class="text-muted ml128">Login with your data that you entered during regestration</p>

<div class="log_in_form ml128">
  <div class="email_input">
    <label for="e-mail">Your e-mail</label><br>
    <input class="input_form" type="text" id="e-mail" name="e-mail" placeholder="name@example.com"><br>
  </div>
  <div class="password_input">
    <label for="password">Password</label><br>
    <input class="input_form" style="margin-bottom: 18px;" type="password" id="password" name="password"
      placeholder="At least 8 characters">
  </div>
</div>

<div class="main ml128">
  <div class="d1"></div>
  <div class="dm"></div>
  <div class="dm"></div>
  <div class="dm"></div>
  <div class="dl"></div>
</div><br>

<input type="checkbox" id="termcheck" name="term&condition" value="accepted" class="ml128 ckbox">
<p class="term_condition_text text-muted">Keep me logged in </p>


<button class="login_btn ml128" id = "logInBtn" >Log in</button>

<div class="fotter_part">
  <p>Dont have an account?<a href="" id="signUpBtn" >Sign up</a></p>
</div>
<div class="forget_password">
  <a href="" class="forget_pass" id="forgetPasswordBtn" >Forget password?</a>
</div>
`;

const signupHtml =`
<div class="col left_signup basic_property" id="left_property">
<div class="logo">
  <img src="image/logo.svg" alt="icon" class="icon_design">
</div>
<p class="app_name" style="font-family: raleway;">lenden.</p>
<p class="sign_up">Sign up.</p>
<p class=" text-muted ml128">Give us some of your information to get free access to lenden </p>
<!-- sign_up form start -->
<div class="sign_up_form">
  <form action="/action_page.php" method="get" class="ml128">
    <label for="name">Your name</label><br>
    <input class="input_form" type="text" id="name" name="name" placeholder="Full-name"><br>
    <label for="e-mail">Your e-mail</label><br>
    <input class="input_form" type="text" id="e-mail" name="e-mail" placeholder="name@example.com"><br>
    <label for="password" id="passid">Password</label><br>
    <input class="input_form" style="margin-bottom: 18px;" type="password" id="password" name="password"
      placeholder="At least 8 characters">

  </form>
</div>
<!-- sign_up form end here -->
<div class="main ml128">
  <div class="d1"></div>
  <div class="dm"></div>
  <div class="dm"></div>
  <div class="dm"></div>
  <div class="dl"></div>
</div><br>


<!-- check box and an muted text -->
<input type="checkbox" id="termcheck" name="term&condition" value="accepted" class="ml128 ckbox">
<p class="term_condition_text text-muted">By creating an account you are aggree to the <a href=""> terms of use
  </a>and our <a href="">privacy policy.</a> </p>

<!-- button start here -->
<button class="btn-design ml128">Create account</button>
<!-- button end here -->
<p class="sign_in_information">Already have an account?<a style="text-decoration: none;" href=""
    id="loginbtn">Login</a></p>
</div> 
`;


document.getElementById('loginbtn').addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("left_property").innerHTML = loginHtml;
    //alert("Hi");
    //document.getElementById('first_row').innerHTML = loginHtml;
    // console.log('click')
})

document.getElementById("signUpBtn").addEventListener("click",(f) => {
  f.preventDefault();
  alert("HI");
})

document.getElementById("createAccountBtn").addEventListener("click", () =>{
  alert("Account created");
})

document.getElementById("forgetPasswordBtn").addEventListener("click", ()=>{
  alert("forget password");
})
document.getElementById("logInBtn").addEventListener("click", ()=>{
  alert("Hi login button");
})