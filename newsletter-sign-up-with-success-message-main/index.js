 
const emailField = document.getElementById("emailfield");
const emailError = document.getElementById("err");

const changeMail = document.querySelector("#mail");
const submitButton = document.querySelector('.button');


function validateEmail(){
  if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    // if the input field value doesn't match the email format, an error message pops up and the input field box style will change on error.
    emailError.innerHTML = "valid email required";
    emailField.style.borderColor = "rgba(216, 42, 42, 0.244)";
    emailField.style.backgroundColor = "#f76a6a49";
  }
    else{
      // however, if it matches, the div which displays the newsletter subscription form will disappear and the div containing the thank you message will appear in its place.
      // the user's email address is also displayed in the thank you message.
    document.querySelector('.grid-container').style.display = "none";
    document.querySelector('.con-grid-container').style.display = "block";
    changeMail.innerHTML = emailField.value;
    }
    
     
}

emailField.addEventListener('keypress', (e) => {
  // on clicking the enter button, the function runs the same.
    if (e.key == 'Enter') {
        validateEmail();
    }
});



