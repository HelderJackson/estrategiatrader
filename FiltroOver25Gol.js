const form = document.getElementById('form');
const nmDeJgTimeDaCasa = document.getElementById('nmDeJgTimeDaCasa');
const nmDeJgTimeDeFora = document.getElementById('nmDeJgTimeDeFora');

form.addEventListener('submit', (e) => {
          e.preventDefault();
          checkInput();
          exibirLabel();
          exibirLink();
          inicia();
});

function checkInput() {
          const nmDeJgTimeDaCasaValue = nmDeJgTimeDaCasa.value;
          const nmDeJgTimeDaForaValue = nmDeJgTimeDeFora.value;

          if (nmDeJgTimeDaCasaValue === '') {
                    setErrorFor(nmDeJgTimeDaCasa, "Informe o Número de Jogos.");
          }
          else {
                    setSucessFor(nmDeJgTimeDaCasa);
          }

          if (nmDeJgTimeDaForaValue === '') {
                    setErrorFor(nmDeJgTimeDeFora, "Informe o Número de Jogos.");
          }
          else {
                    setSucessFor(nmDeJgTimeDeFora);
          }

          if (nmDeJgTimeDaCasaValue != '' & nmDeJgTimeDaForaValue != '') {
                    calcularOver(nmDeJgTimeDaCasaValue, nmDeJgTimeDaForaValue);
          }
}

var visibilidade = true;

function exibirLabel() {
          document.getElementById('resultadoFinalOver').style.display = "block";
}

function exibirLink() {
          document.getElementById('navegacao').style.display = "block";
          document.querySelector(".voltar").innerText = "VOLTAR";
          document.querySelector(".continuar").innerText = "CONTINUAR";
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

function calcularOver(nmDeJgTimeDaCasaValue, nmDeJgTimeDaForaValue) {
          const percentual_TimeDaCasa = 0.65;
          const percentual_TimeDeFora = 0.50;
          var num1 = nmDeJgTimeDaCasaValue;
          var num2 = nmDeJgTimeDaForaValue;
          var numeroDeJogos_TimeDaCasa = parseInt(num1) * percentual_TimeDaCasa;
          var numeroDeJogos_TimeDeFora = parseInt(num2) * percentual_TimeDeFora;
          document.querySelector(".resultadoDeCasa").innerText = "Time da CASA precisa de " + Math.round(numeroDeJogos_TimeDaCasa) + " OVER 2,5 Gols.";
          document.querySelector(".resultadoDeFora").innerText = "Time de FORA precisa de " + Math.round(numeroDeJogos_TimeDeFora) + " OVER 2,5 Gols.";
          document.querySelector(".resultado").innerText = "RESULTADO";
          document.querySelector(".aprovado").innerText = "Verificar se jogo foi Aprovado no critério OVER 2,5 GOLS.";

}

function pagina() {
          sessionStorage.TimeDaCasa = nmDeJgTimeDaCasa.value;
          sessionStorage.TimeDeFora = nmDeJgTimeDeFora.value;
          window.location.href = "FiltroGolsFeitosESofridos.html";
}

function inicia() {

          document.getElementById("cont").addEventListener("click", function () {
                    pagina();
          })
}

window.addEventListener("Load", inicia);
