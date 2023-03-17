/*
Note: This scripts is dedicated
to the home page (html/home/index.html)
*/

import { htmlIndicatorBtn, htmlTestimony, testimonials } from "./data.js";
/* --------------------------------------- */
/*                 Helpers                 */
/* --------------------------------------- */
function get(name, from = document) {
  if (from.querySelector(name)) return from.querySelector(name);
  throw new Error(`The specified element ${name} was not found`);
}

function getAll(name, from = document) {
  if (from.querySelectorAll(name)) return [...from.querySelectorAll(name)];

  return [];
}

/* --------------------------------------- */
/*               Testimonials              */
/* --------------------------------------- */

// Dom elements
const testimonyWrapper = get(`[data-name="testimonyWrapper"]`); //testimonies parent wrapper
const indicatorWrapper = get(`[data-name="indicatorWrapper"]`); //circular btn wrapper
const leftArrow = get(`[data-name="leftArrow"]`); //left arrow btn
const rightArrow = get(`[data-name="rightArrow"]`); //right arrow btn

// variables
let currentCard;

// functions
function renderTesimonials(testimonials) {
  const testimonies = testimonials
    .map((testimony, index) => {
      let isactive = index === 1;
      return htmlTestimony(testimony, isactive);
    })
    .join("");

  const indicatorBtns = testimonials
    .map((x, index) => {
      let isactive = index === 1;
      return htmlIndicatorBtn(isactive);
    })
    .join("");

  testimonyWrapper.innerHTML = testimonies;
  indicatorWrapper.innerHTML = indicatorBtns;

  const allIndicatorBtn = getAll("span", indicatorWrapper); //circular btn
  const allTestimonies = getAll("article", testimonyWrapper); //testimony cards

  allTestimonies.forEach((testimony, index) => {
    allIndicatorBtn[index].addEventListener("click", () => {
      setActiveTestimony(testimony, allIndicatorBtn[index]);
    });

    testimony.addEventListener("click", () => {
      setActiveTestimony(testimony, allIndicatorBtn[index]);
    });
  });
}

function setActiveTestimony(testimony, btn) {
  let active_testimony = "home_testimonycard_active";
  let inactive_testimony = "home_testimonycard_inactive";

  let active_btn = "bg-[var(--color-medium-green)]";
  let inactive_btn = "bg-[var(--color-medium-blue)]";

  const allTestimonies = getAll("article", testimonyWrapper); //testimony cards
  const allIndicatorBtn = getAll("span", indicatorWrapper); //circular btn

  allIndicatorBtn.forEach((btn) => {
    btn.classList.remove(active_btn);
    btn.classList.add(inactive_btn);
  }); //reset indicator button active classes

  allTestimonies.forEach((testimony) => {
    testimony.classList.remove(active_testimony);
    testimony.classList.add(inactive_testimony);
  }); //reset testimony card active classes

  testimony.classList.remove(inactive_testimony);
  testimony.classList.add(active_testimony);

  btn.classList.remove(inactive_btn);
  btn.classList.add(active_btn);

  testimony.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });

  currentCard = testimony;
}

function nextTestimony() {
  const allTestimonies = getAll("article", testimonyWrapper);

  currentCard = currentCard || allTestimonies[1];
  let nextCard = currentCard.nextElementSibling || allTestimonies[0];
  let nextBtnIndex = allTestimonies.indexOf(nextCard);
  let nextBtn = getAll("span", indicatorWrapper)[nextBtnIndex];

  setActiveTestimony(nextCard, nextBtn);
  currentCard = nextCard;
}

function prevTestimony() {
  const allTestimonies = getAll("article", testimonyWrapper);
  currentCard = currentCard || allTestimonies[1];
  let prevCard =
    currentCard.previousElementSibling ||
    allTestimonies[allTestimonies.length - 1];
  let prevBtnIndex = allTestimonies.indexOf(prevCard);
  let prevBtn = getAll("span", indicatorWrapper)[prevBtnIndex];

  setActiveTestimony(prevCard, prevBtn);

  currentCard = prevCard;
}

// event listeners
rightArrow.addEventListener("click", nextTestimony);
leftArrow.addEventListener("click", prevTestimony);

/* --------------------------------------- */
/*                 Lifecyle                */
/* --------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTesimonials(testimonials);
});
