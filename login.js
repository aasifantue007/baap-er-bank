// Step - 1 add click event handler with submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    


// Step - 2 get the email address inside the email input 
//        always remember to use .value to get text from input
const emailField = document.getElementById('email-user');
const email = emailField.value;



// Step - 3 get password
// set id on the html element
// get the element
// get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;



// Step - 4 verify email & password & valid user or not

if(email === 'aasif.antue@gmail.com' && password === 'anniehall'){
    window.location.href = 'bank.html'
}
else{
    alert('Sorry, you forgot password. You are not my Son');
}


})