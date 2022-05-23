const form = document.getElementById('form');
const nmDeJgTimeDaCasa = document.getElementById('nmDeJgTimeDaCasa');
const nmDeJgTimeDeFora = document.getElementById('nmDeJgTimeDeFora');

form.addEventListener('submit', (e) => {
          e.preventDefault();
          checkInput();
});

function checkInput() {
          const nmDeJgTimeDaCasaValue = nmDeJgTimeDaCasa.value;
          const nmDeJgTimeDaForaValue = nmDeJgTimeDeFora.value;

          if (nmDeJgTimeDaCasaValue == '') {
                    setErrorFor(nmDeJgTimeDaCasa, "Informe o Número de Jogos.");
          }
          else {
                    setSucessFor(nmDeJgTimeDaCasa);
          }

          if (nmDeJgTimeDaForaValue == '') {
                    setErrorFor(nmDeJgTimeDeFora, "Informe o Número de Jogos.");
          }
          else {
                    setSucessFor(nmDeJgTimeDeFora);
          }

          var num1 = nmDeJgTimeDaCasaValue;
          var num2 = nmDeJgTimeDaForaValue;
          var resultado = parseInt(num1) + parseInt(num2);
          document.querySelector(".resultado").innerHTML = resultado;

}

function setErrorFor(input, mensagem) {
          const formControl = input.parentElement;
          const small = formControl.querySelector("small");

          small.innerText = mensagem;
          // Adicionar a classe de erro
          formControl.className = "form-control error";
}

function setSucessFor(input) {
          const formControl = input.parentElement;

          // Adicionar a classe de sucesso
          formControl.className = 'form-control sucess';
}

