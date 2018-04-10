$(document).ready(() => {

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // we'll want to store the list of answer choices
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        		</div>`
                );
            });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name=question' + questionNumber + ']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });
    }    

    let myQuestions = [{
        //boxArt: 
        question: "Guess the Game?",
        answers: {
            a: "Casino Royal",
            b: "What Stays in Vegas",
            c: "Black Jack"
        },
        correctAnswer: "Black Jack",
    }, {
        //boxArt: document.getElementById('#question2'),
        question: "Guess the Game?",
        answers: {
            a: "Air Sea Battle",
            b: "Mommy and Daddy are Fighting Again",
            c: "World War III"
        },
        correctAnswer: "Air Sea Battle",
    }, {
        boxArt: document.getElementById('question3'),
        question: "Guess the game?",
        answers: {
            a: "Salvador Dali's Math Brigade",
            b: "Basic Math",
            c: "Freak Out the Frog"
        },
        correctAnswer: "Basic Math",
    }, {
        boxArt: document.getElementById('question4'),
        question: "Guess the game?",
        answers: {
            a: "High School Prom",
            b: "Take This, Stalin!",
            c: "Combat"
        },
        correctAnswer: "Combat",
    }, {
        boxArt: document.getElementById('question5'),
        question: "Guess the game?",
        answers: {
            a: "That Racing Movie With Tom Cruise: The Game",
            b: "Indy 500",
            c: "Drive-Thru Heads"
        },
        correctAnswer: "Indy 500",
    }, {
        boxArt: document.getElementById('question6'),
        question: "Guess the game?",
        answers: {
            a: "Jefferson Airplane",
            b: "Jefferson Star Ship",
            c: "Star Ship"
        },
        correctAnswer: "Star Ship",
    }, {
        boxArt: document.getElementById('question7'),
        question: "Guess the game?",
        answers: {
            a: "Old Timey Car Show",
            b: "Street Racer",
            c: "Motorcycle vs Car"
        },
        correctAnswer: "Street Racer",
    }, {
        boxArt: document.getElementById('question8'),
        question: "Guess the game?",
        answers: {
            a: "Block Pilot",
            b: "Internet Search History",
            c: "Surround"
        },
        correctAnswer: "Surround",
    }, {
        boxArt: document.getElementById('question9'),
        question: "Guess the game?",
        answers: {
            a: "Friday the 13th",
            b: "SPORTS!",
            c: "Video Olympics"
        },
        correctAnswer: "Video Olympics",
    }, {
        boxArt: document.getElementById('question9'),
        question: "Guess the game?",
        answers: {
            a: "3-D Tic-Tac-Toe",
            b: "Grid Wars",
            c: "Disco Space"
        },
        correctAnswer: "3-D Tic-Tac-Toe",
    }, ];

     // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener('click', showResults);

    const previousButton = document.getElementById("previous");
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;

	function showSlide(n) {
  		slides[currentSlide].classList.remove('active-slide');
  		slides[n].classList.add('active-slide');
  		currentSlide = n;
  		if(currentSlide===0){
    		previousButton.style.display = 'none';
  		}
  		else{
    		previousButton.style.display = 'inline-block';
  		}		
  		if(currentSlide===slides.length-1){
    		nextButton.style.display = 'none';
    		submitButton.style.display = 'inline-block';
  		}
  		else{
    		nextButton.style.display = 'inline-block';
    		submitButton.style.display = 'none';
  			}
		}
		showSlide(0);

	function showNextSlide() {
  		showSlide(currentSlide + 1);
		}

	function showPreviousSlide() {
  		showSlide(currentSlide - 1);
		}

	previousButton.addEventListener("click", showPreviousSlide);
	nextButton.addEventListener("click", showNextSlide);
});