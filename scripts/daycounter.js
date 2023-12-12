// Pobierz datę z diva
let dateDiv = document.getElementsByClassName("date")[0];
let dateText = dateDiv.textContent;

// Przekształć tekst na obiekt Date
let date = new Date(dateText);

// Pobierz dzisiejszą datę
let today = new Date();

// Oblicz różnicę w milisekundach
let diff = today - date;

// Przekształć różnicę na dni
let days = Math.floor(diff / (1000 * 60 * 60 * 24));

// Wpisz liczbę dni do elementu o id "days"
let daysElement = document.getElementById("days");
daysElement.textContent = days;