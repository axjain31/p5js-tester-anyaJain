//student name: anya xia jain
//student id: 21012764

let forecast = {};
let index = 0;
let inc = 0.01;
let xoff = 0;
let yoff;
let angle = 0;
let tornadoRadius = 20;
let windSpeed = 0.03;
let slider;
let myslider;
let img;

function preload() { 
	forecast = loadJSON("planetary forecast (1).json");
	img = loadImage("spaceship.png");
}

function setup() {
	createCanvas(600, 250);
	myslider = createSlider(10,100,50);
  angleMode(DEGREES);
	myslider.position(675,500);
	background(0);
	stars();
	fill(255);
	textSize(20);
	textStyle(BOLD);
	text("planetary forecast", width/2-70, height/2);
	textStyle(ITALIC);
	text(12);
	text("pick a number from 1-7 to start", width/2-120, height/2+25);
	text(8);
	text("use slider to change size of space ship", width/2-140, height/2+50);
}

function draw(){
	textFont('Georgia');
	keyPressed();
	size = myslider.value();
	image(img, mouseX, mouseY);
	img.resize(size, size);
}
	
function statistics() {
  textSize(18);
  text(`planet: ` + forecast.daily[index].planet, 30, 40);
  textSize(12);
	text(`planet type: ` + forecast.daily[index].pt, 30, 70);
	text(`# of moons: ` + forecast.daily[index].moons, 30, 90);
	text(`day length: ` + forecast.daily[index].sd, 30, 110);
	text(`year length: ` + forecast.daily[index].year, 30, 130);
	text(`day temperature: ` + forecast.daily[index].temp.day, 30, 150);
  text(`minimum temperature: ` + forecast.daily[index].temp.min, 30, 170);
  text(`maximum temperature: ` + forecast.daily[index].temp.max, 30, 190);
  text(`main forecast: ` + forecast.daily[index].weather[0].main, 30, 210);
	text(`daily weather: ` + forecast.daily[index].weather[0].description, 30, 230);
}

function mercury(){
	background(0);
  noStroke();
  
  // Create a gradient from yellow to red
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(255, 100, 0), color(255, 0, 0), inter);
    fill(c);
    rect(0, i, width, 1);
  }
  
  // Create a flame shape with a gradient from red to orange
  beginShape();
  vertex(200, 320);
  bezierVertex(150, 200, 250, 200, 200, 60);
  bezierVertex(175, 100, 225, 100, 300, 20);
  bezierVertex(200, 60, 200, 60, 400, 100);
	bezierVertex(220, 60, 175, 60, 500, 120);
  endShape(CLOSE);
  
  for (let i = 0; i < 3; i++) {
    // Create smaller flame shapes with different colors
    if (i == 0) {
      fill(255, 165, 0);
    } else if (i == 1) {
      fill(255, 0, 0);
    } else {
      fill(255, 255, 0);
    }
    
    beginShape();
    vertex(200, 320);
    bezierVertex(150, 200, 250, 200, 200 + i*10, 60 + i*10);
    bezierVertex(175, 100, 225, 100, 300 + i*10, 20 + i*10);
    bezierVertex(200, 60, 200, 60, 400 + i*10, 0 + i*10);
		bezierVertex(220, 60, 175, 60, 200 + i*10, 0 + i*10);
    endShape(CLOSE);
  }
}

function venus(){
	 // Initialize the y offset for the Perlin noise
  let yoff = 0;
  
  // Load the pixel data for the canvas
  loadPixels();
  
  // Loop through each pixel in the canvas
  for (let y = 0; y < height; y++) {
    // Initialize the x offset for the Perlin noise
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      // Calculate the index of the current pixel in the pixel array
      let index = (x + y * width) * 4;
      
      // Generate Perlin noise value and scale it to a grayscale value between 0-255
      let r = noise(xoff, yoff) * 255;
      push();
      // Set the color of the current pixel to red, using the grayscale value as the red component
      pixels[index + 0] = r; // Red
      pixels[index + 1] = 0; // Green
      pixels[index + 2] = 0; // Blue
      pixels[index + 3] = 150; // Alpha
      
      // Increment the x offset for the Perlin noise
      xoff += inc;
    }
    
    // Increment the y offset for the Perlin noise
    yoff += inc;
  }
  
  // Update the canvas with the new pixel data
  updatePixels();
	pop();
}

function earth(){
	background(0,0,35);
	stroke(255);
	fill(255);
	stars();
	
	// draw buildings
  fill(200);
  rect(450, 100, 50, 200);
  rect(350, 100, 80, 170);
  rect(250, 100, 70, 150);

  // draw windows
  fill(255);
  for (let x = 460; x <= 480; x += 10) {
    for (let y = 110; y <= 270; y += 10) {
      rect(x, y, 5, 5);
    }
  }
  for (let x = 360; x <= 420; x += 10) {
    for (let y = 110; y <= 380; y += 10) {
      rect(x, y, 5, 5);
    }
  }
  for (let x = 260; x <= 320; x += 8) {
    for (let y = 110; y <= 260; y += 10) {
      rect(x, y, 5, 5);
    }
  }

  // draw sun
  fill(255, 255, 255);
  ellipse(450, 50, 50, 50);
}

function mars(){
	background(235, 131, 52); 
  noStroke();
  fill(130, 65, 39);
  beginShape();
	let yoff = 0;
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, height-60, height-10);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function jupiter(){
	 background(0,0,35);
	 stars();
	 // set the fill color to orange
  fill(255, 150, 40);

  // draw the main body of Jupiter
  ellipse(width/2, height/2, 200, 200);

  fill(173, 20, 2);
  stroke(173, 20, 2);
  strokeWeight(2);

  beginShape();

  for (let i = 0; i < 360; i++) {
    let noiseValue = noise(i * 0.01, frameCount * 0.005);
    let x = (width/2+40) + (tornadoRadius + noiseValue*5) * cos(angle + i);
    let y = (height/2+5) + (tornadoRadius + noiseValue*5) * sin(angle + i);
    vertex(x, y);
  }

  endShape(CLOSE);

  angle += windSpeed;
}

function neptune(){
	background(0, 0, 139);
	frameRate(7);
	strokeWeight(2);
	stroke(0, 105, 148);
  fill(0, 100, 139);
  beginShape();
  let xoff = 0; 
	let yoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, height-50, height-100);
    vertex(x, y);
    xoff += 0.05;
  }
	
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
	push();
	for (let i = 0; i < 100; i++) {
    let randomX = random(width);
    let randomY = random(height);
    fill(185, 242, 255);
		rotate(45/3);
    rect(randomX, randomY,5,5);
  }
	pop();
}

function saturn(){
	background(0,0,35);
	stars();
	push();
	// set up the center of the canvas as the origin
  translate(width/2, height/2);
  
  // draw the planet Saturn
  noStroke();
  fill(255, 204, 0);
  ellipse(0, 0, 100, 100);
  fill(255, 170, 0);
  ellipse(0, 0, 80, 80);
  
  // draw the spinning ring
	strokeWeight(3);
  stroke(255, 204, 0);
  noFill();
  rotate(frameCount/50.0); // rotate the ring by a changing angle
  ellipse(0, 0, 140, 10);
	pop();
}

function stars(){
	frameRate(3);
	for(let y = 0; y < 240; y++) {
      let randomX = random(width)
      let randomY = random(height)
      noStroke()
			fill(255);
      ellipse(randomX, randomY, 2,2)
		}
}

function keyPressed() {
	if (key === "enter"){
		solarsystem();
	}
	
  if (key === "1") {
    index = int(key-1);
		mercury();
		fill(255);
    statistics();
		
  }
	if (key === "2") {
    index = int(key-1);
		pixelDensity(1);
		venus();
		fill(255);
    statistics();
  }
	
	if (key === "3") {
    index = int(key-1);
		earth();
		fill(255);
    statistics();
  }
	
	if (key === "4") {
    index = int(key-1);
		mars();
		fill(255);
    statistics();
  }
	
	if (key === "5") {
    index = int(key-1);
		jupiter();
		fill(255);
    statistics();
  }
	
	if (key === "6") {
    index = int(key-1);
		neptune();
		fill(255);
    statistics();
  }
	
	if (key === "7") {
    index = int(key-1);
    saturn();
		fill(255);
		statistics();
  }
}

