const addQuestionForm = document.getElementById('add-question-form');
const output = document.getElementById('check');
const btndelete = document.getElementById('btnDel');

// State(s)
const localQuestions = [];

addQuestionForm.addEventListener('submit', function (event) {
	// Prevent unwanted page refresh
	event.preventDefault();

	if (!addQuestionForm.ques.value.trim() || !addQuestionForm.ans.value.trim()) {
		// Delete input fields white spaces
		addQuestionForm.ques.value = '';
		addQuestionForm.ans.value = '';

		// Show an alert message
		return alert('All fields are required!');
	}

	saveDataFunc(addQuestionForm.ques.value, addQuestionForm.ans.value);
	createQAFunc(addQuestionForm.ques.value, addQuestionForm.ans.value);

	// Delete input fields value after creating, and saving to localStorage
	addQuestionForm.ques.value = '';
	addQuestionForm.ans.value = '';
});

btndelete.addEventListener('click', function () {
	deleteAllQAFunc();
});

// Save new data to local storage
function saveDataFunc(question, answer) {
	const questions = {
		question, // Same as doing { question: question }
		answer, // Same as doing { answer: answer }
	};

	localQuestions.push(questions);
	localStorage.setItem('questions', JSON.stringify(localQuestions));
}

// Output created data to the DOM
function createQAFunc(question, answer) {
	const mainParagraph = document.createElement('p');
	const hrTop = document.createElement('hr');
	const hrBot = document.createElement('hr');
	const questionParagraph = document.createElement('p');
	const answerParagraph = document.createElement('p');

	// Set text content of QnA elements
	questionParagraph.textContent = `Question: ${question}`;
	answerParagraph.textContent = `Answer: ${answer}`;

	// Append child elements to their parent
	mainParagraph.appendChild(hrTop);
	mainParagraph.appendChild(questionParagraph);
	mainParagraph.appendChild(answerParagraph);
	mainParagraph.appendChild(hrBot);
	output.appendChild(mainParagraph);
}

// Delete all data in the DOM
function deleteAllQAFunc() {
	output.innerHTML = '';
}
