const state = {
    view : {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        tempoRestante: document.querySelector("#tempo-restante"),
        pontuacao: document.querySelector("#pontuacao")
    },
    values : {

    }

};

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy")
}

function addListenerHitBox() {
    state.view.squares;array.forEach((square) =>{});       
}

function init() {
    randomSquare()
}

init();