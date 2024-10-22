let currentTab = 0;
showTab(currentTab);

/*Display correct step*/
function showTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabs[tabIndex].style.display = "block";

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (tabIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }

  if (tabIndex === tabs.length - 1) {
    nextBtn.innerHTML = "SUBMIT";
  } else {
    nextBtn.innerHTML = "NEXT";
  }

  fixStepIndicator(tabIndex);
}

function nextPrev(step) {
  const tabs = document.getElementsByClassName("tab");

  if (step === 1 && !validateForm()) {
    return false;
  }

  tabs[currentTab].style.display = "none";
  currentTab += step;

  if (currentTab >= tabs.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

/*Check if input is empty*/
function validateForm() {
  const tabs = document.getElementsByClassName("tab");
  const inputs = tabs[currentTab].getElementsByTagName("input");
  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value === "") {
      input.classList.add("invalid");
      isValid = false;
    }
  }

  /*Check step 1 for valid email and contact number*/
  if (currentTab === 0) {
    const contactNumInput = document.getElementById("number");
    const contactNumValue = contactNumInput.value;
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    const contactNumPattern = /^\d{10,12}$/;
    if (!contactNumPattern.test(contactNumValue)) {
      contactNumInput.classList.add("invalid");
      isValid = false;
      
    }

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add("invalid");
      isValid = false;
    }
  }

  if (isValid) {
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
  }

  return isValid;
}

function fixStepIndicator(currentStep) {
  const stepIndicators = document.getElementsByClassName("step");
  for (let i = 0; i < stepIndicators.length; i++) {
    stepIndicators[i].classList.remove("active");
  }
  stepIndicators[currentStep].classList.add("active");
}
