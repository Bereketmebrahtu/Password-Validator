//Write a function that checks the length of the string. The function should output true if the string more than 5 characters long. Otherwise, return false. 


let input = document.querySelector("#input")
let button = document.querySelector("button")
let output = document.querySelector('p')
  


function stringLength() {
  let inputEl = input.value.length
  if(inputEl > 5) {
  return true
  } else {
    return false
}
  }
  

function stringCase() {
let stringUpper = /[A-Z]/.test(input.value)
let stringLower = /[a-z]+/.test(input.value)
let checkForNum = /[0-9]/.test(input.value)
  if(stringUpper && stringLower && checkForNum) {
    
    return true

   
  }
  return false
  
}
    

function outPut() {
  if(stringLength() && stringCase()) {
   output.innerText = "valid"

  } else output.innerText = "Not Valid"
}



button.addEventListener("click", outPut);


//Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return true - and if either are missing, it should return false.




  //Finally, use DOM Manipulation to tie everything together 🧙  You'll need to check the value of the input when the user clicks the button. When the button is clicked, verify the input gives true when given as an argument to each of the functions. 
  
 
 
