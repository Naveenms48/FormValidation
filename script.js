document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
    let username = document.getElementById('username').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    let cpassword = document.getElementById('cpassword').value.trim()

    let uerror = document.getElementById('u-error')
    let eerror = document.getElementById('e-error')
    let perror = document.getElementById('p-error')
    let cperror = document.getElementById('cp-error')

    let isValid = true;
    unamePattern = /^[A-Za-z]+ [A-Za-z]+$/
    emailPattren = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
    if(username === ''){
        uerror.innerText = 'Name is required'
        isValid = false;
    }
    else if(!unamePattern.test(username)){
        uerror.innerText = 'Enter your full name'
        isValid = false;
    }
    else if(unamePattern.test(username)){
        uerror.innerText = ''
        isValid = true;
    }

    if(email === ''){
        eerror.innerText = 'Email is required'
        isValid = false;
    }
    else if(!emailPattren.test(email)){
        eerror.innerText = 'Enter a valid email'
        isValid = false;
    }
    else if(emailPattren.test(email)){
        eerror.innerText = ''
        isValid = true;
    }

    if(password === ''){
        perror.innerText = 'Password is required'
        isValid = false;
    }
    else if(password.length < 3 || password.length > 8){
        perror.innerText = 'Enter a Password Char between 3 to 8'
        isValid = false;
    }
    else if(password.length > 3 || password.length < 8){
        perror.innerText = ''
        isValid = true;
    }

    if(cpassword === ''){
        cperror.innerText = 'Confirm Password is required'
        isValid = false;
    }
    else if(cpassword !== password ){
        cperror.innerText = 'Password not match'
        isValid = false;
    }
    else if(cpassword === password){
        cperror.innerText = ''
        isValid = true;
    }

    if(isValid){
        alert(`Hi ${username} Welcome to our website`)
        console.log(username,email,password,cpassword);
    }

    username.value = ' ';
    email.value = ' ';
    password.value = ' ';
    cpassword.value = ' ';
})