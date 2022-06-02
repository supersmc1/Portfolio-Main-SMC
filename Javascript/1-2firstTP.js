const content = "WELCOME TO MY ELECTRONIC_DOCUMENT, \n THIS IS WEB-DESIGN \n I'M WEB-DESIGNER";
const text = document.querySelector(".text");
let indexx = 0;

function typing(){
  let txt = content[indexx++];
  text.innerHTML += txt=== "\n" ? "<br/>": txt; 
  if (indexx > content.length) {
      text.textContent = "";
      indexx = 0;
  }
}
setInterval(typing, 200)

//------------------------------------------------------------