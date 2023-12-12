/*
// Pobierz wszystkie elementy o klasie "verb-container"
let elements = document.getElementsByClassName("verb-container");

// Sprawdź, czy mamy co najmniej 3 elementy
if(elements.length < 3) {
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
    let selectedIndices = indices.slice(0, 3);

    // Stwórz nowy div do wyświetlenia wybranych elementów
    let displayDiv = document.createElement("div");
    displayDiv.id = "displayDiv";

    // Dodaj wybrane elementy do nowego diva
    for(let i = 0; i < selectedIndices.length; i++) {
        displayDiv.appendChild(elements[selectedIndices[i]].cloneNode(true));
    }

    // Dodaj nowy div do ciała dokumentu
    document.body.appendChild(displayDiv);
} */


//regularne
    /*let linie;
    document.getElementById('myFile').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var lines = e.target.result.split('\n');
        for(var i = 0; i < lines.length; i++) {
            console.log(lines[i]);
            var podzielone = lines[i].split("|")
            var tekst = '<div class="verb-container"> <div class="verb"> <p class="v">' + podzielone[0] + '</p> <p class="pause">—</p> <p class="t">' + podzielone[1] + '</p> </div> </div>';
            var textNode = document.createTextNode(tekst);
            document.getElementById("verbs-container").appendChild(textNode);
        }
    }

    reader.readAsText(file);   
});*/
 //nieregulane
 /*let linie;
    document.getElementById('myFile').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var lines = e.target.result.split('\n');
        for(var i = 0; i < lines.length; i++) {
            console.log(lines[i]);
            var podzielone = lines[i].split("|")
            var tekst = '<div class="verb-container"><div class="verb"><p class="v">' + podzielone[0] + '</p><p class="pause">—</p><p class="t">' + podzielone[1] + '</p></div><div class="conjugation-container"><div class="conjugation"><p class="o">io</p><p class="c">' + podzielone[2] + '</p></div><div class="conjugation"><p class="o">tu</p><p class="c">' + podzielone[3] + '</p></div><div class="conjugation"><p class="o">lui/lei</p><p class="c">' + podzielone[4] + '</p></div><div class="conjugation"><p class="o">noi</p><p class="c">' + podzielone[5] + '</p></div><div class="conjugation"><p class="o">voi</p><p class="c">' + podzielone[6] + '</p></div><div class="conjugation"><p class="o">loro</p><p class="c">' + podzielone[7] + '</p></div></div></div>';
            var textNode = document.createTextNode(tekst);
            document.getElementById("verbs-container").appendChild(textNode);
        }
    }

    reader.readAsText(file);   
});*/