// let total = 100
// let i = 0 
// let radius = 200
// let d = 30

// function setup () {
//   createCanvas(innerWidth, innerHeight)
//   background(0)
// }

// function draw () {
//   background(0)
//   i += 0.25
//   let offsetX = width / 2
//   let offsetY = height / 2
//   let x = sin(i * 0.25) * radius + offsetX
//   let y = cos(i * 0.75) * radius + offsetY
//   ellipse(x, y, d)
// }
const init_size = 200;
let lastBar = -1;
let y = innerHeight / 2;
let colors = ['#fae',"#1da", "#4ad", "#65a"]

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB, height, height, height);
  background(colors[int(random(0,colors.length))]);
  // background(255);
}

function draw() {
  // curr_col = colors[random(0,colors.length)]
  // background(colors[rand]);
  // background(255, 0, 0, 10)
  size = random(0, init_size)
  // y = random(0, height)
  let which = mouseX / size;
  if (which !== lastBar) {
    let x = which * size;
    fill(mouseX, width, width);
    ellipse(x, y, size);
    lastBar = which;
  }
}
