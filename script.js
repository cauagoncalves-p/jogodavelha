const celulas = document.querySelectorAll('.cell');
const restart = document.getElementById('restart')

let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

celulas.forEach((element, index) => {
    let linha = Math.floor(index / 3);
    let coluna = index % 3 

    element.setAttribute("data-linha", linha);
    element.setAttribute("data-coluna", coluna);
    
});

let jogador = "X";
celulas.forEach((element) =>{
    element.addEventListener('click', (event)=>{
        let linha1 = parseInt(event.target.dataset.linha)
        let coluna1 = parseInt(event.target.dataset.coluna)

        if (tabuleiro[linha1][coluna1] == "") {
            tabuleiro[linha1][coluna1] = jogador
            element.textContent  = jogador;
            jogador = (jogador === "X") ? "O" : "X"
        }
        console.log(tabuleiro)
    })
})

restart.addEventListener('click', () =>{
    for (let i = 0; i < 3; i++){
        for (let j = 0 ; j < 3; j++){
            tabuleiro[i][j] = "";
        }
    }
    celulas.forEach((e) =>{
        e.textContent = "";
    })
})
console.log(celulas)