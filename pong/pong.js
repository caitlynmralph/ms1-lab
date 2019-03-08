var x = 100;
var y = 100;
var speedX = -2;
var speedY = 4;

function setup() {
    createCanvas(windowWidth, windowHeight)
    fill(255,127)
    rectMode(CENTER)
}

function draw() {
    background(255, 204, 0)
    fill('lavendar')

    // paddle 
    stroke('black')
    rect(mouseX, height-50, width*.25, 30)

    // pong ball
    fill('lightpink')
    noStroke()
    ellipse(x, y, 20, 20)
    x=x+speedX
    y=y+speedY

    // left and right wall
    if (x < 10 || x > width-10)
    {
        speedX = speedX * -1
    }

    // top wall
    if (y < 10)
    {
        speedY = speedY * -1
    }

    // paddle
    if (y >= height-75 && y < height-75+speedY && abs(x-mouseX) < width*.25/2)
    {
        speedY = speedY * -1
    }
}