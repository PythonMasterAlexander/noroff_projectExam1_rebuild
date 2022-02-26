function messageValidateForm(event) {
    event.preventDefault();

    const fullName = event.target.fullName.value;

    let whenFormIsValid = "";
    whenFormIsValid = `
    <p class="formSubmitHeading">Thank you ${fullName}</p>
    <p class="formSubmitText">You will receive a response email from us soon, Have a nice day.</p>`;

    document.querySelector('.formValidatedContainer').innerHTML = whenFormIsValid;
}


const firstNameInput = document.querySelector('#fullNameId');
const firstNameErrorContainer = document.querySelector('.firstNameErrorContainer');

const emailInput = document.querySelector('#emailId');
const emailErrorContainer = document.querySelector('.emailErrorContainer');

const textAreaInput = document.querySelector('#userMessageId');
const textAreaErrorContainer = document.querySelector('.userMessageErrorContainer');


const newsletterInput = document.querySelector('#newsletterEmailId');
const newsletterEmailErrorContainer = document.querySelector('.newsletterEmailErrorContainer');

firstNameInput.onkeyup = function(event) {
    const keyPressLength = event.target.value.length;

    if(keyPressLength < 2) {
        event.target.style.border = "solid #DD361C 2px";
        firstNameErrorContainer.classList.add('formErrorMessage');
    } else {
        event.target.style.border = "solid #386641 2px";
        firstNameErrorContainer.classList.remove('formErrorMessage');
    }
}

emailInput.onkeyup = function(event) {
    const keyPressValue = event.target.value;

    function validateEmailAddress(emailAddress) {
        const regEx = /\S+@\S+\.\S+/;
        const ifMatch = regEx.test(emailAddress);
        return ifMatch;
    }

    if(!validateEmailAddress(keyPressValue)) {
        event.target.style.border = "solid #DD361C 2px";
        emailErrorContainer.classList.add('formErrorMessage');
    } else {
        event.target.style.border = "solid #386641 2px";
        emailErrorContainer.classList.remove('formErrorMessage');
    }
}

textAreaInput.onkeyup = function(event) {
    const keyPressValue = event.target.value.length;

    if(keyPressValue < 4) {
        event.target.style.border = "solid #DD361C 2px";
        textAreaErrorContainer.classList.add('formErrorMessage');
    } else {
        event.target.style.border = "solid #386641 2px";
        textAreaErrorContainer.classList.remove('formErrorMessage');
    }
}

newsletterInput.onkeyup = function(event) {
    const keyPressValue = event.target.value;

    function validateEmailAddress(emailAddress) {
        const regEx = /\S+@\S+\.\S+/;
        const ifMatch = regEx.test(emailAddress);
        return ifMatch;
    }

    if(!validateEmailAddress(keyPressValue)) {
        event.target.style.border = "solid #DD361C 2px";
        newsletterEmailErrorContainer.classList.add('formErrorMessage');
    } else {
        event.target.style.border = "solid #386641 2px";
        newsletterEmailErrorContainer.classList.remove('formErrorMessage');
    }
}