const form = document.getElementById('form');
const qtdJogsEmCasaDoTimeDaCasa = document.getElementById('qtdJogsEmCasaDoTimeDaCasa');
const qtdOver15GolsDoTimeDaCasa = document.getElementById('qtdOver15GolsDoTimeDaCasa');
const qtdJogsForaDoTimeDeFora = document.getElementById('qtdJogsForaDoTimeDeFora');
const qtdOver15GolsDoTimeDeFora = document.getElementById('qtdOver15GolsDoTimeDeFora');

form.addEventListener('submit', (e) => {
          e.preventDefault();
          checkInput();
          exibirLabel();
          exibirLink();
          exibirInput();
});

function checkInput() {
          const qtdJogsEmCasaDoTimeDaCasaValue = qtdJogsEmCasaDoTimeDaCasa.value;
          const qtdOver15GolsDoTimeDaCasaValue = qtdOver15GolsDoTimeDaCasa.value;
          const qtdJogsForaDoTimeDeForaValue = qtdJogsForaDoTimeDeFora.value;
          const qtdOver15GolsDoTimeDeForaValue = qtdOver15GolsDoTimeDeFora.value;

          if (qtdJogsEmCasaDoTimeDaCasaValue === '') {
                    setErrorFor(qtdJogsEmCasaDoTimeDaCasa, "Informe a Quantidade de Jogos.");
          }
          else {
                    setSucessFor(qtdJogsEmCasaDoTimeDaCasa);
          }

          if (qtdOver15GolsDoTimeDaCasaValue === '') {
                    setErrorFor(qtdOver15GolsDoTimeDaCasa, "Informe a Quantidade OVER 1,5 Gols do Time da Casa.");
          }
          else {
                    setSucessFor(qtdOver15GolsDoTimeDaCasa);
          }

          if (qtdJogsForaDoTimeDeForaValue === '') {
                    setErrorFor(qtdJogsForaDoTimeDeFora, "Informe a Quantidade de Jogos.");
          }
          else {
                    setSucessFor(qtdJogsForaDoTimeDeFora);
          }

          if (qtdOver15GolsDoTimeDeForaValue === '') {
                    setErrorFor(qtdOver15GolsDoTimeDeFora, "Informe a Quantidade OVER 1,5 Gols do Time da Casa.");
          }
          else {
                    setSucessFor(qtdOver15GolsDoTimeDeFora);
          }

          if (qtdJogsEmCasaDoTimeDaCasaValue != ''
                    & qtdOver15GolsDoTimeDaCasaValue != ''
                    & qtdJogsForaDoTimeDeForaValue != ''
                    & qtdOver15GolsDoTimeDeForaValue != '') {
                    calcularPercentualDeAcerto(qtdJogsEmCasaDoTimeDaCasaValue, qtdOver15GolsDoTimeDaCasaValue
                              , qtdJogsForaDoTimeDeForaValue, qtdOver15GolsDoTimeDeForaValue);
          }
}

function exibirLabel() {
          document.getElementById('resultadoFinalOver').style.display = "block";
}

function exibirLink() {
          document.getElementById('navegacao').style.display = "block";
          document.querySelector(".voltar").innerText = "REINICIAR";
          if (Math.round(ggren) >= 90) {
                    document.querySelector(".continuar").innerText = "CONTINUAR";
          }
}

function exibirInput() {

          if (Math.round(ggren) >= 90) {
                    var div = document.getElementById('timecasa');
                    div.style.display = "block";
                    var div2 = document.getElementById('timefora');
                    div2.style.display = "block";
                    var div3 = document.getElementById('salvar');
                    div3.style.display = "inline";
          }


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

function pagina(ggren) {
          sessionStorage.ggren = ggren;
}

function calcularPercentualDeAcerto(qtdJogsEmCasaDoTimeDaCasaValue, qtdOver15GolsDoTimeDaCasaValue,
          qtdJogsForaDoTimeDeForaValue, qtdOver15GolsDoTimeDeForaValue) {

          simplicadaResultado_timeDaCasa = (100 / qtdJogsEmCasaDoTimeDaCasaValue) * qtdOver15GolsDoTimeDaCasaValue;
          console.log(simplicadaResultado_timeDaCasa);
          simplicadaResultado_timeDeFora = (100 / qtdJogsForaDoTimeDeForaValue) * qtdOver15GolsDoTimeDeForaValue;
          console.log(simplicadaResultado_timeDeFora);
          ggren = (simplicadaResultado_timeDaCasa + simplicadaResultado_timeDeFora) / 2;
          console.log(ggren);

          if (ggren >= 90) {

                    document.querySelector(".resultado").innerText = "RESULTADO";
                    document.querySelector(".ggren").innerText = "APROVADO COM " + Math.round(ggren) + "%";
                    pagina(Math.round(ggren));
                    inicia();
          }
          else {
                    document.querySelector(".resultado").innerText = "RESULTADO";
                    document.querySelector(".ggren").innerText = "REPROVADO COM " + Math.round(ggren) + "%";
          }
}

function inicia() {

          document.getElementById("salvar").addEventListener("click", function () {
                    salvarPessoa();
          })
}

function salvarPessoa() {
          var nome_DoTimeDaCasa = document.getElementById("nmTimeDeCasa").value;
          var nome_DoTimeDeFora = document.getElementById("nmTimeDeFora").value;
          var ggren = sessionStorage.getItem("ggren");

          // Pega a lista já cadastrada, se não houver vira um array vazio
          var lstJogos = JSON.parse(sessionStorage.getItem('lstJogos') || '[]');
          // Adiciona pessoa ao cadastro
          lstJogos.push({
                    nome_DoTimeDaCasa: nome_DoTimeDaCasa,
                    nome_DoTimeDeFora: nome_DoTimeDeFora,
                    ggren: ggren,
          });

          // Salva a lista alterada
          sessionStorage.setItem("lstJogos", JSON.stringify(lstJogos));

          //window.location.href = "ListaDeJogosAprovados.html";

          console.log('Salva com sucesso.');
}