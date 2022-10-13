
let player1Mark = 'x'
let player1MarkImg = './img/imgx.png'
let player2Mark = 'o'
let player2MarkImg = './img/imgo.png'
let playerMark = player1Mark
let board = document.getElementById('gameBoard')
let player1 = {nombre: 'jugadorA', tipo: 'cpu'}
let player2 = {nombre: 'jugadorB', tipo: 'humano'}
let player = {}


/*
    Comienza el juego
*/
const startGame = () => {
    //Coger el valor de check
    let check1 = document.querySelector('input[name="tipoplyx"]:checked')
    let check2 = document.querySelector('input[name="tipoplyo"]:checked')
    console.log(`El jugador 1 es ${check1.value} y el jugador 2 es ${check2.value}`)

    //guardamos los datos en el sessionStorage
    sessionStorage.setItem('playerX', JSON.stringify(player1))
    sessionStorage.setItem('playerO', JSON.stringify(player2))

    //Recuperamos los datos del sessionStorage y los pasamos a objeto
    let jug1Data = JSON.parse(sessionStorage.getItem('playerX'))
    let jug2Data = JSON.parse(sessionStorage.getItem('playerO'))

    //Cogemos los elementos de la vista
    let jugador1 = document.getElementById('jugador1')
    let jugador2 = document.getElementById('jugador2')

    //Generamos el texto para los elementos
    jugador1.innerHTML = `El jugador 1 es ${jug1Data.nombre}`
    jugador2.innerHTML = `El jugador 2 es ${jug2Data.nombre}`



    for(let i = 0; i < 9; i++){
        let box = document.createElement('div')
        box.id = i
        box.className = 'board-box'

        


        box.onclick = () => {boxClick(box)}

        board.appendChild(box)
    }
}

const boxClick = (box) => {
    if (box.innerHTML == "") {
        if (playerMark == player1Mark) {
            console.log(`url('${player1MarkImg}')`)
            box.style.backgroundImage = `url('${player1MarkImg}')`;

            player = player1;
            playerMark = player2Mark;
            checkWinner(2, 5, 6)
        } else {
            box.style.backgroundImage = `url('${player2MarkImg}')`;
            player = player2;
            playerMark = player1Mark;
            checkWinner(0, 1, 2)
        }
        
    }
}

const checkWinner = (pos1, pos2, pos3) => {
   /* if (boardChecks[0].innerHTML === boardChecks[1].innerHTML && boardChecks[1].innerHTML === boardChecks[2].innerHTML && boardChecks[0].innerHTML != "")
    {
        JSON.stringify(sessionStorage.setItem("Winner", player.name));
        window.location.href = "../pages/winner.html"
    }*/

    let posiciones = [
        [0,1,2],
        [3,4,5]
    ]

    console.log(posiciones.find([pos1, pos2, pos3]))
    if (posiciones.find([pos1, pos2, pos3])) {

    }
}





/*
    - Vista principal con botón para iniciar
    - Pasar a vista de seleccion de jugadores
        - 2 Input para los nombres de los jugadores
        - radios para humano o cpu -- evitar que se seleccionen las 2 opciones cpu
        - boton para comenzar
    - Pasar los datos a SessionStorage
    - Abrir vista del tablero
        - tablero con 9 casillas
        - panel lateral con los datos de los jugadores y el turno
            - variable para el turno / usuario
    - comenzar juego
        - al pulsar en una casilla se marca con su simbolo
        - cada jugador solo puede tener 3 fichas en el tablero
        - cuando estan todas las fichas, solo se pueden mover
        - al colocar una ficha, controlar que la casilla esta vacia
            - comprobar si hay 3 fichas del jugador
                - si no estan las 3 fichas, simplemente coloca la ficha si el espacio esta en blanco
                - si estan las 3 y solo pulsa un espacio blanco -->alert. 
                - Si pulsa una ficha y luego un espacio en blanco, movemos la ficha
        - a partir del 5ª turno, comprobar al final del turno si se ha ganado
            - comprobar si tienen el mismo simbolo:
                - 0, 1 y 2 
                - 3, 4, y 5
                - 6, 7 y 8
                - 0, 3 y 6
                - 1, 4 y 7
                - 2, 4 y 8
                - 0, 4 y 8
                - 3, 4 y 6
            - Si ha ganado uno de los 2 se pasa a otra vista de victoria o se muestra en un popup, si no sigue el juego
                -* enlace al index que nos borra el sessionStorage y nos lleva a empezar de nuevo
        - Si esta la cpu
            -* si el centro esta vacio, lo ocupa
            - si no, hace random para colocar la ficha
            - para ocupar la casilla tenemos 2 opciones:
                - si el random devuelve una casilla ocupada, que repita hasta conseguir una vacia
                - array secundario con las casillas ocupadas, se saca la diferencia y se escoge uno de ellos con random
            - comprobar si hay 3 fichas del jugador
                - si no estan las 3 fichas, simplemente coloca la ficha si el espacio esta en blanco
                - si estan las 3 y solo pulsa un espacio blanco -->alert. 
                - Si pulsa una ficha y luego un espacio en blanco, movemos la ficha

           
*/