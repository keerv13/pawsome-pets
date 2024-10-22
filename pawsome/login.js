const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', e =>{
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

const setSuccess = element =>{
  const inputField = element.parentElement;
  const errorMessageDisplay = inputField.querySelector('.errorMessageDisplay');

  errorMessageDisplay.innerText = '';
  inputField.classList.remove('success');
  inputField.classList.remove('error');
  inputField.classList.add('success');
}

const checkInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if (emailValue === ''){
    setError(email, 'Email is required');
  }
  else{
    setSuccess(email);
  }

  if (passwordValue === ''){
    setError(password, 'Password is required');
  }
  else if (passwordValue.length < 8){
    setError(password, 'Password must be at least 8 characters');
  }
  else{
    setSuccess(password);
  }
};

const directPage = () =>{
  if (email.parentElement.classList[1] == 'success' && password.parentElement.classList[1] == 'success'){
    window.open("homepage.html", "_self");
  }
}