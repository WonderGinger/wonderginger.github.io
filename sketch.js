let red;
let green;
let blue;
let r;
let g;
let b;
let canvas;

function setup() {
  frameRate(30);
  red = floor(random(0, 256));
  green = floor(random(0, 256));
  blue = floor(random(0, 256));
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

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  if (r != red) r < red ? r++ : r--;
  if (g != green) g < green ? g++ : g--;
  if (b != blue) b < blue ? b++ : b--;

  if (r == red && g == green && b == blue) {
    red = floor(random(0, 256));
    green = floor(random(0, 256));
    blue = floor(random(0, 256));
  }
  colorGraph();
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
  fill('lightblue');
  rect(x1 + barWidth, y1, barWidth, barHeight);
  fill('lightblue');
  rect(x1 + 2 * barWidth, y1, barWidth, barHeight);

  // The foreground rectangles
  fill('firebrick');
  rect(x1, y1 + (r / 4), barWidth, barHeight - (r / 4));
  fill('seagreen');
  rect(x1 + barWidth, y1 + (g / 4), barWidth, barHeight - (g / 4));
  fill('royalblue');
  rect(x1 + 2 * barWidth, y1 + (b / 4), barWidth, barHeight - (b / 4));

  //The target lines
  // stroke(40);
  // line(x1, y1 + (red / 4), x1 + barWidth - 1, y1 + (red / 4));
  // line(x1 + barWidth, y1 + (green / 4), x1 + 2 * barWidth - 1, y1 + (green / 4));
  // line(x1 + 2 * barWidth, y1 + (blue / 4), x1 + 3 * barWidth - 1, y1 + (blue / 4));
}
