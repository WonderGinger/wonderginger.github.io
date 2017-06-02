const width = 1280;
const height = 720;
let cards = [];
let cols = 4;
let rows = 4;
let questions = [];
let textbox;

function setup() {
  textbox = select('#textbox');
  createP('');
  createCanvas(width, height);
  background(240);
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++)
      cards.push(new Card(width / cols * i, height / rows * j, width / cols - 1, height / rows - 1))
}

function draw() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].show();
  }
}

function mousePressed() {
  for (card of cards) {
    if (card.clicked(mouseX, mouseY)) {
      card.reveal();
    }
  }
}
