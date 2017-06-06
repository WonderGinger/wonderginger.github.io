let red;
let green;
let blue;
let r;
let g;
let b;
let canvas;
let counter;
let colorRange = {
  lo: 0,
  hi: 256
}


function setup() {
  frameRate(60);
  counter = 0;
  red = floor(random(colorRange.lo, colorRange.hi));
  green = floor(random(colorRange.lo, colorRange.hi));
  blue = floor(random(colorRange.lo, colorRange.hi));
  r = 255; //255,248,220 cornsilk
  g = 248;
  b = 220;

  canvas = createCanvas(95, 85);
  canvas.style('opacity', '0.7');
  canvas.style('position', 'absolute');
  canvas.style('bottom', '0');
  canvas.style('left', '0');


}

function draw() {
  backgroundAnimation();
  var clipboard = new Clipboard('#email', {
    target: function() {
      return "brandt.willems@gmail.com";
    }
  })
  // colorGraph();
}

function backgroundAnimation() {
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  if (counter % 3 == 0) {
    if (r != red) r < red ? r++ : r--;
    if (g != green) g < green ? g++ : g--;
  }
  if (counter % 3 == 1) {
    if (g != green) g < green ? g++ : g--;
    if (b != blue) b < blue ? b++ : b--;
  }
  if (counter % 3 == 2) {
    if (r != red) r < red ? r++ : r--;
    if (b != blue) b < blue ? b++ : b--;
  }
  counter++;

  if (r == red && g == green && b == blue) {
    red = floor(random(colorRange.lo, colorRange.hi));
    green = floor(random(colorRange.lo, colorRange.hi));
    blue = floor(random(colorRange.lo, colorRange.hi));
  }
}

function colorGraph() {
  noStroke();
  let x1 = 5;
  let y1 = 5;
  let barWidth = (canvas.width - 2 * x1) / 4;
  let barHeight = 64;
  // The background rectangles
  fill('pink');
  rect(x1, y1, barWidth, barHeight);
  fill('darkseagreen');
  rect(x1 + barWidth, y1, barWidth, barHeight);
  fill('lightblue');
  rect(x1 + 2 * barWidth, y1, barWidth, barHeight);

  // The foreground rectangles
  fill('firebrick');
  rect(x1, y1 + barHeight - (r / 4), barWidth, (r / 4));
  fill('seagreen');
  rect(x1 + barWidth, y1 + barHeight - (g / 4), barWidth, (g / 4));
  fill('royalblue');
  rect(x1 + 2 * barWidth, y1 + barHeight - (b / 4), barWidth, (b / 4));
}
