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
        alert('bem vindo' + userBemVindo + '!');
     
