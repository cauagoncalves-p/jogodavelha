const celulas = document.querySelectorAll('.cell');
const restart = document.getElementById('restart')

let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let jogador = "X";

celulas.forEach((element, index) => {
    let linha = Math.floor(index / 3);
    let coluna = index % 3 

    element.setAttribute("data-linha", linha);
    element.setAttribute("data-coluna", coluna);

    element.addEventListener('click', (event)=>{
        let linha1 = parseInt(event.target.dataset.linha)
        let coluna1 = parseInt(event.target.dataset.coluna)

        if (tabuleiro[linha1][coluna1] == "") {
            tabuleiro[linha1][coluna1] = jogador
            element.textContent  = jogador;

            if (tabuleiro[linha1][0] === jogador && tabuleiro[linha1][1] === jogador && tabuleiro[linha1][2] === jogador){
                console.log(`Jogador ${jogador} Ganhou`)
            }
            else if (tabuleiro[0][coluna1] === jogador && tabuleiro[1][coluna1] === jogador && tabuleiro[2][coluna1] === jogador){
                console.log(`Jogador ${jogador} Ganhou`)
            }
            else if (linha === coluna && tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador){
                console.log(`Jogador ${jogador} Ganhou`) 
            }
            else if (linha + coluna === 2 && tabuleiro[2][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[0][2] === jogador){
                console.log(`Jogador ${jogador} Ganhou`) 
            }
            else{
                console.log("Empate")
            }
            jogador = (jogador === "X") ? "O" : "X"
        }


        console.log(tabuleiro)
    })
    
});


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
