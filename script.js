const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      possible_answers: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
      correct_answer: "Central Processing Unit",
      incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      possible_answers: ["Final", "Static", "Private", "Public"],
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Which Company Was Founded First?",
      possible_answers: ["Google", "Netflix", "Amazon", "Apple"],
      correct_answer: "Apple",
      incorrect_answers: ["Google", "Amazon", "Netflix"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Which Programming Language Was Created First?",
      possible_answers: ["JavaScript", "c", "Python", "PHP"],
      correct_answer: "C",
      incorrect_answers: ["JavaScript", "Python", "PHP"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What is the most preferred image format used for logos in the Wikimedia database?",
      possible_answers: [".jpeg", ".png", ".svg", ".gif"],
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      possible_answers: ["Counter Strike: Source", "Cascading Style Sheet", "Corrective Style Sheet", "Computer Style Sheet",],
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What is the code name for the mobile operating system Android 7.0?",
      possible_answers: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow",], 
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      possible_answers: ["140", "180", "240", "280"],
      correct_answer: "280",
      incorrect_answers: ["240", "180", "140"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "When Was The First iPhone Released?",
      possible_answers: ["2006", "2007", "2008", "2009"],
      correct_answer: "2007",
      incorrect_answers: ["2006", "2008", "2009"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Which programming language shares its name with an island in Indonesia?",
      possible_answers: ["Python", "C", "Jakarta", "Java"], 
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];


let currentQuestion = 1
let score = 0

let questionHeader = document.getElementById('question-header')
let scoreHeader = document.getElementById('score-header')
let questionNumber = document.getElementById('question-number')
let question = document.getElementById('question')
let answerChoices = document.getElementsByClassName('answer-choice')
let nextQuestion = document.getElementById('next-question')

questionHeader.innerText = `Question - ${currentQuestion}/${questions.length}`
scoreHeader.innerText = `Score - ${score}`
questionNumber.innerText = `Question ${currentQuestion}`
question.innerText = questions[currentQuestion - 1].question
for (let i = 0; i < questions[currentQuestion - 1].possible_answers.length; i++) {
  answerChoices[i].innerText = questions[currentQuestion - 1].possible_answers[i]
}