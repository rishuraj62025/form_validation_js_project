const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");
const email = document.getElementById("email");

// when we go to submit the registration form, a event is occured and a object is returned 
form.addEventListener('submit',(e)=>{
e.preventDefault();

validateInputs();
})

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === '')
    {
        setError(username,'Username is required');
    }
    else 
    {
        setSuccess(username);
    }

    if(emailValue ==='')
    {
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue))
    {
        setError(email,'Email must be valid');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === '')
    {
        setError(password,'Password is required');
    }
    else if(passwordValue.length < 8)
    {
        setError(password,'Password must be of minimum 8 characters.');
    }
    else 
    {
        setSuccess(password);
    }

    if(cpasswordValue === '')
    {
        setError(cpassword,'password is required');
    }
    else if(cpasswordValue !== passwordValue)
    {
        setError(cpassword,'password must be same');
    }
    else 
    {
        setSuccess(cpassword);
    }
}

const setError = (element,message)=>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;

  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// It is regex code to validate email
function isValidEmail(e)
{
    let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return reg.test(e);
        }
