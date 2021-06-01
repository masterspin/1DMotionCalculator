const generateBtn = document.querySelector(".generateBtn");
const submit = document.querySelector(".submit");

generateBtn.addEventListener("click", generateRandomNum);
submit.addEventListener("click", generateFinalGrade);

function generateRandomNum() {
  const current = document.querySelector(".current").value;
  const desired = document.querySelector(".desired").value;
  const weight = document.querySelector(".weight").value;

  num = (desired - ((100-weight)/100)*(current))/(weight/100);
  lowest = "Minimum Score Needed: " + Math.round(num*100)/100 + "%";

  const randomNumEl = document.querySelector(".randomNumEl");
  randomNumEl.innerHTML = lowest;
}

function generateFinalGrade() {
  const current2 = document.querySelector(".current2").value;
  const desired2 = document.querySelector(".desired2").value;
  const weight2 = document.querySelector(".weight2").value;

  num2 = (desired2 * weight2/100)+((100-weight2)/100)*(current2);
  calculated = "Your Final Grade: " + Math.round(num2*100)/100 + "%";

  const calculatedScore = document.querySelector(".calculatedScore");
  calculatedScore.innerHTML = calculated;
}
