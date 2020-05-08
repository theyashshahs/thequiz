function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.display = function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
};

Question.prototype.checkAnswer = function(answer, callback) {
    var sc;
    if(answer === this.correct) {
        console.log('Correct Answer!');
        sc = callback(true);
    }
    else {
        console.log('Wrong Answer! try again :)');
        sc = callback(false);
    }

    this.displayScore(sc);
}; 

Question.prototype.displayScore = function(score) {
    console.log('Your current score: ' + score);

    console.log('------------------------------------------------------------');
};

function score() {
    var sc = 0;

    return function(correctAnswer) {
        if(correctAnswer) {
            sc++;
        }
        return sc;
    };
}

var keepScore = score();

var q1 = new Question('What is the gaming tag of the developer of this quiz?', ['Optimus', 'Goku', 'Saiyan'], 0);

var q2 = new Question('Is the creator a Saiyan?', ['No', 'Yes'], 1);

var q3 = new Question('Is he a frontend developer or a backend developer?', ['Frontend', 'Backend'], 1);

var q4 = new Question('How many organization is the creator in?', ['1', '2', '3', '4'], 3);

var q5 = new Question('What is the creator\'s favourite food item?', ['Kaju', 'Frankie', 'Both of them'], 0);

var questions = [q1, q2, q3, q4, q5];



function nextQuestion() { 
    var number = Math.floor(Math.random() * questions.length);

	questions[number].display();

    var answer = prompt("Please select the correct option.");
    
    if(answer !== 'exit') {
        questions[number].checkAnswer(parseInt(answer), keepScore);

        nextQuestion();
    }
}

nextQuestion();

