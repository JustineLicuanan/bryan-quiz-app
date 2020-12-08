const addQuestionForm = document.getElementById('add-question-form');
const output = document.getElementById('check');
const btndelete = document.getElementById('btnDel');

// State(s)
const localQuestions = [];

addQuestionForm.addEventListener('submit', function (event) {
	// Prevent unwanted page refresh
	event.preventDefault();

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
	output.innerHTML += `<p><hr> Question: ${question} <br> Answer: ${answer}<hr></p>`;
}

// Delete all data in the DOM
function deleteAllQAFunc() {
	output.innerHTML = '';
}
