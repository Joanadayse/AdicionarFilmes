//função para quando clicar
function adicionarFilme() {
    //uma variavel para guardar as informações
    var filmeFavorito = document.getElementById("filme").value;
    //se a url terminar com jpg
    if (filmeFavorito.endsWith(".jpg")) {
      //receber variaveis
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.log("endereço de filme invalido");
    }
    //pegando o elemento e alterando o valor dele (que é limpar o input)
    document.getElementById("filme").value = "";
  
    // console.log(campoFilmeFavorito);
  }
  //função que vai receber //pode receber tambem filmeFavorito
  function listarFilmesNaTela(filme) {
    console.log(filme);
    //para exibir a foto
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    //recuperar o valor
    var elementoListaFilmes = document.getElementById("listaFilmes");
    //pegar o filme adicionado e adicionando um novo
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  