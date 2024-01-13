// Variáveis e Métodos GENERO E NUDEZ

var Genero = document.getElementById('checkGenero');
var nudez = document.getElementById('checkNudez');

function verificaCheck() {
    if (Genero.checked) {
        if (nudez.checked) {
            document.getElementById('imagem').src = "img/Woman-Naked.png"
        }
        else {
            document.getElementById('imagem').src = "img/Woman.png"
        }

    }
    else {
        if (nudez.checked) {
            document.getElementById('imagem').src = "img/Man-Naked.png"
        }
        else {
            document.getElementById('imagem').src = "img/Man.png"
        }

    }
}

function verificaNudez() {
    if (nudez.checked) {
        if (Genero.checked) {
            document.getElementById('imagem').src = "img/Woman-Naked.png"
        }
        else {
            document.getElementById('imagem').src = "img/Man-Naked.png"
        }
    }
    else {
        if (Genero.checked) {
            document.getElementById('imagem').src = "img/Woman.png"
        }
        else {
            document.getElementById('imagem').src = "img/Man.png"
        }
    }

}

// -- Fim


// Variáveis e Métodos TICKS

startTimer(10000);
clearInterval(myInterval);
var temperatura = 37, bpm = 61, pa = "120/80";
showValues();

function startTimer(ticks) {
    myInterval = setInterval(UpdateValues, ticks);
}

function Play() {
    document.getElementById("play").style.backgroundColor = 'lightgreen';
    document.getElementById("pause").style.backgroundColor = 'initial';
    document.getElementById("stop").style.backgroundColor = 'initial';
    if (document.getElementById("vel1").checked) {
        console.log("V 1");
        clearInterval(myInterval);
        startTimer(3000);
    }
    else if (document.getElementById("vel2").checked) {
        console.log("V 2");
        clearInterval(myInterval);
        startTimer(1800);
    }
    else {
        console.log("V 3");
        clearInterval(myInterval);
        startTimer(800);
    }
}
function Pause() {
    document.getElementById("play").style.backgroundColor = 'initial';
    document.getElementById("pause").style.backgroundColor = 'lightgreen';
    document.getElementById("stop").style.backgroundColor = 'initial';
    clearInterval(myInterval);
}
function Stop() {
    document.getElementById("play").style.backgroundColor = 'initial';
    document.getElementById("pause").style.backgroundColor = 'initial';
    document.getElementById("stop").style.backgroundColor = 'lightgreen';
    clearInterval(myInterval);
    temperatura = 37, bpm = 61, pa = "120/80";
    showValues();
}

function getRound(min, max) {
    return parseFloat(((Math.random() * (max - min)) + min).toFixed(2));
}

function showValues() {
    document.getElementById("Temperature").innerHTML = "Temperatura: " + temperatura.toFixed(2) + " &#x2103";
    document.getElementById("BPM").innerHTML = "Freq. Card.: " + bpm.toFixed(2) + " bpm";
    document.getElementById("ArterialPressure").innerHTML = "PA: " + pa + " mmHg";
}

function UpdateValues() {
    temperatura = (temperatura + (getRound(-0.1, 0.1)));
    bpm = (bpm + (getRound(-0.2, 0.2)));
    showValues();
}