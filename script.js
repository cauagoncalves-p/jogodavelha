const celulas = document.querySelectorAll('.cell');
const restart = document.getElementById('restart')
const iniciar = document.getElementById('startGame');
const board = document.getElementById('board');
const menu = document.querySelector('.config');
const message = document.getElementById('message');
const infoJogadores = document.getElementById('info');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const turnInfo = document.getElementById('turnInfo');
const lastMove = document.getElementById('lastMove');

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
                message.innerHTML = `<p>O Jogador ${jogador} ganhou<p/>`;
            }
            else if (tabuleiro[0][coluna1] === jogador && tabuleiro[1][coluna1] === jogador && tabuleiro[2][coluna1] === jogador){
               message.innerHTML = `<p>O Jogador ${jogador} ganhou<p/>`;
            }
            else if (linha === coluna && tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador){
                message.innerHTML = `<p>O Jogador ${jogador} ganhou<p/>`;
            }
            else if (linha + coluna === 2 && tabuleiro[2][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[0][2] === jogador){
                message.innerHTML = `<p>O Jogador ${jogador} ganhou<p/>`;
            }
            else{
                if (tabuleiroCheio()){
                      message.innerHTML = `<p>Impate<p/>`;
                }
            }
            jogador = (jogador === "X") ? "O" : "X"
        }

       
        console.log(tabuleiro)
    })
});

function tabuleiroCheio() {
  return Array.from(celulas).every(c => c.textContent !== "");
}


iniciar.addEventListener('click', () => {
    board.classList.remove('hidden');
    menu.classList.add('hidden');
    infoJogadores.classList.remove('hidden');
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

