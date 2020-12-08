const ques=document.getElementById("ques");
const ans=document.getElementById("quesAns");
const btnSubmit=document.getElementById("btnSubmit");
const output=document.getElementById("check");
const btndelete=document.getElementById("btnDel")
const dataQues=[];
const dataAns=[];


btnSubmit.addEventListener('click',function(){saveDataFunc(ques,ans)});
btnSubmit.addEventListener('click',function(){createQAFunc(ques,ans)});
btndelete.addEventListener('click',deleteAllQAFunc);
    
function createQAFunc(a,b){
const question=a.value;
const answer=b.value;
output.innerHTML+=`<p><hr> Question: ${question} <br> Answer: ${answer}<hr></p>`;
}

function saveDataFunc(a,b){  
const question = a.value;
const answer = b.value;
dataAns.push(answer);
dataQues.push(question);
localStorage.setItem("Question",JSON.stringify(dataQues));
localStorage.setItem("Answer",JSON.stringify(dataAns));
}

function deleteAllQAFunc(){
output.remove(); 
location.reload();
}
