const quizData=[
{ question: "Q1. Taylor Swift was born in :",
a:"1989",
b:"1998",
c:"1999",
d:"1988" ,
correct: "a"
   
},
{
    question: "Q2. Taylor Swift's middle name : ",
    a:"Seth",
    b:"Elizabeth",
    c:"Alan",
    d:"Alison" ,
    correct: "d"
},
{
    question: "Q3. Taylor Swift wrote 'Delicate' about :",
    a:"Joe Jonas",
    b:"Jake Gyllenhaal",
    c:"Joe Alwyn",
    d:"Taylor Lautner" ,
    correct: "c"
},
{
    question: "Q4. Taylor Swift physically disappeared from publiclife in year :",
    a:"2015",
    b:"2016",
    c:"2017",
    d:"2018" ,
    correct: "b"
},
{
    question: "Q5. Taylor Swift made a comeback with album :",
    a:"1989",
    b:"Taylor Swift",
    c:"Reputation",
    d:"Red" ,
    correct: "c"
},
{
    question: "Q6. Taylor Swift was called a :",
    a:"snake",
    b:"rat",
    c:"cat",
    d:"witch" ,
    correct: "a"
},
{
    question: "Q7. Taylor Swift went through which surgery:",
    a:"Cardiothoracic surgery",
    b:"Plastic surgery",
    c:"LASIK",
    d:"None of the above" ,
    correct: "c"
},
{
    question: "Q8. Taylor Swift's comeback music video :",
    a:"Shake it off",
    b:"Delicate",
    c:"Ready for it",
    d:"Look what you made me do" ,
    correct: "d"
},
{
    question: "Q9. Taylor Swift removed her music from :",
    a:"iTunes",
    b:"Spotify",
    c:"Youtube music",
    d:"Wynk music" ,
    correct: "b"
},
{
    question: "Q10. Taylor Swift's 'Reputation' has how many singles ?",
    a:"6",
    b:"13",
    c:"4",
    d:"15" ,
    correct: "c"
},

];





const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h4 styles="text-align:center">Listen to Reputation album on<a href="https://youtube.com/playlist?list=PLV1bhAAf21cSxHaqUDyG1meQz3hUPi4eO">  youTube</h4>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})