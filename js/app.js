/*
Il computer deve generare 16 numeri casuali compresi nel range della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l’utente clicca su una cella:
    - se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
    la cella si colora di rosso e la partita termina,

    - altrimenti la cella cliccata si colora di azzurro e l’utente 
    può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba 
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- L’utente indica un livello di difficoltà in base al quale 
    viene generata una griglia di gioco quadrata, 
    in cui ogni cella contiene un numero tra quelli compresi in un range:
    - con difficoltà 1 => tra 1 e 100
    - con difficoltà 2 => tra 1 e 81
    - con difficoltà 3 => tra 1 e 49
4- al click con il tasto destro su una cella, inseriamo il flag 
    per indicare che la cella potrebbe avere una bomba
    Il computer deve generare 16 numeri casuali - cioè le bombe - 
    compresi nello stesso range della difficoltà prescelta.


con difficoltà 1 => tra 1 e 100 -------- (10 x 10)
con difficoltà 2 => tra 1 e 81  --------- (9 x 9)
con difficoltà 3 => tra 1 e 49 -----------(7 x 7)

- creare griglia di celle quadrate (x =  y)
- ciclo for per 100 celle
    - una cella è un div --> tramite innerhtml??
    - 

*/

// variabili globali:
// per recuperare classe html che conterrà la griglia
const gridContainer = document.querySelector(".grid_container");



// funzione per generare i numeri con for loop  ---> crea un loop di 100 * 100 ??????????? 
/* function generateNumbers() {
    for(let i = 1; i <= 100; i++){
        console.log(i);
    }
}
generateNumbers(); */


// funzione per generare la griglia 
function createGrid(xCells, yCells) {
    // moltiplicazione per creare x e y celle per la griglia
    const cellsGrid = xCells * yCells;
    console.log(cellsGrid);
    // var css dimensione cella * numero x
    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;

    // versione con dimensioni fisse
    /* const cellsGrid = 100;
    console.log(cellsGrid);
    gridContainer.style.width = `calc(var(--cell-size) * 10)`; */

    for (let i = 1; i <= cellsGrid; i++) {
        // crea tag div a cui appendere le celle
        const cell = document.createElement("div");

        // aggiunge alla variabile cell.js la classe cell.css con gli stili necessari
        cell.classList.add("cell");

        // scrive nei div dell'html il valore della variabile i 
        cell.innerHTML = `<span>${i}</span>`;

        // al click sulle celle modifico l'aspetto aggiungendo/togliendo stili css
        cell.addEventListener("click", function() {
            // scriver this = variabile cell
            // this.innerText prende il testo all'interno 
            console.log("cliccato", this.innerText);
            // aggiungo la classe css .clicked per le modifiche stilistiche
            this.classList.add("cell_clicked");
        })

        // appende le celle create al container in html
        gridContainer.append(cell);
    }


}


// le tre opzioni di griglia ma da impostare manualmente
/* createGrid(10, 10); */
createGrid(9, 9);
/* createGrid(7, 7); */
