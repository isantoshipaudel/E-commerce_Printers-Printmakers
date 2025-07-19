/*javascript program to check if the SIGN UP form is filled and has a strong password*/
function signUp(){
    var username = document.forms["signUpForm"]["uname"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var confrimpassword = document.forms["signUpForm"]["compassword"].value;

    if(username=="" || email=="" || password=="" || confrimpassword==""){
        alert("Please fill all the forms.")
    }
    else{
        if(password.length <8){
            alert("Password must be atleast 8 letters")
        }
        
        if(!/[\W_]/.test(password)){
            alert("Password must contain'Symbols, Uppercase, Lowercase, Number'")
        }
        else if(!/[A-Z]/.test(password)){
            alert("Password must contain'Symbols, Uppercase, Lowercase, Number'")
        }
        else if(!/[a-z]/.test(password)){
            alert("Password must contain'Symbols, Uppercase, Lowercase, Number'")
        }
        else if(!/\d/.test(password)){
            alert("Password must contain'Symbols, Uppercase, Lowercase, Number'")
        }
        else if(password!=confrimpassword){
            alert("Your password doesn't match above password. Please try again.")
        }
        else{
            alert("Thank you for Signing Up.")
        }
    }
}

/*javascript program to check if the SIGN IN form is filled and has a strong password*/
function signin(){
    var username = document.forms["signInForm"]["Uname"].value;
    var email = document.forms["signInForm"]["Email"].value;
    var password = document.forms["signInForm"]["Password"].value;
    if(username=="" || email=="" || password==""){
        alert("Please fill all the forms.")
        
    }
    else{
        if(password.length <8){
            alert("Password must be atleast 8 letters")
        }
        else{
            alert("Thank you for Signing In.")
        }
    }
}

/*TOGGLING SIGN UP & SIGN IN */
function signIn(){
    var mainSign=document.getElementById("mainSign")
    var mainSignUp=document.getElementById("mainSignUp")
    if(mainSign.style.display=="none"){
        mainSign.style.display="block";
        mainSignUp.style.display="none";
    }
    else{
        mainSign.style.display="none";
        mainSignUp.style.display="block";
        
    }
}
document.getElementById("mainSign").style.display="block";