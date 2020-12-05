const ques=document.getElementById("ques");
const ans=document.getElementById("quesAns");
const btnSubmit=document.getElementById("btnSubmit");
const output=document.getElementById("check");

btnSubmit.onclick=function addDataFunc(){
const question = ques.value;
const answer = ans.value;
localStorage.setItem(question,answer);
output.innerHTML+=`Question: ${question}<br> Answer:${answer}<hr>`
}
