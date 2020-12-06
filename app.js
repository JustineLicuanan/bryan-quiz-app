const ques=document.getElementById("ques");
const ans=document.getElementById("quesAns");
const btnSubmit=document.getElementById("btnSubmit");
const output=document.getElementById("check");
const btndelete=document.getElementById("btnDel")

btnSubmit.addEventListener('click',function(){createQAFunc(ques,ans)});


function createQAFunc(a,b){
const question = a.value;
const answer = b.value;
localStorage.setItem(question,answer);
output.innerHTML+=`<hr>Question: ${question}<br> Answer:${answer}<br><hr>`;   
}

btndelete.addEventListener('click',deleteAllQAFunc);
function deleteAllQAFunc(){
output.remove();    
}