
function inicia() {
          getTodos();
}

var getTodos = function () {
          var todos = []; // Cria um array vazio caso não tenha nada já armazenado.
          var html = '<ul>'
          var todos_string = JSON.parse(sessionStorage.getItem('lstJogos')); // Pega o conteúdo/valor da chave 'todos' do 'localStorage' e armazena na variável 'todos_string'


          for (var i = 0; i <= todos_string.length; i++) {
                    var divNova = document.createElement("div");
                    var conteudoNovo = document.createTextNode(todos_string[i].nome_DoTimeDaCasa + " X "
                              + todos_string[i].nome_DoTimeDeFora + "  -  Aprovado com  " + todos_string[i].ggren + "%");
                    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

                    // adiciona o novo elemento criado e seu conteúdo ao DOM
                    var divAtual = document.getElementById("div1");
                    document.body.insertBefore(divNova, divAtual);

          }
}


window.addEventListener("load", inicia);