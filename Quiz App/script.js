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

const questionEl = document.getElementById('question');
const answerEls = document.getElementByAll('.answer');
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

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    answer = undefined;

    answerEls.forEach((answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
});