const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", e =>{
  e.preventDefault();
  checkInputs();
  directPage();
})

const setError = (element, message) => {
  const inputField = element.parentElement;
  const errorMessageDisplay = inputField.querySelector('.errorMessageDisplay');

  errorMessageDisplay.innerText = message;
  inputField.classList.remove('success');
  inputField.classList.remove('error');
  inputField.classList.add('error');
}

const setSuccess = (element) => {
  const inputField = element.parentElement;
  const errorMessageDisplay = inputField.querySelector('.errorMessageDisplay');

  errorMessageDisplay.innerText = '';
  inputField.classList.remove('success');
  inputField.classList.remove('error');
  inputField.classList.add('success');
}

const checkInputs = () => {
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === ''){
    setError(email, "Email is required");
  }
  else{
    setSuccess(email);
  }

  if (password1Value === ''){
    setError(password1, "Password is required");
    setError(password2, "Password must be valid first")
  }
  else if (password1Value.length < 8){
    setError(password1, "Password must be at least 8 character");
    setError(password2, "Password must be valid first")
  }
  else{
    setSuccess(password1);
    if (password2Value == password1Value){
      setSuccess(password2);
    }
    else  if (password2Value === ''){
      setError(password2, 'Confirm password is required')
    }
    else{
      setError(password2, "Confirm password must match the password entered above")
    }
  }

 
}

const directPage = () =>{
  if (email.parentElement.classList[1] == 'success' && password1.parentElement.classList[1] == 'success' && password2.parentElement.classList[1] == 'success'){
    window.open("homepage.html", "_self");
  }
}

