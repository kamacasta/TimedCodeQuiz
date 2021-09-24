// Universal variables
const timer = document.querySelector('.timer');
const gameOver = document.querySelector('#gameOver');
const introduction = document.querySelector('.introduction')
const initTest = document.querySelector('#initiateTest');
const quiz = document.querySelector('.quiz');
const questions = document.querySelector(".quizQuestions");
const answers = document.querySelector('.answers');
const notify = document.querySelector('.notify');
const correct = document.querySelector('.correct')
const incorrect = document.querySelector('.incorrect')
const initials = document.querySelector('initialsInput')
const submit = document.querySelector('#submitScore')


// Buttons given Event Listners
initTest.addEventListener('click', startQuiz);
submit.addEventListener('click', scoreSubmit)

// let variable created for timer
let timeRemaining = 75;
// variables created for use in logic
let questionOn;
let score;

// function for the quiz to be initated
// Calls timer function
function startQuiz () {
    // styles given by setAttribute
    introduction.setAttribute('style', 'display: none');
    quiz.setAttribute('style', 'display: block');
    // timer will display the timeRemaining
    timer.textContent= ':' + timeRemaining;
    time();
    questionOn = 0
    currentQuestionOn(question[questionOn++]);
};
// function displays the current question the tester is on.
function currentQuestionOn (question) {
    // This will present the questions
    questions.textContent = question.question
    // Passing the arrow function into a button that will be created
    question.answers.array.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    // if statement checks if the input was correct or incorrect
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    answerBtn.appendChild(button);
    button.addEventListener('click', answersResults)
    });
}

// depending on the results of the answer the time will decrease and will display the result to quizer
function answersResults(event) {
    // created these variables they are depreceted without an event
    const choosenAnswer = event.target;
    const correctAnswer = choosenAnswer.dataset.correct;
    // if statement for the correct notification or incorrect notification
    // if (!Object.is) {
    //     Object.defineProperty()
    // }
    if(choosenAnswer === 'true'){
        incorrect;
        correct;
    } else {
        //and if the quizers got the question incorrect the timer is decremented
        correct;
        incorrect;
        // 10 second decrement
        timeRemaining -= 10;
    }
    newQuestion();
}

function newQuestion () {
    
}




// Function for timer to countdown 
function time() {
    let timeInterval = setInterval(function () {
         // using the let varible created gloabally timeRemaining
        if(timeRemaining >= 1) {
            timeRemaining --;
            timer.textContent = 'Time: ' + timeRemaining;
            // if the quizer runs out of time
        }else {
            gameOver.getElementedById = 'You ran out of time!';
            clearInterval(timeInterval);
            gameOver();
        }
            
        }
        )}