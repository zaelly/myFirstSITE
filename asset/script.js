//botao que habilita um termo de condições
          function checkbotao() {
            if (document.getElementById('check').checked == true) {
              document.getElementById('envia').disabled = ""
            }
            if (document.getElementById('check').checked == false) {
              document.getElementById('envia').disabled = "disabled"
    
            }
          }
    document.getElementById("checkbox").onmouseenter = showPassword;

// olho
          function showPassword() {
            let passwordInput = document.getElementById('password');
            passwordInput.type = "text";
          }
          
          function hidePassword() {
            let passwordInput = document.getElementById('password');
            passwordInput.type = "password";
          }
          
          document.getElementById("olho").onmouseenter = showPassword;
          document.getElementById("olho").onmouseleave = hidePassword;

          
function showPassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "text";
}

function hidePassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "password";
}

document.getElementById("olho").onmouseenter = showPassword;
document.getElementById("olho").onmouseleave = hidePassword;


  
   


   
  
