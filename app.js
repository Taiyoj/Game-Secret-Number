let numsecrett = 0;
let intentos = 0;
let listNumSort = [];
let numMax = 10;

function textGameHTML(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text
    return;
}

function verifyTry() {
    let numUsua = parseInt(document.getElementById('valUsua').value);

    console.log(numsecrett);
    if (numUsua=== numsecrett) {
        textGameHTML('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numUsua > numsecrett){
            textGameHTML('p','El número secreto es menor');
        } else {
            textGameHTML('p','El número secreto es mayor');
        }
        intentos++;
        clearBox();
    }
    return;
}


function clearBox() {
    document.querySelector('#valUsua').value = '';
}

function genNumSecret() {
    let numGenerate = Math.floor(Math.random()*numMax)+1;

    if (listNumSort.length == numMax) {
        textGameHTML('p','Ya se sortearon todos los números posibles');
    } else {
        //si el número generado está en la lista/&/
        if (listNumSort.includes(numGenerate)) {
            return genNumSecret();
        } else {
            listNumSort.push(numGenerate);
            return numGenerate;
        }

    }
}

function conditionIni() {
    textGameHTML('h1','Juego del número secreto');
    textGameHTML('p',`Escribe un número del 1 al ${numMax}`);
    numsecrett = genNumSecret();
    intentos = 1;
}

function resetGame() {
    //Limpiar caja / clear box//
    clearBox();
    //Indicar mensje de intervalo de números//
    conditionIni();
    //deshabilitar botón cuando se reinicia//
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

conditionIni();