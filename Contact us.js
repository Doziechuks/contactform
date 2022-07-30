const myForm = document.querySelector('form');
const fullName = document.querySelector('input[name= "fullName"]');
const email = document.querySelector('input[name= "email"]');
const phone = document.querySelector('input[name= "phone"]');
const message = document.querySelector('textarea[name= "message"]');
const thankYou = document.querySelector('.thank-you');
const info = document.querySelector('.info');
const callBack = document.querySelector('.call-back');
let isFormValid = false;
let isValidationOn = false;
const inputs = [fullName, email, phone, message];

const resetElem = (elem) => {

    elem.nextElementSibling.classList.add('hidden');
    elem.classList.remove('invalid');
};

const invalidateElem = (elem) => {

    elem.nextElementSibling.classList.remove('hidden');
    elem.classList.add('invalid');
};

const isValidEmail = (email) => {

    const mailFormat =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return mailFormat.test(String(email).toLowerCase());
}

const isValidPhone = (phone) => {

    const phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return phoneFormat.test(String(phone).toLowerCase());
}

/*===========Event listner section==================*/

myForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    isValidationOn = true;
    validateInputs();

    if(isFormValid){

        myForm.remove();
        thankYou.classList.remove('hidden');
    }

});


inputs.forEach(input => {
    input.addEventListener('input', () => {

        validateInputs();
    });

});

/*===========inputs validation section==================*/

const validateInputs =  () => {
    if(!isValidationOn) return;

    if(fullName.value === '' || fullName.value === null){

        invalidateElem(fullName);
        isFormValid = false;

    } else{

        resetElem(fullName);
        isFormValid = true;
    }

    if(email.value === '' || email.value === null){
        
        info.innerHTML = 'email field cannot be empty';
        isFormValid = false;

    } else if(!isValidEmail(email.value)){

        invalidateElem(email);
        info.innerHTML = '';
        isFormValid = false;
    } else{

        resetElem(email);
        info.innerHTML = '';
        isFormValid = true;
    }

    if(phone.value === '' || phone.value === null){
        
        callBack.innerHTML = 'phone field cannot be empty';
        isFormValid = false;

    } else if(!isValidPhone(phone.value)){

        invalidateElem(phone);
        callBack.innerHTML = '';
        isFormValid = false;
    } else{

        resetElem(phone);
        callBack.innerHTML = '';
        isFormValid = true;
    }

    if(message.value === '' || message.value === null){

        invalidateElem(message);
        isFormValid = false;

    } else{

        resetElem(message);
        isFormValid = true;
    }

}