const output = document.getElementById('check');

addEventListener('DOMContentLoaded', () => {
	const storedLocalQuestion = JSON.parse(localStorage.getItem('questions'));
	storedLocalQuestion.forEach((storedLocalQuestions) => {
		createQFunc(storedLocalQuestions.question);
	});
});

function createQFunc(question) {
	const mainParagraph = document.createElement('p');
	const hrTop = document.createElement('hr');
	const hrBot = document.createElement('hr');
	const questionParagraph = document.createElement('p');
	const answerParagraph = document.createElement('p');
	const inputAnswer = document.createElement('input');
	const submitAnswerBtn = document.createElement('button');

	questionParagraph.textContent = `Question: ${question}`;
	inputAnswer.placeholder = `Answer.....`;
	submitAnswerBtn.textContent = `Submit Answer`;

	mainParagraph.appendChild(hrTop);
	mainParagraph.appendChild(questionParagraph);
	mainParagraph.appendChild(answerParagraph);
	mainParagraph.appendChild(inputAnswer);
	mainParagraph.appendChild(submitAnswerBtn);
	mainParagraph.appendChild(hrBot);
	output.appendChild(mainParagraph);
}
