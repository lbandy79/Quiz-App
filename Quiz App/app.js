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
    	const answerContainers = quizContainer.querySelectorAll(".answers");

    	// keep track of user's answers
    	let numCorrect = 0;

    	// for each question...
    	myQuestions.forEach((currentQuestion, questionNumber) => {
     	 // find selected answer
      		const answerContainer = answerContainers[questionNumber];
      		const selector = `input[name=question${questionNumber}]:checked`;
      		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      	// if answer is correct
      		if (userAnswer === currentQuestion.correctAnswer) {
       		 // add to the number of correct answers
       		 numCorrect++;

        	// color the answers green
        	//answerContainers[questionNumber].style.color = "lightgreen";
      	} /* else if {
        	// if answer is wrong or blank
        	// color the answers red
        	answerContainers[questionNumber].style.color = "red";
      		} */
    	});

    	// show number of correct answers out of total
    	resultsContainer.innerHTML = `SCORE ${numCorrect}`;
  	}




    let myQuestions = [{
        question: "Guess the Game?",
        answers: {
            a: "Casino Royal",
            b: "What Stays in Vegas",
            c: "Blackjack",
        },
        correctAnswer: "c",
    }, 
    	{
        question: "Guess the Game?",
        answers: {
            a: "Air-Sea Battle",
            b: "Republicans vs Democrats",
            c: "World War III",
        },
        correctAnswer: "a",
    }, 
    	{
        question: "Guess the game?",
        answers: {
            a: "Salvador Dali's Art Brigade",
            b: "Basic Math",
            c: "Freak Out the Frog",
        },
        correctAnswer: "b",
    }, 
    	{   
        question: "Guess the game?",
        answers: {
            a: "It's Trump!",
            b: "Take This, Stalin!",
            c: "Combat",
        },
        correctAnswer: "c",
    }, 
    {       
        question: "Guess the game?",
        answers: {
            a: "That Racing Movie With Tom Cruise",
            b: "Indy 500",
            c: "Uber: The Game",
        },
        correctAnswer: "b",
    }, 
    {        
        question: "Guess the game?",
        answers: {
            a: "Jefferson Airplane",
            b: "Jefferson Star Ship",
            c: "Star Ship",
        },
        correctAnswer: "c",
    }, 
    {       
        question: "Guess the game?",
        answers: {
            a: "Old Timey Car Show",
            b: "Street Racer",
            c: "Motorcycle vs Car",
        },
        correctAnswer: "b",
    }, 
    {        
        question: "Guess the game?",
        answers: {
            a: "What the Block?",
            b: "Internet Search History",
            c: "Surround",
        },
        correctAnswer: "c",
    }, 
    {       
        question: "Guess the game?",
        answers: {
            a: "Friday the 13th",
            b: "SPORTS!",
            c: "Video Olympics",
        },
        correctAnswer: "c",
    }, 
    {        
        question: "Guess the game?",
        answers: {
            a: "3-D Tic-Tac-Toe",
            b: "Grid Wars",
            c: "Disco Space",
        },
        correctAnswer: "a",
    }, 
    ];

     // display quiz right away
    buildQuiz();

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

	let boxIndex = 1;
	boxSlide(boxIndex);	

	function boxSlide(o) {
  		var i;
  		var box = document.getElementsByClassName("boxart");
  		if (o > box.length) {boxIndex = 1} 
  		if (o < 1) {boxIndex = box.length}
  		for (i = 0; i < box.length; i++) {
      		box[i].style.display = "none"; 
  		}
  			box[boxIndex-1].style.display = "block"; 
		}

	function showNextBox(o) {
  		boxSlide(boxIndex += 1);
		}

	function showPreviousBox(o) {
  		boxSlide(boxIndex -= 1);
		}

	previousButton.addEventListener("click", showPreviousSlide);
	previousButton.addEventListener("click", showPreviousBox);
	nextButton.addEventListener("click", showNextSlide);
	nextButton.addEventListener("click", showNextBox);
	nextButton.addEventListener('click', showResults);
	submitButton.addEventListener('click', () => {
		document.getElementById("game-over").innerHTML = "GAME OVER";
		});
});