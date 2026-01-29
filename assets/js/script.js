'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }


/**
 * PRODUCT PAGE
 */


        function colorFn(element) {
            const color = randomFn();
            element.style.backgroundColor = color;
        }
        function randomFn() {
            const l = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += l[Math.floor(Math.random() * 16)];
            }
            return color;
        }



        

        /**-----
 * CONTACT PAGE
 

       
let form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
e.preventDefault();
document.querySelector("#sub").value="submiting...";
let data=new FormData(form);
fetch('https://script.google.com/macros/s/AKfycbx94iDeoaDJ1c0ucnmo8XZWfST-tUmCFZ-8mSg2HaIgnimEs7QIZKVhorGf2omWRbXN-A/exec',
{method: "POST",
body: data
})
.then(_data=>{
  document.querySelector("#sub").value="submit"
 })
 
 .then(_response => alert("Thank you! Form is submitted" ))
          .then(() => { window.location.reload(); })
          .catch(error => console.error('Error!', error.message))

})


CALCULATOR PAGE

const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const formcal = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('reset', onFormReset);

function onFormReset(){
  bmiText.textContent=0;
  descText.textContent="N/A";
}

function onFormSubmit(e){
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
    alert("Please enter a valid weight & height");
    return;
  }
  const heightInMeters = height/100; //cm->m
  const bmi = weight/Math.pow(heightInMeters, 2);

  bmiText.textContent = bmi.toFixed(2);
}
**/








    
      /**
 * CONTACTUS PAGE-FORM 
 */
    /**
 * Accounts details
 
 * For form data to email---
 Platform used- smtp 
 userid: shabbirmerchantelite@gmail.com
 pw:/@Tasneemtaha98207/
 

 *For whatsapp 
 elif website
 userid: shabbirmerchantelite@gmail.com
 pw:/@Tstaha98207/@Tas2000/
 */


/*FORM DATA TO EMAIL VIA MOOSEND SMTP CODE
const form=document.querySelector('form');
function sendemail(){

  Email.send({
    Host : "smtp.mailendo.com",
    Username : "shabbirmerchantelite@gmail.com",
    Password : "90e19e4f-3c8f-4eeb-bf0b-078b1497e2f1",
    To : 'shabbirmerchantelite@gmail.com',
    From : "shabbirmerchantelite@gmail.com",
    Subject : "Subject",
    Body : "hello i am user"
  }).then(
  message => alert(message)
  );
  }
  
  form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sendemail();
  });*/