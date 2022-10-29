let nameUser = document.querySelector("#name");
let emailUser = document.querySelector("#email");
let ageUser = document.querySelector("#age");
let phoneUser = document.querySelector("#phone");
let passwordUser = document.querySelector("#password");
let RePsswordUser = document.querySelector("#RePssword");
let submitBtn = document.querySelector(".submit");
let msgName = document.querySelector(".msgName");
let msgemail = document.querySelector(".msgEmail");
let msgNumber = document.querySelector(".msgNumber");
let msgAge = document.querySelector(".msgAge");
let msgPassword = document.querySelector(".msgPassword");




function userNameValidation() {
  let reg = /^[a-zA-Z]{3,}/.test(nameUser.value);
  if (reg && nameUser.value != "") {
    nameUser.classList.add("is-valid");
    nameUser.classList.remove("is-invalid");
    msgName.classList.replace("d-block", "d-none");
    return true;
  } else {
    nameUser.classList.remove("is-valid");
    nameUser.classList.add("is-invalid");
    msgName.classList.replace("d-none", "d-block");
    return false;
  }
}

function EmailValidation() {
  let reg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[a-zA-Z]{2,4}/.test(emailUser.value);
  if (reg && emailUser.value != "") {
    emailUser.classList.add("is-valid");
    emailUser.classList.remove("is-invalid");
    msgemail.classList.replace("d-block", "d-none");
    return true;
  } else {
    emailUser.classList.add("is-invalid");
    emailUser.classList.remove("is-valid");
    msgemail.classList.replace("d-none", "d-block");
    return false;
  }
}

function passWordValidation() {
  let reg = /^.{8,}/.test(passwordUser.value);
  if (reg && passwordUser.value != "") {
    passwordUser.classList.add("is-valid");
    passwordUser.classList.remove("is-invalid");
    msgPassword.classList.replace("d-block", "d-none");
    return true;
  } else {
    passwordUser.classList.add("is-invalid");
    passwordUser.classList.remove("is-valid");
    msgPassword.classList.replace("d-none", "d-block");
    return false;
  }
}

function phoneValidation(){
    let reg =/^\d{11}$/g.test(phoneUser.value) ;
    if (reg && phoneUser.value != "") {
        phoneUser.classList.add("is-valid");
        phoneUser.classList.remove("is-invalid");
        msgNumber.classList.replace("d-block", "d-none");
        return true;
      } else {
        phoneUser.classList.add("is-invalid");
        phoneUser.classList.remove("is-valid");
        msgNumber.classList.replace("d-none", "d-block");
        return false;
      }
      

}
function validationRePassword(){
    return passwordUser.value == RePsswordUser.value;
    
}
function ageValidation(){
   let reg =/^[1-9][0-9]?$|^100$/.test(ageUser.value);
   if (reg && ageUser.value != "") {
    ageUser.classList.add("is-valid");
    ageUser.classList.remove("is-invalid");
    msgAge.classList.replace("d-block", "d-none");
    return true;
  } else {
    ageUser.classList.add("is-invalid");
    ageUser.classList.remove("is-valid");
    msgAge.classList.replace("d-none", "d-block");
    return false;
  }

}
function Valoidation() {
    return EmailValidation() & userNameValidation() &passWordValidation() & phoneValidation() & ageValidation() ;
}

function validForm(){
    
    if(Valoidation()){
     
        submitBtn.classList.remove('disabled','enabled');
    }
    else{
        submitBtn.classList.add("disabled");
     
    }
}
