const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');

const questions = [
    {
        question: "What is 10 + 10?",
        options: ["20", "30", "40", "50"],
        answer: "20"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
];

function generateQuiz() {
    const output = [];

    questions.forEach((question, index) => {
        const options = [];
        for (let i = 0; i < question.options.length; i++) {
            options.push(
                `<label>
                    <input type="radio" name="question${index}" value="${question.options[i]}">
                    ${question.options[i]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <h4>${question.question}</h4>
                ${options.join('')}
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    alert(`Your score: ${score}/${questions.length}`);
}

generateQuiz();

submitButton.addEventListener('click', submitQuiz);
