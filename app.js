const ques=document.getElementById("ques");
const ans=document.getElementById("quesAns");
const btnSubmit=document.getElementById("btnSubmit");
const output=document.getElementById("check");
const btndelete=document.getElementById("btnDel")
const dataQuesAns=[];

btnSubmit.addEventListener('click',function(){createQAFunc(ques,ans)});
btnSubmit.addEventListener('click',function(){saveDataFunc(ques,ans)});
btndelete.addEventListener('click',deleteAllQAFunc);

function createQAFunc(a,b){   
const question = a.value;
const answer = b.value;
output.innerHTML+=`<p><hr>Question: ${question}<br> Answer:${answer}<hr></p>`; 
}

function saveDataFunc(a,b){  
const question = a.value;
const answer = b.value;
const dataDescription="Question and the Answer";
dataQuesAns.push([{question,answer}]);
localStorage.setItem(dataDescription,JSON.stringify(dataQuesAns));
}

function deleteAllQAFunc(){
output.remove(); 
location.reload();
}
