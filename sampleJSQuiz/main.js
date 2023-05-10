let AllQuestions = [];
fetch("./allQuestion.json")
  .then((res) => res.json())
  .then((data)=>{
    AllQuestions = data
    printQuestion(AllQuestions);
  })

/// const AllQuestions = [...AllQuestion];

const AllQuestion = document.getElementById("AllQuestion");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const retake = document.getElementById("retake");
retake.style.display = "none";
let correctAnswers;
const wrong = document.getElementById("wrong");
// first we are printing questions
function printQuestion(AllQuestions) {
  for (var i = 0; i < AllQuestions.length; i++) {
    AllQuestion.innerHTML += `
    <div class="border">
    <span>Ques. ${i + 1}</span><label class="display-5 p-3"> ${
      AllQuestions[i].question
    }</label>
    <br>
    <div class="p-2 ">

    <div class="form-check">
    <input class="form-check-input" type="radio" name="question${i}"  
    id="${i + "01"}" value="${AllQuestions[i].a}" >
    <label class="form-check-label" for="${i + "01"}">
    ${AllQuestions[i].a}
    </label>
  </div>

  <div class="form-check  ">
    <input class="form-check-input" type="radio" name="question${i}"  
    id="${i + "02"}" value="${AllQuestions[i].b}" >
    <label class="form-check-label " for="${i + "02"}" >
    ${AllQuestions[i].b}
    </label>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio"  name="question${i}"  
  id="${i + "03"}" value="${AllQuestions[i].c}" >
  <label class="form-check-label" for="${i + "03"}" >
  ${AllQuestions[i].c}
  </label>
  </div>
</div>
 
    `;
  }
}

function showResult() {
  let counter = 0;
  for (var i = 0; i < AllQuestions.length; i++) {
    let EachQuestion = document.getElementsByName("question" + i);
    for (var j = 0; j < EachQuestion.length; j++) {
      if (EachQuestion[j].checked) {
        counter++;
      }
    }
  }
  if (counter === AllQuestions.length) {
    correctAnswers = checkAnswers();
    footerAnswer();
  } else {
    alert("Please answer all the question");
  }
}

function checkAnswers() {
  let score = 0;
  for (var i = 0; i < AllQuestions.length; i++) {
    let EachQuestion = document.getElementsByName("question" + i);

    for (var j = 0; j < EachQuestion.length; j++) {
      if (EachQuestion[j].checked) {
        if (EachQuestion[j].value == AllQuestions[i].correctAnswer) {
          EachQuestion[j].style.backgroundColor = "Green";
          score += 1;
          EachQuestion[j].checked = false;
        } else {
          EachQuestion[j].style.backgroundColor = "red";
          EachQuestion[j].checked = false;
          wrong.innerHTML += `<strong>Question ${
            i + 1
          } you got it wrong!</strong> <br>`;
        }
      } else {
        if (EachQuestion[j].value == AllQuestions[i].correctAnswer) {
          EachQuestion[j].style.backgroundColor = "Green";
        }
        EachQuestion[j].disabled = true;
      }
    }
  }
  return score;
}

function footerAnswer() {
  result.innerHTML =
    "Result: " + correctAnswers + " out of " + AllQuestions.length;
  submit.style.display = "none";
  retake.style.display = "block";
}
