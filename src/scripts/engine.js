const state = {
    view : {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        tempoRestante: document.querySelector("#tempo-restante"),
        pontuacao: document.querySelector("#pontuacao")
    },
    values : {
        timerId: null,
        hitPosition: 0,
        result: 0,
        time: 60,
    },
    actions : {
        countDownTimerId: setInterval(countDown, 1000),
    }


};

function playSound (audioName) {
    let audio = new Audio(`..//audios/${audioName}.mp3`);
    audio.volume = 1 ; 
    audio.play();
}

function countDown() {
    state.values.time --;
    state.view.tempoRestante.textContent = state.values.time;

    if(state.values.time <= 0){
        clearInterval(state.actions.countDownTimerId)
        clearInterval(state.actions.TimerId)
        playSound("gameover")
        alert("Game over! O seu resultado foi: " + state.values.result)
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy")
    state.values.hitPosition = randomSquare.id
}
function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, 600);
}


function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () =>{
            if(square.id === state.values.hitPosition) {
                state.values.result ++ ;
                state.view.pontuacao.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });       
}

function init() {
    
    moveEnemy();
    addListenerHitBox();
}

init();