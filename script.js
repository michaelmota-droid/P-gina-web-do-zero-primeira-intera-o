const botoes = document.querySelectorAll("button");
botoes.forEach(function (botao) {
    let curtiu = false; botao.addEventListener("click",
        botaoClicado); function botaoClicado() {
            console.log("fui clicao"); let texto = botao.
                querySelector("span");
                 if (curtiu === false) {
                     texto.textContent++;
                     curtiu = true; } else { 
                        texto.textContent--;
                         curtiu = false;
                     }
                    }

                })
                