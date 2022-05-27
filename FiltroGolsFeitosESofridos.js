const form = document.getElementById('form');
const golsFeitos_TimeDaCasa = document.getElementById('golsFeitos_TimeDaCasa');
const golsSofridos_TimeDaCasa = document.getElementById('golsSofridos_TimeDaCasa');
const golsFeitos_TimeDeFora = document.getElementById('golsFeitos_TimeDeFora');
const golsSofridos_TimeDeFora = document.getElementById('golsSofridos_TimeDeFora');

form.addEventListener('submit', (e) => {
          e.preventDefault();
          checkInput();
          exibirLabel();
          exibirLink();
          inicia();
});

function checkInput() {
          const golsFeitos_TimeDaCasaValue = golsFeitos_TimeDaCasa.value;
          const golsSofridos_TimeDaCasaValue = golsSofridos_TimeDaCasa.value;
          const golsFeitos_TimeDeForaValue = golsFeitos_TimeDeFora.value;
          const golsSofridos_TimeDeForaValue = golsSofridos_TimeDeFora.value;

          if (golsFeitos_TimeDaCasaValue === '') {
                    setErrorFor(golsFeitos_TimeDaCasa, "Informe o Número de Gols.");
          }
          else {
                    setSucessFor(golsFeitos_TimeDaCasa);
          }

          if (golsSofridos_TimeDaCasaValue === '') {
                    setErrorFor(golsSofridos_TimeDaCasa, "Informe o Número de Gols.");
          }
          else {
                    setSucessFor(golsSofridos_TimeDaCasa);
          }

          if (golsFeitos_TimeDeForaValue === '') {
                    setErrorFor(golsFeitos_TimeDeFora, "Informe o Número de Gols.");
          }
          else {
                    setSucessFor(golsFeitos_TimeDeFora);
          }

          if (golsSofridos_TimeDeForaValue === '') {
                    setErrorFor(golsSofridos_TimeDeFora, "Informe o Número de Gols.");
          }
          else {
                    setSucessFor(golsSofridos_TimeDeFora);
          }

          if (golsFeitos_TimeDaCasaValue != ''
                    & golsSofridos_TimeDaCasaValue != ''
                    & golsFeitos_TimeDeForaValue != ''
                    & golsSofridos_TimeDeForaValue != '') {
                    calcularGolsSofridoEFeitos(golsFeitos_TimeDaCasaValue, golsSofridos_TimeDaCasaValue
                              , golsFeitos_TimeDeForaValue, golsSofridos_TimeDeForaValue);
          }
}

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

function inicia() {
          document.getElementById("painel").innerHTML = parseInt(sessionStorage.nome);
}

window.addEventListener("load", inicia);

function calcularGolsSofridoEFeitos(golsFeitos_TimeDaCasaValue, golsSofridos_TimeDaCasaValue,
          golsFeitos_TimeDeForaValue, golsSofridos_TimeDeForaValue) {


          resultadoGolsFeitos_TimeDaCasa = golsFeitos_TimeDaCasaValue / sessionStorage.TimeDaCasa;
          console.log(resultadoGolsFeitos_TimeDaCasa);
          resultadoGolsSofridos_TimeDaCasa = golsSofridos_TimeDaCasaValue / sessionStorage.TimeDaCasa;
          console.log(resultadoGolsSofridos_TimeDaCasa);

          somatorioGols_TimeDaCasa = (resultadoGolsFeitos_TimeDaCasa + resultadoGolsSofridos_TimeDaCasa) / 2;
          console.log(somatorioGols_TimeDaCasa);

          resultadoGolsFeitos_TimeDeFora = golsFeitos_TimeDeForaValue / sessionStorage.TimeDeFora;
          console.log(resultadoGolsFeitos_TimeDeFora);
          resultadoGolsSofridos_TimeDeFora = golsSofridos_TimeDeForaValue / sessionStorage.TimeDeFora;
          console.log(resultadoGolsSofridos_TimeDeFora);

          somatorioGols_TimeDeFora = (resultadoGolsFeitos_TimeDeFora + resultadoGolsSofridos_TimeDeFora) / 2;
          console.log(somatorioGols_TimeDeFora);

          if (somatorioGols_TimeDaCasa >= 1.5 & somatorioGols_TimeDeFora >= 1.5) {

                    document.querySelector(".resultado").innerText = "RESULTADO";
                    document.querySelector(".resultadoGolsSofridosFeitos").innerText = "APROVADO";
          }
          else {
                    document.querySelector(".resultado").innerText = "RESULTADO";
                    document.querySelector(".resultadoGolsSofridosFeitos").innerText = "REPROVADO - VOLTE E INICIE UMA NOVA ANÁLISE.";
          }
}