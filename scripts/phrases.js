

const translations = {
    "Mi scusi / Permesso": {
        "translation": "Przepraszam",
        "example": ""
    },
    "Mi dispiace": {
        "translation": "Przykro mi",
        "example": ""
    },
    "Non capisco": {
        "translation": "Nie rozumiem",
        "example": ""
    },
    "Parla Inglese": {
        "translation": "Czy mówisz po angielsku?",
        "example": ""
    },
    "Mi chiamo": {
        "translation": "Nazywam się",
        "example": ""
    },
    "Piacere": {
        "translation": "Miło mi",
        "example": ""
    },
    "A presto": {
        "translation": "Do zobaczenia wkrótce",
        "example": ""
    },
    "A dopo": {
        "translation": "Do zobaczenia później",
        "example": ""
    },
    "Sto bene grazie": {
        "translation": "Dobrze, dziękuję",
        "example": ""
    },




    "Ciao": {
        "translation": "Cześć / Do widzenia",
        "example": ""
    },
    "Salve": {
        "translation": "Witaj",
        "example": ""
    },
    "Buon giorno": {
        "translation": "Dzień dobry",
        "example": ""
    },
    "Buon pomeriggio": {
        "translation": "Dobry popołudnie",
        "example": ""
    },
    "Una buona giornata": {
        "translation": "Miłego dnia",
        "example": ""
    },
    "Buona serata": {
        "translation": "Miłego wieczoru",
        "example": ""
    },
    "Buona notte": {
        "translation": "Dobranoc",
        "example": ""
    },
    "Buonasera": {
        "translation": "Dobry wieczór",
        "example": ""
    },
    "Arrivederci": {
        "translation": "Do widzenia",
        "example": ""
    },
    "Si": {
        "translation": "Tak",
        "example": ""
    },
    "No": {
        "translation": "Nie",
        "example": ""
    },
    "Grazie": {
        "translation": "Dziękuję",
        "example": ""
    },
    "Per favore": {
        "translation": "Proszę",
        "example": ""
    },
    "Prego / Grazie mille": {
        "translation": "Nie ma za co",
        "example": ""
    },
    "Mi scusi / Permesso": {
        "translation": "Przepraszam",
        "example": ""
    },
    "Mi dispiace": {
        "translation": "Przykro mi",
        "example": ""
    },
    "Non capisco": {
        "translation": "Nie rozumiem",
        "example": ""
    },
    "Parla Inglese": {
        "translation": "Czy mówisz po angielsku?",
        "example": ""
    },
    "Mi chiamo": {
        "translation": "Nazywam się",
        "example": ""
    },
    "Sono americano": {
        "translation": "Jestem Amerykaninem",
        "example": ""
    },
    "Piacere": {
        "translation": "Miło mi",
        "example": ""
    },
    "A presto": {
        "translation": "Do zobaczenia wkrótce",
        "example": ""
    },
    "A dopo": {
        "translation": "Do zobaczenia później",
        "example": ""
    },
    "Come sta / come va": {
        "translation": "Jak się pan/pani ma?",
        "example": ""
    },
    "Sto bene grazie": {
        "translation": "Dobrze, dziękuję",
        "example": ""
    }

};
/*
// Znajdujemy nasz kontener na tłumaczenia
const translationsContainer = document.getElementById('translations-container');
 
// Iterujemy przez wszystkie tłumaczenia
let i = 1;
for (const word in translations) {
  const translation = translations[word].translation;
  const example = translations[word].example;
 
  // Tworzymy nowy paragraf dla każdego tłumaczenia
  const paragraph = document.createElement('p');
  paragraph.textContent = `${i}. ${word} (${translation}): ${example}`;
 
  // Dodajemy paragraf do naszego kontenera
  translationsContainer.appendChild(paragraph);
 
  i++;
}*/



/*
// Funkcja do losowania elementów z obiektu
function getRandom(obj, n) {
const keys = Object.keys(obj);
const result = {};

for (let i = 0; i < n; i++) {
  const randomIndex = Math.floor(Math.random() * keys.length);
  const key = keys[randomIndex];
  result[key] = obj[key];
  keys.splice(randomIndex, 1);
}

return result;
}

// Losujemy trzy tłumaczenia
const randomTranslations = getRandom(translations, 3);

// Znajdujemy nasz kontener na tłumaczenia
const randomTranslationsContainer = document.getElementById('random-translations-container');

// Iterujemy przez wylosowane tłumaczenia
let z = 1;
for (const word in randomTranslations) {
const translation = randomTranslations[word].translation;
const example = randomTranslations[word].example;

// Tworzymy nowy paragraf dla każdego tłumaczenia
const paragraph = document.createElement('p');
paragraph.textContent = `${z}. ${word} (${translation}): ${example}`;

// Dodajemy paragraf do naszego kontenera
randomTranslationsContainer.appendChild(paragraph);

z++;
}*/



/*// Funkcja do losowania elementów z obiektu
function getRandom(obj, n) {
const keys = Object.keys(obj);
const result = {};

for (let i = 0; i < n; i++) {
const randomIndex = Math.floor(Math.random() * keys.length);
const key = keys[randomIndex];
result[key] = obj[key];
keys.splice(randomIndex, 1);
}

return result;
}

// Losujemy trzy tłumaczenia
const randomTranslations = getRandom(translations, 3);

// Znajdujemy nasz kontener na tłumaczenia
const randomTranslationsContainer = document.getElementById('phrases');

// Iterujemy przez wylosowane tłumaczenia
for (const word in randomTranslations) {
const translation = randomTranslations[word].translation;

// Tworzymy nowy kontener dla każdego tłumaczenia
const phraseContainer = document.createElement('div');
phraseContainer.className = 'phrase-container';

// Tworzymy div dla słowa
const phraseDiv = document.createElement('div');
phraseDiv.className = 'phrase';
phraseDiv.textContent = word;

// Tworzymy div dla pauzy
const pauseDiv = document.createElement('div');
pauseDiv.className = 'pause';
pauseDiv.textContent = '—';

// Tworzymy div dla tłumaczenia
const translateDiv = document.createElement('div');
translateDiv.className = 'translate';
translateDiv.textContent = translation;

// Dodajemy wszystko do naszego kontenera
phraseContainer.appendChild(phraseDiv);
phraseContainer.appendChild(pauseDiv);
phraseContainer.appendChild(translateDiv);
randomTranslationsContainer.appendChild(phraseContainer);
}*/


// Znajdujemy nasz kontener na tłumaczenia
const translationsContainer = document.getElementById('phrases');

// Iterujemy przez wszystkie tłumaczenia
for (const word in translations) {
    const translation = translations[word].translation;
    const example = translations[word].example;

    // Tworzymy nowy kontener dla każdego tłumaczenia
    const phraseContainer = document.createElement('div');
    phraseContainer.className = 'phrase-container';

    // Tworzymy div dla słowa
    const phraseDiv = document.createElement('div');
    phraseDiv.className = 'phrase';
    phraseDiv.textContent = word;

    // Tworzymy div dla pauzy
    const pauseDiv = document.createElement('div');
    pauseDiv.className = 'pause';
    pauseDiv.textContent = '—';

    // Tworzymy div dla tłumaczenia
    const translateDiv = document.createElement('div');
    translateDiv.className = 'translate';
    translateDiv.textContent = translation;

    // Dodajemy wszystko do naszego kontenera
    phraseContainer.appendChild(phraseDiv);
    phraseContainer.appendChild(pauseDiv);
    phraseContainer.appendChild(translateDiv);
    translationsContainer.appendChild(phraseContainer);
}