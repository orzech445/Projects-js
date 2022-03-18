const quizData = [
    {
        question: "Ile Janek ma lat?",
        a: '21',
        b: '23',
        c: '26',
        d: '28',
        correct: 'c'
    }, {
        question: 'Jaki jest najlepszy najpopularniejszy jezyk programowania?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Kto jest prezydentem Polski?',
        a: 'Andrzej Duda',
        b: 'Lech Walesa',
        c: 'Bartosz Zalewski',
        d: 'Jan Orzechowski',
        correct: 'a'
    }, {
        question: 'Co oznacza skrot HTML?',
        a: 'Cascading Style Sheet',
        b: 'Hypertext Markup Language',
        c: 'Jason Object Notation',
        d: 'Helicopters Fire Danger',
        correct: 'b'
    }
]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// initial call
loadQuiz();

function loadQuiz() {
    diselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function diselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].question) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});