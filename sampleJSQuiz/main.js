const AllQuestions = [
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
  {
    question: "What is 10/2?",
    a: "3",
    b: "5",
    c: "115",
    correctAnswer: "5",
  },
];
const AllQuestion = document.getElementById("AllQuestion");
const result = document.getElementById("result");

function printQuestion() {
  for (var i = 0; i <= AllQuestions.length; i++) {
    AllQuestion.innerHTML += `
    <div class="border">
    <label class="display-5 p-3">${AllQuestions[i].question}</label>
    <br>
    <div class="p-2 ">
    <div class="form-check">
    <input class="form-check-input" type="radio" name="question${i}"  id="flexRadioDefault1" value="${AllQuestions[i].a}">
    <label class="form-check-label" for="flexRadioDefault1">
    ${AllQuestions[i].a}
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="question${i}"  id="flexRadioDefault2" value="${AllQuestions[i].b}">
    <label class="form-check-label" for="flexRadioDefault2">
    ${AllQuestions[i].b}
    </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="question${i}"  id="flexRadioDefault3" value="${AllQuestions[i].c}">
  <label class="form-check-label" for="flexRadioDefault3">
  ${AllQuestions[i].c}
  </label>
  </div>
</div>
 
    `;
  }
}
printQuestion();
function showResult() {
  let score = 0;
  for (var i = 0; i < AllQuestions.length; i++) {
    let EachQuestion = document.getElementsByName("question" + i);

    for (var j = 0; j < EachQuestion.length; j++) {
      if (EachQuestion[j].checked) {
        if (EachQuestion[j].value == AllQuestions[i].correctAnswer) {
          score += 1;
        } else {
          continue;
        }
      }
    }
  }
  result.innerHTML += `${score} out of ${AllQuestions.length}`;
}
//   const question1 = document.getElementsByName("question0");
//   for (var i = 0; i < question1.length; i++) {
//     if (question1[i].checked) {
//       if (question1[i].value == AllQuestions[0].correctAnswer) {
//         result.innerHTML += "Correct";
//       } else {
//         result.innerHTML += "InCorrect";
//       }
//     }
//   }
// }
