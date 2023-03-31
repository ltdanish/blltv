const texts = [
  "Vidste du godt at du skal have fat i flyvelægen, efter en vaccination?",
  "Husk at bestille tid til flyvelægen i god tid",
  "Hvis du har en god idé til hvad der ellers skal vises på denne skærm, så tag fat i FAT",
  "Hvis du har gode tips til dine kollegaer, der skal op at stå her, så skriv til FAT",
  "Har du gode billeder der skal op på denne skærm, så send dem til FAT",
  "Hvis du har gode tips til dine kollegaer, der skal op at stå her, så skriv til FAT",
  "Er der kommende begivenheder der mangler her, så skriv til FAT",
  "Vidste du at du har adgang til alle betalte artikler på Check-in.dk fra Naviairs computere?"
];

const randomIndex = Math.floor(Math.random() * texts.length);

const paragraph = document.querySelector('#random-text');
paragraph.textContent = texts[randomIndex];

const myDiv = document.getElementById('random-text'); // select the div element
myDiv.setAttribute('id', 'random-text1'); // set a new id attribute value
