// Common Variable

let fName = document.getElementById('first-name');
let lName = document.getElementById('last-name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let btn = document.getElementById('btn');
let consentRadio = document.querySelector('.consent-radio');
let consentCheck = document.querySelector('.consent-check');
let queryCheck = document.querySelectorAll('.query');
let checkQuery = document.querySelectorAll('.check-query');
let queryRadio= document.querySelectorAll('.query-radio');

for (let i = 0; i < checkQuery.length; i++) {
  checkQuery[i].addEventListener('click', function() {
    this.classList.toggle('check-queryh');
  })
  queryRadio[i].addEventListener('click', function() {
    this.classList.toggle('q-radio-active');
  })
};

// Error Variable

let firstError = document.getElementsByClassName('first');
let lastError = document.getElementsByClassName('last');
let emailError = document.getElementsByClassName('email-error');
let messageError = document.getElementsByClassName('message-error');
let btnError = document.getElementsByClassName('btn-error');
let consentError = document.getElementsByClassName('consent-error');
let queryError = document.getElementsByClassName('query-error');
let oneWord = /^[A-Za-z]+$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ffun() {
  if ((fName.value.length == 0)){
    firstError[0].textContent = 'This field is required.';
    return false;
  } 
  if (!oneWord.test(fName.value)) {
    firstError[0].textContent = 'One word only.';
    return false;
  }
}

function lfun() {
  if (lName.value.length == 0) {
    lastError[0].textContent = 'This field is required.';
    return false;
  }

  if (!oneWord.test(lName.value)) {
    lastError[0].textContent = 'One word only.';
    return false;
  }
}

function efun() {
  if (email.value.length == 0) {
    emailError[0].textContent = 'Please enter a valid email address.';
    return false;
  }
  if (!emailPattern.test(email.value)) {
    emailError[0].textContent = 'Please enter a valid email address.';
    return false;

  }
}

function mfun() {
  if (message.value.length == 0) {
    messageError[0].textContent = 'This field is required.';
    return false;
  }
}

function bfun(e) {
  if (!ffun() && !lfun() && !efun() && !mfun() &&!cfun()) {
    e.preventDefault();
    return false;
  }
}

function cfun() {
  if (!consentRadio.checked) {
     consentError[0].innerHTML = 'To submit the form, please consent to being contacted';
  }
  return false;
}

function qfun() {
  this.classList.toggle('query-active');
}

function rfun() {
  this.classList.toggle('radio-active');
}


fName.addEventListener('keyup', ffun);
lName.addEventListener('keyup', lfun);
email.addEventListener('keyup', efun);
message.addEventListener('keyup', mfun);
btn.addEventListener('click', bfun);
consentRadio.addEventListener('mouseout', cfun);

consentRadio.addEventListener('click', function () {
  if (consentRadio.checked) {
    consentCheck.classList.toggle('active');
    consentRadio.classList.toggle('consent-radioh');
  }
});

consentCheck.addEventListener('click', function () {
  if (consentRadio.checked) {
    consentCheck.classList.toggle('active');
    consentRadio.classList.toggle('consent-radioh');
  }
});

for (i = 0; i < queryCheck.length; i++) {
  queryCheck[i].addEventListener('click', qfun)
}