console.log("in signin dot js");

const signinBtn = document.querySelector("#signin-btn");
const pwdBox = document.querySelector("#pwd-box");
const hardCodePwd = 'steak';
// TODO:  remove for demo. 
pwdBox.value = hardCodePwd; 
pwdBox.value1 = hardCodePwd;

signinBtn.addEventListener("click", function () {
  console.log("pwd value: ", pwdBox.value);

  const userPwd = pwdBox.value; 


console.log('use pwd: ', userPwd);
console.log('hard code pwd: ', hardCodePwd);

  if(userPwd == hardCodePwd){
    console.log('signed in');
    sessionStorage.setItem('signedIn', 'true');
    window.location.href = "private.html"
  }
  else{
    console.log('NOT signed in');
    document.querySelector('#message').textContent = "nope. try again."
    
    pwdBox.value = ''; 
  }

});




const inputBoxId = document.getElementById("pwd-box");
const inputBoxesClass = document.getElementsByClassName("pwd-class");
const inputBoxesTag = document.getElementsByTagName("input");