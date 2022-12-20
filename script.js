let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let re_password = document.getElementById('re-password')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    // get the values from the inputs
    let usernameValue = username.value
    let emailValue = email.value
    let passwordValue = password.value
    let re_passwordValue = re_password.value
    
    // username
    if(usernameValue === ''){
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank')
    } else{
        // add success class
        setSuccessFor(username)
    }

    
    // email
    if(emailValue === ''){
        // show error
        // add error class
        setErrorFor(email, 'Email cannot be blank')
    } else{
        // add success class
        setSuccessFor(email)
    }

    // password
    if(passwordValue === ''){
        // show error
        // add error class
        setErrorFor(password, 'Password cannot be blank')
    } else{
        // add success class
        setSuccessFor(password)
    }

    // re-password
    if(re_passwordValue === ''){
        // show error
        // add error class
        setErrorFor(re_password, 'Re-Password cannot be blank')
    } else{
        // add success class
        setSuccessFor(re_password)
    }









}

function setErrorFor(input, message){
    let formControl = input.parentElement  // .form-control
    let small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = message

    // add error class
    formControl.className = 'form-control error'
}


function setSuccessFor(input){
    let formControl = input.parentElement  // .form-control

    // add success clas
    formControl.className = 'form-control success'
}



