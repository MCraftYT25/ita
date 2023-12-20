/*
// Pobierz wszystkie elementy o klasie "verb-container"
let elements = document.getElementsByClassName("verb-container");

// Sprawdź, czy mamy co najmniej 3 elementy
if(elements.length < 5) {
    console.log("Za mało elementów o klasie 'verb-container' do wylosowania");
} else {
    // Stwórz tablicę indeksów
    let indices = Array.from({length: elements.length}, (_, i) => i);

    // Przetasuj tablicę indeksów
    for(let i = indices.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Wybierz pierwsze 3 indeksy
    let selectedIndices = indices.slice(0, 5);

    // Pobierz istniejący div o ID "learning"
    let learningDiv = document.getElementById("learning");

    // Dodaj wybrane elementy do diva "learning"
    for(let i = 0; i < selectedIndices.length; i++) {
        learningDiv.appendChild(elements[selectedIndices[i]].cloneNode(true));
    }
}*/

/*function generujHTML1(words) {
    let html = '';
    for (let verb in words) {
        html += `<div class="verb-container"><div class="verb"><p class="v">${verb} </p><p class="pause">—</p><p class="t"> ${words[verb].translation} </p></div><div class="conjugation-container">`;
        let forms = ["io", "tu", "lui/lei", "noi", "voi", "loro"];
        for (let form of forms) {
            html += `<div class="conjugation"><p class="o">${form}</p><p class="c"> ${words[verb][form]} </p></div>`;
        }
        html += '</div></div>';
    }
    return html;
}

function losujCzasowniki(words) {
    let keys = Object.keys(words);
    let randomKeys = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * keys.length);
        randomKeys.push(keys[index]);
        keys.splice(index, 1);
    }
    let randomWords = {};
    for (let key of randomKeys) {
        randomWords[key] = words[key];
    }
    return randomWords;
}

window.onload = function() {
    const learningContainer = document.getElementById('learning');
    if (learningContainer) {
        let randomWords = losujCzasowniki(words);
        learningContainer.innerHTML = generujHTML(randomWords);
    } else {
        console.error('Nie znaleziono elementu o id "learning".');
    }
};*/
