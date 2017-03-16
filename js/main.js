const typingDisplayBox =document.getElementById('typing-display-box');
const resultDisplayBox = document.getElementById('result-display-box');

function buttonOnClick(value) {
 if (value=='clear') {
   resultDisplayBox.innerHTML=" ";
   typingDisplayBox.innerHTML=" ";
   return;
 }
  if (value!=='=') {
   typingDisplayBox.innerHTML+=value;
 }else{
   const expr= typingDisplayBox.innerHTML;
   const results = eval(expr);
   resultDisplayBox.innerHTML= results;
 }
}
