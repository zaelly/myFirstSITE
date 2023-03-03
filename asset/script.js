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
        document.getElementById("olho").onmouseover = function() {
            let obj = document.getElementById('password').innerHTML;
            obj.type = "text";
        };
    
        document.getElementById("olho").onmouseout = function (){
        let obj = document.getElementById('password').innerHTML;
        obj.type = "password";
        };

// outra forma

        //  function mouseoutPass () {
        //     let obj = document.getElementById('password');
        //     obj.type = "text";
        // };

        //  function mouseoverPass () {
        //   let obj = document.getElementById('password');
        //   obj.type = "password";
        //   };
  