const input = document.querySelector(".input-field");

const buttons = document.querySelectorAll(".numbers");

const AC = document.querySelector(".delete");

const answer = document.querySelector(".answer");

// //for all buttons to click and add thier html to input field 
buttons.forEach(button=>{
  button.addEventListener("click",()=>{
input.value += button.innerHTML
  })
})

// //ac button to del the input field text or html
AC.addEventListener("click",()=>{
 input.value = "";
})

// // 
answer.addEventListener("click", () => {
  try {
    // Evaluate the expression and set the result to the input field
    input.value = eval(input.value);
  } catch (error) {
    // If there's an error (like a syntax error), display an error message
    input.value = "Error";
  }
});

