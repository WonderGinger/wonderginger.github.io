class Card {
  constructor(x = 0, y = 0, w = 400, h = 200) {
    this.x = x + 5;
    this.y = y + 5;
    this.w = w - 10;
    this.h = h - 10;
    this.cardQ = "no question for this card";
    this.cardA = "no answer";
    this.revealed = false;
  }
  reveal() {
    this.revealed = true;
  }
  setQ(question) {
    this.cardQ = question;
  }
  setA(answer) {
    this.cardA = answer;
  }
  show() {
    if (this.revealed) {
      this.drawCard('lightblue');
      this.drawText(this.cardA, 'black');
    } else {
      this.drawCard('blue');
      this.drawText(this.cardQ, 'white');
    }
  }
  drawText(string, color) {
    fill(color);
    textSize(24);
    textAlign(CENTER);
    noStroke();
    text(string, this.x + this.w / 8, this.y + this.h / 3, 3 * this.w / 4, 2 * this.h / 3);
  }
  drawCard(color) {
    noStroke();
    fill(color);
    rect(this.x, this.y, this.w, this.h);
    noFill();
    stroke(255);
    rect(this.x + 10, this.y + 10, this.w - 20, this.h - 20);
  }
  clicked(x, y) {
    if (x >= this.x && x <= this.x + this.w) {
      if (y >= this.y && y <= this.y + this.h)
        return true;
    } else {
      return false;
    }
  }
}
