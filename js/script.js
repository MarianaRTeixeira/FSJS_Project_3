"use strict";

//Global Variables
const jobTittle = document.getElementById('title');
const otherJobTittle = document.getElementById('other-job-role');

const colorMenu = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorSelected = colorMenu.children;

const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

const payment = document.getElementById('payment');
const optPayment = payment.children;
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

const userName = document.getElementById('name');
const email = document.getElementById('email');
const activityBox = document.getElementById('activities-box');
const activitiesCheck = document.querySelectorAll('#activities-box label input[type="checkbox"]');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

const nameHint = document.getElementById('name-hint');
const emailHint = document.getElementById('email-hint');
const activityHint = document.getElementById('activities-hint');
const cardHint = document.getElementById('cc-hint');
const zipHint = document.getElementById('zip-hint');
const cvvHint = document.getElementById('cvv-hint');


/* 
Part 1: The "Name" field
Make the <input type="text">  focus when page load 
*/
document.getElementById('name').focus();

/* 
Part 2: Job role section
    - Hide the text-field 
    - Add a event listener on Job Role
*/

otherJobTittle.style.display = "none";

jobTittle.addEventListener('change', e => {
    const jobChoice = e.target.value;

    if (jobChoice === 'other') {
        otherJobTittle.style.display = "block";
    } else {
        otherJobTittle.style.display = "none";
    }
})

/* 
Part 3: T-shirt Info section
    - Disable the 'color' select element
    - Program the design select w/ event listenner for changes
    - Use the getAttribute and setAttribute on the loop
 */

colorMenu.disabled = true;

shirtDesign.addEventListener('change', e => {
    colorMenu.disabled = false;

    for (let i = 0; i < colorSelected.length; i++) {
        const selection = e.target.value;
        const choosenShirt = colorSelected[i].getAttribute('data-theme');

        if (choosenShirt == selection) {
            colorSelected[i].hidden = false;
            colorSelected[i].setAttribute('selected', true);

        } else {
            colorSelected[i].hidden = true;
            colorSelected[i].setAttribute('selected', false);
        }
    }
})

/* 
Part 4: "Register for Activities" section:
    - Create variables and add data-sot attitribute and convert string to number
    - run a loop that checks if the selection was check
    - update the innerHTMl 

EXTRA CREDIT  - Prevent users from registering for conflicting activities
    - create variables for the input with the name of the same schedule
    - create a additional function that add and removes the class .disabled from the parent label element ( use the parentNode) [similar to the function of form validation helper function]
    - create a loop that checks all the activities in the variable 'activitiesCheck'
    - inside the loop use if/else to check the activities choosen and apply the aditional function
*/


activities.addEventListener('change', e => {
    
    /* console.log(typeof numberSelection) */

    const selection = e.target.getAttribute('data-cost');
    let numberSelection =+ selection;

    if (e.target.checked) {
        totalCost += numberSelection;
       // console.log(totalCost)
    } else {
        totalCost -= numberSelection;
    }

    activitiesCost.innerHTML = `Total: $${totalCost}`;

    const libraries = document.querySelector('input[name="js-libs"]');
    const frameworks = document.querySelector('input[name="js-frameworks"]');
   
    const node = document.querySelector('input[name="node"]');
    const build = document.querySelector('input[name="build-tools"]');
  
   function addClass (input) {
        input.parentNode.classList.add('disabled');
        input.disabled = true;
   }
   
   function removeClass (input){
        input.parentNode.classList.remove('disabled');
        input.disabled = false;
   }

   for (let i = 0; i< activitiesCheck.length; i++) {
       //Tuesday morning check
        if(libraries.checked){
            addClass(frameworks);
            removeClass(libraries)
        }else{
            removeClass(frameworks)
        }
        if(frameworks.checked){
            addClass(libraries);
            removeClass(frameworks)
            }else{
                removeClass(libraries)
            }
        //Tuesday afternooon check
        if(node.checked){
            addClass(build);
            removeClass(node)
            } else {
                removeClass(build)
            }
        if(build.checked){
            addClass(node);
            removeClass(build)
            } else {
                removeClass(node)
            }
   }
   
})


/*
Part 5 - "Payment Info" section:
    - Create variables of payment, credit-card, paypapl, bitcoin and using the 'chldren' proprety select the secon child element in a variable named 'optPayment'
    - Credit card payment option is selected for the user by default;
    - Target the element’s second child element and give it the selected property using the setAttribute method
    - Hide other options other than the sellected ( use a else if statement )
    - Add the else statment to show the credid card again
*/ 

optPayment[1].setAttribute('selected', true) ;
paypal.style.display = 'none';
bitcoin.style.display = 'none';



payment.addEventListener('change', e => {
    const pay = e.target;
  
  
        if (pay.value == 'credit-card'){
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if (pay.value == 'bitcoin'){
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = 'block';
        } else if (pay.value == 'paypal'){
            creditCard.style.display = 'none';
            paypal.style.display = 'block';
            bitcoin.style.display = 'none';
        } 
});

/*
Part 6 - Form validation:
    - create the variables needed: name, email, activities, cardNumber, zip, cvv and form
    - use an event listenier with form elemntt and submit action;
    - Regex expressions from videos

*/ 

//Name Validator
function nameValidation () {
    const nameValue = userName.value;
    const validationName = /^[a-zA-Z ]+$/.test(nameValue);
    return validationName;
}

//Email Validator
function emailValidaton () {
    const emailValue = email.value;
    const validationEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return validationEmail;
}

//Register for Activities
function activitiesValidation () {
    let startCount = 0;
    for(let i = 0 ;i < activitiesCheck.length; i++){
        if(activitiesCheck[i].checked){
            startCount += 1;
        }
    }
    const activitiesDemo = startCount > 0;
   // console.log(startCount);
   return activitiesDemo;
}
//Card Validator
function cardValidator() {
    const cardValue = cardNumber.value;
    const validationCard =/^\d{13,16}$/.test(cardValue);
    return validationCard;
}
//Zip Validator 
function zipValidator ()  {
    const zipValue = zipCode.value;
    const validationZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipValue);
    return validationZip;
}

//CVV Validator
function cvvValidator () {
    const cvvValue = cvv.value;
    const cvvIsValid = /^[0-9]{3}$/.test(cvvValue);
    return cvvIsValid;
}

//  Form Input Validation
function validationPass(element){
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display= 'none';
    return validationPass;
}
  
function validationFail(element){
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'block';
    return validationFail;
}
/* EXTRA CREDIT - Real-time error message
    - create a event Listener with keyUp action and Input
    - create a real time error display and/or help 
*/
userName.addEventListener('input', (e) =>{
    if (!nameValidation()){
        e.preventDefault();
        validationFail(userName);
        userName.textContent = '';
        nameHint.textContent = 'Please insert a valid name, no numbers are allowed'
    } else {
        validationPass(userName)
    }
})

email.addEventListener('input', (e) =>{
    if(!emailValidaton()){
        e.preventDefault();
        validationFail(email);
        email.textContent = '';
        emailHint.textContent = 'Insert a valid email'
    } else {
        validationPass(email)
    }
})
cardNumber.addEventListener('input', (e) =>{   
   if(!cardValidator ()){
    e.preventDefault();
    validationFail(cardNumber)
    cardNumber.textContent = '';
    cardHint.textContent = 'No spaces and just numerical charaters'
} else {
    validationPass(cardNumber)
    console.log('cc done')
}
})

email.addEventListener('keyup', (e)=> {
   

    if(!emailValidaton()){
        e.preventDefault();
        validationFail(email);
        email.textContent = '';
        emailHint.textContent = 'A valid email should have this format name@web.com'
    } else {
        validationPass(email)
    }
})
zipCode.addEventListener('keyup', (e)=> {
    if(!zipValidator ()){
        e.preventDefault();
        validationFail(zipCode);
        zipHint.textContent = 'The zip code should be with 5 numbers'
    } else {
        validationPass(zipCode)
        console.log('zip done')
    }
})
cvv.addEventListener('keyup', (e)=> {
    //cvv
    if (!cvvValidator()){
        e.preventDefault();
        validationFail(cvv);
        cvvHint.textContent = 'Please insert 3 numbers from the back of your card'
    } else {
        validationPass(cvv)
        console.log('cvv done')
    }
})
//Final form validation
form.addEventListener('submit', (e) => {
   // e.preventDefault() 
    //Name validation
    if (!nameValidation()){
        e.preventDefault();
        validationFail(userName);
    } else {
        validationPass(userName)
    }

    //Email Validation
    if(!emailValidaton()){
        e.preventDefault();
        validationFail(email);
    } else {
        validationPass(email)
    }
    
    //Activiies checked
    if(!activitiesValidation ()){
        e.preventDefault()
        validationFail(activityBox)
    } else {
        validationPass(activityBox);
        //console.log('test passed')
    }

    //Credit Card 
    if(payment.value == 'credit-card'){
        //credit card
        if(!cardValidator ()){
            e.preventDefault();
            validationFail(cardNumber)
        } else {
            validationPass(cardNumber)
            console.log('cc done')
        }
        //zip
        if(!zipValidator ()){
            e.preventDefault();
            validationFail(zipCode);
        } else {
            validationPass(zipCode)
            console.log('zip done')
        }
        //cvv
        if (!cvvValidator()){
            e.preventDefault();
            validationFail(cvv);
        } else {
            validationPass(cvv)
            console.log('cvv done')
        }
        }
    
});

/*
Part 7 - Accessibility:
    - create a variable to reference the activities checkbox;
    - use the variable activitiesCheck to create a loop and create an eventlistener with focus and blur
    - Inside the loop, program each activity to listen for the focus event and the blur event.
    - When an activity checkbox triggers the focus event, that checkboxes’ parent element should have the "focus" className added to it
    - When an activity checkbox triggers the blur event, that checkboxes’ parent element should have the "focus" className removed from it.
    - Snipplet used from Warm Up project
*/ 

[...document.querySelectorAll('input[type="checkbox"]')].forEach( check => {
    check.addEventListener('focus', e => check.parentElement.classList.add('focus'));

    check.addEventListener('blur', e => {
        const active = document.querySelector('.focus');
        if (active) active.classList.remove('focus');
      })
   
});
 

/* *******************************************************************************************
USED RESOURCES : 

ZIP CODE :  **US POSTAL CODE** 
            https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-12.php
WARM UP PROJECTS:
            - SELECTS AND OPTIONS
            - CHECKBOXES
            - FORM INPUT VALIDATION 
            - FORM INPUT VALIDATION ERROR INDICATIONS

CARD NUMBER CHECK EXEMPLE: 1234567890123
******************************************************************************************* */