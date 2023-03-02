//botao que habilita um termo de condições
        function checkbotao() {
            if (document.getElementById('check').checked == true) {
              document.getElementById('envia').disabled = ""
            }
            if (document.getElementById('check').checked == false) {
              document.getElementById('envia').disabled = "disabled"
    
            }
          }

// olho
        document.getElementById("olho").onclick = function() {
            let obj = document.getElementById('password');
            obj.type = "text";
        };
    
        document.getElementById("olho").onclick = function (){
        let obj = document.getElementById('password');
        obj.type = "password";
        };
