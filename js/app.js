// Visualizzare in pagina (html) 5 numeri casuali.
// Avviare un timer di 30 secondi
// Dopo 30 secondi, nascondere i numeri.
// L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// const numeriCasuali = [];

// for (let i = 0; i < 5; i++) {
//     let generaNumeri = Math.floor(Math.random() * 100) + 1;

//     numeriCasuali.push(generaNumeri);
// }

// console.log (numeriCasuali)

const numberContainer = document.querySelector(".number-container");

function generateRandomNumbers(min, max = 10) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function generateUniqueRandomNumbers(min, max, listaNumeriGiaGenerati) {
    let numeroRandom;

    do {
        numeroRandom = generateRandomNumbers(min, max);
    } while (listaNumeriGiaGenerati.includes(numeroRandom));

    return numeroRandom;
}

    // variabile dove inserire i numeri random generati
    const numeriGenerati = [];
    

    // creo ogni singola cella necessaria
    for (let i = 0; i < 5; i++) {
        const randomNumber = generateUniqueRandomNumbers(1, 100, numeriGenerati);
        numeriGenerati.push(randomNumber);
      // creare un div che rappresenta una singola cella
        const numeriCreati = document.createElement("div");

        numeriCreati.innerHTML = `<span>${randomNumber}</span>`;

        numberContainer.append(numeriCreati);

        

        function hideNumeriGenerati () {
            numeriCreati.classList.add("d-none");
        }
    
        setTimeout(hideNumeriGenerati, 3000);
    }

    console.log (numeriGenerati)

