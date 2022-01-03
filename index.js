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

    
        <button class="login_btn ml128">Log in</button>
        
        <div class="fotter_part">
          <p>Dont have an account?<a href="">Sign up</a></p>
        </div>
        <div class="forget_password">
          <a href="" class="forget_pass">Forget password?</a>

        </div>

      </div>
`;


document.getElementById('loginbtn').addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("left_property").innerHTML = loginHtml;
    //document.getElementById('first_row').innerHTML = loginHtml;
    // console.log('click')
})