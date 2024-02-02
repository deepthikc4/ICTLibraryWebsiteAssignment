
var email=document.getElementById('loginEmail1');
var pwd=document.getElementById('loginPassword');
var emailmsg=document.getElementById('loginemailmsg');
var pwdmsg=document.getElementById('loginpwdmsg');
var loginpwdstrengthmsg=document.getElementById('loginpwdstrengthmsg');


function validateLoginPage()
{

// email validation
var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/ 
var regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

let isvalid= true;

if(regexp.test(email.value)) 
{
  
    emailmsg.innerText="email is valid";
    emailmsg.style.color='green';
    
}
else{
    emailmsg.innerText="email is invalid";
    emailmsg.style.color='red';
    isvalid= false;
}

// password validation
//  Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number         


if(regexp1.test(pwd.value)) 
{
 
    pwdmsg.innerText="password is valid";
    pwdmsg.style.color='green';


   
// if((pwd.value.length>=12))
// {
//     loginpwdstrengthmsg.innerText="password is strong";
//     loginpwdstrengthmsg.style.color='green';
   
   
// }
// else if (pwd.value.length>=8)
// {

//     loginpwdstrengthmsg.innerText="password strength is medium";
//     loginpwdstrengthmsg.style.color='orange';
// }
// else
// {
    

//         loginpwdstrengthmsg.innerText="password strength is poor";
//         loginpwdstrengthmsg.style.color='red';

// }

    
}
else{
    pwdmsg.innerText="password is invalid";
    pwdmsg.style.color='red';
    isvalid= false;
}


return isvalid;
}
//  Indicate the strength(strong, medium, poor) of the password using different colors(green, orange, red)




function checkstrengthpwd()
{

    loginpwdstrengthmsg.innerHTML = "";

if (pwd.value.length < 8) {
         loginpwdstrengthmsg.innerHTML = "Password is too short";
         loginpwdstrengthmsg.style.color='red';
        return;
      }

      // uppercase letters
      if (/[A-Z]/.test(pwd.value)) {
         loginpwdstrengthmsg.innerHTML += "Contains uppercase letters. ";
      }

      //  lowercase letters
      if (/[a-z]/.test(pwd.value)) {
         loginpwdstrengthmsg.innerHTML += "Contains lowercase letters. ";
      }

      //  numbers
      if (/\d/.test(pwd.value)) {
        loginpwdstrengthmsg.innerHTML += "Contains numbers. ";
      }

      //  special characters
      if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd.value)) {
         loginpwdstrengthmsg.innerHTML += "Contains special characters. ";
      }
    if((pwd.value.length>=12))
    {
        loginpwdstrengthmsg.innerHTML += "password is strong";
        loginpwdstrengthmsg.style.color='green';
       
       
    }
    else if (pwd.value.length>=8)
    {
    
        loginpwdstrengthmsg.innerHTML += "password strength is medium";
        loginpwdstrengthmsg.style.color='orange';
    }
    else
    {
        
    
            loginpwdstrengthmsg.innerHTML += "password strength is poor";
            loginpwdstrengthmsg.style.color='red';
    
    }
}