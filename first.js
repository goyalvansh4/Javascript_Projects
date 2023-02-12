var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
 
function clickHandler(){
  outputdiv.innerText = " " + txtInput.value;
}

btnTranslate.addEventListener("click",clickHandler);