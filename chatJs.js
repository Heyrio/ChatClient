var sendBtn = document.querySelector("#send");
var par = document.querySelector("p");

var userInput;


function post(userText) {
  var text = document.createTextNode("USER: " + userText);
  var newLine = document.createElement("br");
  par.appendChild(text);
  par.appendChild(newLine);
  
  ;
}

sendBtn.addEventListener("click", function(){
 userInput = document.querySelector("textarea").value;
  post(userInput);
});

$("textarea").on("keypress", function(e){
  if(e.which === 13){
    var entData;
    entData = $(this).value;
    post(entData);
    $(this).val("");
     }
});
