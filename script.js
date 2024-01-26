let password = document.getElementById("password");
let passwordIcon = document.getElementById("password-icon");

passwordIcon.addEventListener("click", function(){
    if (password.type == "password") {
        password.type = "text"; 
        passwordIcon.src = "./Images/show_password.svg";   
    }else {
        password.type = "password";
        passwordIcon.src = "./Images/show-password-icon-26.jpg";
    }
})