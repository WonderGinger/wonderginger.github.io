const width = 1280;
const height = 720;
let cards = [];
let cols = 4;
let rows = 4;
let questions = [];
let myFont;
let dropzone;
let button;
let question;
let answer;

const Color = {
  BACKGROUND: '#004',
  HIGHLIGHT: '#ccc',
  CARD: '#17a',
  CARDREVEALED: '#5ac'
}

function preload() {
  myFont = loadFont('../assets/fonts/GOTHIC.TTF');
}

function setup() {
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
  button = select('#button');

  createP('');
  createCanvas(width, height);
  background(Color.BACKGROUND);

  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) {
      // cards.push(new Card(width / cols * i, height / rows * j, width / cols - 1, height / rows - 1));
    }

  button.mousePressed(gotInput);
}

function draw() {
  for (card of cards) {
    card.setCardFont(myFont);
    card.show();
  }
}

function mousePressed() {
  for (card of cards) {
    if (card.clicked(mouseX, mouseY)) {
      card.reveal();
    }
  }
}

function highlight() {
  dropzone.style('background-color', Color.HIGHLIGHT);
}

function unhighlight() {
  dropzone.style('background-color', 'white');
}

function addCard(question, answer) {
  if (cards.length >= rows * cols) {
    if (rows >= cols) {
      return; //until i have redrawing implemented
      cols++;
    } else {
      rows++;
    }
  }

  let i = cards.length % cols;
  let j = floor(cards.length / rows);
  let c = new Card(width / cols * i, height / rows * j, width / cols - 1, height / rows - 1);
  c.setQ(question);
  c.setA(answer);

  cards.push(c);
  console.log("Creating card ", i, " ", j, "\nCard count: ", cards.length, " cols: ", cols, " rows: ", rows);
}

function gotInput() {
  question = document.getElementById('question').value;
  answer = document.getElementById('answer').value;
  // console.log(question, " q a ", answer);
  addCard(question, answer);
}

function gotFile(file) {
  let data = file.data;
  let fileLines = data.match(/[^\r\n]+/g);
  console.log("file lines: ", fileLines);

  for (inputLine of fileLines) {
    let s = inputLine.split(" | ");
    console.log("q a ", s)
    addCard(s[0], s[1]);
  }
}
