const questions =[
  {
    question: "Which is the largest animal in the world?",
    answers:[
      {text: "Shark",correct :false},
      {text: "Blue Whale",correct : true},
      {text: "Elephant",correct :false},
      {text: "Giraffe",correct :false},
    ]
  },
  {
    question: "Which is the largest statue in the world?",
    answers:[
      {text: "Statue of Liberty",correct :false},
      {text: "Redimer statue of christ",correct :false},
      {text: "Statue of Unity",correct :true},
      {text: "Victory Statue",correct :false},
    ]
  },
  {
    question: "Which is the tallest building in the world?",
    answers:[
      {text: "burj khalifa",correct :true},
      {text: "Riyadh Tower",correct :false},
      {text: "Ampire state",correct :false},
      {text: "twin tower",correct :false},
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers:[
      {text: "Nile",correct :true},
      {text: "ganga",correct :false},
      {text: "yello river",correct :false},
      {text: "tsang po",correct :false},
    ]
  },
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

  function startQuiz(){
  currentQuestionIndex =0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestions();
}

function showQuestions(){
  resetState();
  let currentQuestion =questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML=questionNo + "." +currentQuestion.
  question;

  currentQuestion.answers.forEach(answer =>{
    const button =document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
   
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);

  });
}
function resetState(){
  nextButton.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn =e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled =true;
  });
  nextButton.style.display ="block";
}


function showScore(){
  resetState();
  questionElement.innerHTML =`You scored${score} out of  ${questions.length}!`
  nextButton.innerHTML ="Play Again"
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestions();
  }
  else{
    showScore();
  }
};


nextButton.addEventListener("click" , ()=>{
  if(currentQuestionIndex<questions.length){
    
    handleNextButton();
  }
  else{
    startQuiz();
  }
});
startQuiz();