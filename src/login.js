const btnTeacher=document.getElementById("teacher-btn");
const btnStudent=document.getElementById("student-btn");

btnTeacher.addEventListener('click',()=>{
teacherFlip();
});
btnStudent.addEventListener('click',()=>{
studentFlip();
});

function teacherFlip(){
const flipstyle=document.getElementById('flipStyle');
const flipcode=document.createElement('style');
flipcode.textContent=`.teacher-stn .teacher-inner {
  transform: rotateY(180deg);
}`
flipstyle.appendChild(flipcode);
}

function studentFlip(){
const flipstyle=document.getElementById('flipStyle');
const flipcode1=document.createElement('style');
flipcode1.textContent=`.student-stn .student-inner {
   transform: rotateY(180deg);
 }`
 flipstyle.appendChild(flipcode1);
 }

