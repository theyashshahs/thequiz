function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Question('What is the gaming tag of the developer of this quiz?', ['Optimus', 'Goku', 'Saiyan'], 0);

var q2 = new Question('Is the creator a Saiyan?', ['No', 'Yes'], 1);

var q3 = new Question('Is he a frontend developer or a backend developer?', ['Frontend', 'Backend'], 1);

var q4 = new Question('How many organization is the creator in?', ['1', '2', '3', '4'], 3);

var q5 = new Question('What is the creator\'s favourite food item?', ['Kaju', 'Frankie', 'Both of them'], 0);

var questions = [q1, q2, q3, q4, q5];

var number = Math.floor(Math.random() * questions.length);