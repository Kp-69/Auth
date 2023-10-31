const form = document.querySelector("#login-form");
const message = document.querySelector("#message");

// console.log(form.elements);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = form.elements.username.value;
  
  const password = form.elements.inputPass.value;
  console.log("yaha tk chl gya hai")

  if (username === "admin@gmail.com" && password === "admin") {
    message.textContent = "Login successful!";

    setTimeout(function() {
      window.location.href = "DASHBOARD/index2.html";
      // console.log("ha chala jayega");
    }, 1000);
  } else {
    message.textContent = "Login failed. Please try again.";
  }
});


/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
   const input = document.getElementById(inputPass),
         iconEye = document.getElementById(inputIcon)
         
   iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text'

           // Add icon
           iconEye.classList.add('ri-eye-line')
           // Remove icon
           iconEye.classList.remove('ri-eye-off-line')
       }else{
           // Change to password
           input.type = 'password'

           // Remove icon
           iconEye.classList.remove('ri-eye-line')
           // Add icon
           iconEye.classList.add('ri-eye-off-line')
       }
   })
}



showHiddenPass('input-pass','input-icon')