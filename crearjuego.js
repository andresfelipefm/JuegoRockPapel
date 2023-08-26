const ROCK = "rock";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE= 0;
const GANAR = 1;
const PERDER = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
papelBtn.addEventListener("click", () => {
    play(PAPEL);
});
tijeraBtn.addEventListener("click", () => {
    play(TIJERA);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".jpg";

    resultText.innerHTML = "Escogiendo!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".jpg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".jpg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "HAS EMPATADO!";
                break;
            case GANAR:
                resultText.innerHTML = "HAS GANADO :D!";
                break;
            case PERDER:
                resultText.innerHTML = "HAS PERDIDO :(!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPEL) return PERDER;
        if (machineOption === TIJERA) return GANAR;

    } else if (userOption === PAPEL) {

        if (machineOption === TIJERA) return PERDER;
        if (machineOption === ROCK) return GANAR;

    } else if (userOption === TIJERA) {

        if (machineOption === ROCK) return PERDER;
        if (machineOption === PAPEL) return GANAR;

    }
}