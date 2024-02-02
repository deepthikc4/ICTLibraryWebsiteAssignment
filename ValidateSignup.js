

var email=document.getElementById('SignUpEmail1');
var pwd=document.getElementById('SignUpPassword');
var phone=document.getElementById('SignUpPhone');

var emailmsg=document.getElementById('SignUpemailmsg');
var pwdmsg=document.getElementById('SignUppwdmsg');
var phonemsg=document.getElementById('Signphonemsg');
var Signuppwdstrengthmsg=document.getElementById('Signuppwdstrengthmsg');


function validateSignupPage()
{
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/ 
    var regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    var regexp3=/^\d{3}[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let isvalid= true;

// email validation




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

if(regexp1.test(pwd.value)) 
{
 
    pwdmsg.innerText="password is valid";
    pwdmsg.style.color='green';

//     if(pwd.value.length==8)
// {
//     Signuppwdstrengthmsg.innerText="password strength is poor";
//     Signuppwdstrengthmsg.style.color='red';
// }
// else if((pwd.value.length>8) && (pwd.value.length<=10))
// {
//     Signuppwdstrengthmsg.innerText="password strength is medium";
//     Signuppwdstrengthmsg.style.color='orange';
// }
// else if (pwd.value.length>10)
// {

//     Signuppwdstrengthmsg.innerText="password is strong";
//     Signuppwdstrengthmsg.style.color='green';
// }
    
}
else{
    pwdmsg.innerText="password is invalid";
    pwdmsg.style.color='red';
    isvalid= false;
}



//  Phone number Validation -Accept numbers only, Should contain 10 numbers only,
// Should accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
//  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/



if(regexp3.test(phone.value)) 
{
  
    phonemsg.innerText="phone number is valid";
    phonemsg.style.color='green';
    
}
else{
    phonemsg.innerText="phone number is invalid";
    phonemsg.style.color='red';
    isvalid= false;
}
return isvalid;

}

function checkstrengthpwd()
{

    Signuppwdstrengthmsg.innerHTML = "";

if (pwd.value.length < 8) {
         Signuppwdstrengthmsg.innerHTML = "Password is too short";
         Signuppwdstrengthmsg.style.color='red';
        return;
      }

      // uppercase letters
      if (/[A-Z]/.test(pwd.value)) {
        Signuppwdstrengthmsg.innerHTML += "Contains uppercase letters. ";
      }

      //  lowercase letters
      if (/[a-z]/.test(pwd.value)) {
        Signuppwdstrengthmsg.innerHTML += "Contains lowercase letters. ";
      }

      //  numbers
      if (/\d/.test(pwd.value)) {
        Signuppwdstrengthmsg.innerHTML += "Contains numbers.";
      }

      //  characters
      if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd.value)) {
        Signuppwdstrengthmsg.innerHTML += "Contains special characters. ";
      }
    if((pwd.value.length>=12))
    {
        Signuppwdstrengthmsg.innerHTML += "password is strong";
        Signuppwdstrengthmsg.style.color='green';
       
       
    }
    else if (pwd.value.length>=8)
    {
    
        Signuppwdstrengthmsg.innerHTML += "password strength is medium";
        Signuppwdstrengthmsg.style.color='orange';
    }
    else
    {
        
    
            Signuppwdstrengthmsg.innerHTML += "password strength is poor";
            Signuppwdstrengthmsg.style.color='red';
    
    }
}