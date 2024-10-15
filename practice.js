
//  step 1 clear previous error message
document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault()

let name_error = document.getElementById('name-error');
let email_error = document.getElementById('email-error');
let password_error = document.getElementById('password-error')

name_error.textContent = ''
email_error.textContent =''
password_error.textContent = ''
// step 2 get values from the form
let userName = document.getElementById('name').value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


let isValid = true
// step 3 validate name 
if (!userName){
    name_error.textContent = 'Required'
    isValid = false
}else if(!/^[A-Za-z]+$/.test(userName)){
    name_error.textContent = 'Name should contain only alphabetic characters'
    isValid = false
}
// step 4 validate email
if(!email){
email_error.textContent = 'Required';
isValid = false;

}else if(!/^\S+@\S+\.\S+$/.test(email)){
email_error.textContent = "Invalid-email"
isValid = false
}
// step 5 validate password
if(!password){
    password_error.textContent = 'Required'
}else if(password.length<8){
password_error.textContent = "password length < 8"
isValid = false
}
if(isValid){
    alert('form subittedd sucessfully')
}
})
// step 6 check al field are valid and submit the form.



//  step 1 clear previous error message
// step 2 get values from the form
// step 3 validate name 
// step 4 validate email
// step 5 validate password
// step 6 check al field are valid and submit the form.




//  step 1 clear previous error message
// step 2 get values from the form
// step 3 validate name 
// step 4 validate email
// step 5 validate password
// step 6 check al field are valid and submit the form.


//  step 1 clear previous error message
// step 2 get values from the form
// step 3 validate name 
// step 4 validate email
// step 5 validate password
// step 6 check al field are valid and submit the form.
