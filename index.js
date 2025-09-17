/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===        
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancer (){
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return { name, occupation, rate };
}
let totalRate = 0;
const freelancers = Array.from({ length: NUM_FREELANCERS }, freelancer);
for (let i = 0; i < freelancers.length; i++) {
    totalRate += freelancers[i].rate; 
}
const averageRate = totalRate / freelancers.length;

// COMPONENTS
/**
    * @param {Freelancer} freelancer
    * @returns {HTMLElement}
    */
function FreelancerCard(line) {
    const {name,occupation,rate} = line;
    const $figure = document.createElement("figure");
    $figure.classList.add = ("card");
    $figure.innerHTML = `
    <article>

        <p> ${name} ${occupation} $${rate} per hour</p>
    </article>
    `;
    return $figure;
}

// RENDERING
function render() {
    const $app = document.getElementById("app");
      $app.innerHTML = `
      <h1> Freelancer Forum <h1>
        <h2> Average Rate: $${averageRate} </h2>
        <p> name occupation rate </p>
        <div  class= "B" > </div>
  `;
    let div=document.querySelector(".B");
    const $freelancerCards = freelancers.map(FreelancerCard);
    div.replaceChildren(...$freelancerCards);
}
render();

