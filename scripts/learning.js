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
}