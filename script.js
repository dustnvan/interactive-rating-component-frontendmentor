const DEFAULT_BG_COL = "hsl(213, 9%, 23%)";
const CLICKED_BG_COL = "hsl(25, 97%, 53%)";
const CLICKED_TXT_COL = "hsl(0, 0%, 100%)";
const DEFAULT_TXT_COL = "hsl(217, 12%, 63%)";

const options = document.querySelectorAll("ul.numbers .circle");

const submit = document.querySelector(".submit");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const review = back.querySelector("span");

options.forEach(changeColorWhenClicked);

function resetCircleColors() {
  options.forEach(function (option) {
    option.style.backgroundColor = DEFAULT_BG_COL;
    option.style.color = DEFAULT_TXT_COL;
  });
}

function changeColorWhenClicked(option) {
  option.addEventListener("click", function () {
    resetCircleColors();
    option.style.backgroundColor = CLICKED_BG_COL;
    option.style.color = CLICKED_TXT_COL;

    submit.addEventListener("click", function () {
      front.style.display = "none";
      back.style.display = "flex";
      console.log(option.innerText);
      console.log(review.textContent);
      review.textContent = option.innerText;
    });
  });
}

console.log(back.style.display);
console.log(front.style.display);
