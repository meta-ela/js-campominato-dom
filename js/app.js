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
quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
L’utente indica un livello di difficoltà in base al quale 
viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49

al click con il tasto destro su una cella, inseriamo il flag 
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

// variabile globale per recuperare classe html che conterrà la griglia
const gridContainer = document.querySelector(".grid_container");

// funzione per generare i numeri
function generateNumbers() {
    for(let i = 1; i <= 100; i++){
        console.log(i);
    }
}
generateNumbers();


// funzione per generare la griglia da 1 a 100
function createGrid(xCells, yCells) {
    const cellsGrid = xCells * yCells;
    console.log(cellsGrid);
    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;


    /* const cellsGrid = 100;
    console.log(cellsGrid);
    gridContainer.style.width = `calc(var(--cell-size) * 10)`; */

    for (let i = 1; i <= cellsGrid; i++) {

        const numberGenerator = generateNumbers();

        const cell = document.createElement("div");
        // aggiunge alla variabile cell la classe cell con gli stili necessari
        cell.classList.add("cell");

        
        cell.innerHTML = `<span>${numberGenerator}</span>`;

        cell.addEventListener("click", function() {
            // this = cell
            // this.innerText prende il testo all'interno 
            console.log("cliccato", this.innerText);
            this.classList.add("cell_clicked");
        })

        gridContainer.append(cell);
    }

    
}

createGrid(10, 10);
// createGrid(9, 9);
// createGrid(7, 7);
