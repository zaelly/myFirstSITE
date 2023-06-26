
// Menu Mobile

//colocar o onclick separado da function e dps chamar a function com o document.onclick
function hamburguer(){
  document.getElementById("sliding-header-menu-outer").style.right = "right = 0px";
};
 function header_menu(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};

document.getElementById("hamburguer-icon").onclick = hamburguer();
document.getElementById("sliding-header-menu-close-button").onclick = header_menu();

//colocar o onclick separado da function e dps chamar a function com o document.onclick
function hamburguer(){
  document.getElementById("sliding-header-menu-outer").style.right = "right = 0px";
};
 function header_menu(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};

document.getElementById("hamburguer-icon").onclick = hamburguer();
document.getElementById("sliding-header-menu-close-button").onclick = header_menu();


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tag = document.getElementsByClassName("single-tab");
  
//parte que muda o ngc
for (let a = 0; a < about_tag.length; a++) {

  about_tag[a].onclick = function () {

    for (let b = 0; b < about_tag.length; b++) {
      about_tag[b].style['background-color'] = unselected_color;
      about_tag[b].style['font-weight'] = "normal";
    }
    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
}
}
// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var servico_atual = 0;

document.getElementById("service-previous").onclick = function () {
  if (servico_atual == 0) {
    var servico_anterior = our_services.length - 1;
  }else{
    var servico_anterior = servico_atual - 1;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
  document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;

  servico_atual = servico_anterior;
};
document.getElementById("service-next").onclick = function () {
  if (servico_atual == our_services.length - 1) {
    var servico_seguinte = 0;
  }else{
    var servico_seguinte = servico_atual + 1;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_seguinte].title;
  document.getElementById("service-text").innerHTML = our_services[servico_seguinte].text;

  servico_atual = servico_seguinte;
};

// Data Footer

var ano_atual =  new Date;
ano_atual = ano_atual.getFullYear();

document.getElementById("current_year").innerHTML = ano_atual ;
console.log(ano_atual);

//botao que habilita um termo de condições
function checkbotao() {
  if (document.getElementById('check').checked == true) {
    document.getElementById('envia').disabled = ""
  }
  if (document.getElementById('check').checked == false) {
    document.getElementById('envia').disabled = "disabled"

  }
}
// olho 1
function showPassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "text";
}

function hidePassword() {
  let passwordInput = document.getElementById('password');
  passwordInput.type = "password";
}

document.getElementById("olho").onclick = showPassword;
document.getElementById("olho").onmouseleave = hidePassword;

//olho 2
function mostrarPassword() {
  let passwordInput = document.getElementById('pass');
  passwordInput.type = "text";
}

function esconderPassword() {
  let passwordInput = document.getElementById('pass');
  passwordInput.type = "password";
}

document.getElementById("olho2").onclick = mostrarPassword;
document.getElementById("olho2").onmouseleave = esconderPassword;

// id="confiPassword" criar um input pra confirmar senha, mexer no mySQL

const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});