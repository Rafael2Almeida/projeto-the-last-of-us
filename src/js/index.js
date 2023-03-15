
/*
OBJETIVO- quando clicar no botão temos que mostrar a imagem de fundo correspondente.
- Passo 1 - dar um jeito de pegar o elemento HTML dos botões
- Passo 2 - dar um jeito de identificar o clique do usuario no botão
- Passo 3 - desmarcar o botão selecionado anterior
- Passo 4 - marcar o botão clicado como se estivesse selecionado
- passo 5 - esconder a imagem de fundo anterior
- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
  */


/* - Passo 1 - dar um jeito de pegar o elemento HTML dos botões */
const botoescarrossel = document.querySelectorAll('.botao');
const imagems = document.querySelectorAll('.imagem');

/* - Passo 2 - dar um jeito de identificar o clique do usuario no botão*/
botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    

    /* - Passo 3 - desmarcar o botão selecionado anterior*/
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');

    /*- Passo 4 - marcar o botão clicado como se estivesse selecionado */
    botao.classList.add('selecionado');

    /*- passo 5 - esconder a imagem de fundo anterior */
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

    /* - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado*/
    imagems[indice].classList.add('ativa');
 
   


  })
})


