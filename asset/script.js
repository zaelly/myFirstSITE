        //botao que habilita um termo de condições
        function checkbotao() {
            if (document.getElementById('check').checked == true) {
              document.getElementById('envia').disabled = ""
            }
            if (document.getElementById('check').checked == false) {
              document.getElementById('envia').disabled = "disabled"
    
            }
          }
    
        function mouseoverPass() {
            let obj = document.getElementById('password');
            obj.type = "text";
            }
    
        function mouseoutPass() {
        let obj = document.getElementById('password');
        obj.type = "password";
        }
        
        function userBemVindo() {
          var id = document.getElementById(Username);
          var letra ="";
          var nome ="";
          i = 0;
            while( letra != " "){
              letra = id.charAt(i);
              nome += letra;
              i++
            }
        }
        alert('bem vindo' + nome + '!');

     const botaoX = document.querySelector("abreBtn");
     const sidebar = document.querySelector(".sidebar");

    function fecharNavbar() {
      if (botaoX.addEventListener("click")) {
        sidebar.style.display = "block";
      }
      if (botaoX.addEventListener("click")) {
        sidebar.style.display = "none";
      }
    };

    //sessão logout e verificar o usuario
    function verificarAutenticacao() {
      if (!localStorage.getItem("usuarioLogado")) {
        window.location.href = " login.html";
      }
    }
    
    verificarAutenticacao();

    document.getElementById("formLogin").addEventListener("submit", function(event) {
      event.preventDefault(); // impede que o formulário seja enviado
    
      var usuario = document.getElementById("userName").value;
      var senha = document.getElementById("password").value;
    
      // código para verificar o usuário e a senha e armazenar o cookie ou a sessão
      // ...
    
      localStorage.setItem("usuarioLogado", true);
      window.location.href = "index.html";
    });

    //função q permite sair da pg
    function sair() {
      localStorage.removeItem("usuarioLogado");
      window.location.href = "login.html";
    }