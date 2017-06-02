const width = 1280;
const height = 720;
let cards = [];
let cols = 4;
let rows = 4;
let questions = [];
let textbox;
let myFont;
let dropzone;
let button;

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
    for (let j = 0; j < rows; j++)
      cards.push(new Card(width / cols * i, height / rows * j, width / cols - 1, height / rows - 1));

  button.mousePressed(addCard);
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

function addCard() {
  textbox = selectAll('.textbox');
  console.log(textbox.value);
}


function gotFile(file) {
  cards.push()
}
