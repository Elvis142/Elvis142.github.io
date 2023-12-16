Program program1;
Program program2;
Program program3;

int gridSize = 40; // give a constant size of each grid cell
PVector centralPoint = new PVector(0, 0); //here I initialize the PVector

boolean isMousePressed = false;

PShape usa; // we are declareing the following variables as type PVector 
PShape michigan;
PShape ohio;
PShape indiana;
PShape kentucky;
PShape westVirginia;
PShape newYork;
PShape pennsylvania;
color[] rainbowColors; // declare the array "rainbowColors" of type color
int[] currentColorIndex; // declare the array "currentColorIndex" of type int
int currentProgram = -1;  // To keep track of the selected program
boolean toggleEllipse = false; // this declare toggleEllipse as boolean variable and initializes it as false
float max_distance; // declares max_distance as a float variable

void setup() {
 usa = loadShape("usa-wikipedia.svg");  // we loading an SVG file named "us.svg" and assigning it to the variable usa.
 michigan = usa.getChild("MI"); // we are  getting the states from the loaded SVG by using the getChild() function and assign them to their respective PShape variables.
 ohio = usa.getChild("OH");
 indiana = usa.getChild("IN");
 westVirginia = usa.getChild("WV");
 pennsylvania = usa.getChild("PA");
 kentucky = usa.getChild("KY");
 newYork = usa.getChild("NY");
 
 rainbowColors = new color[]{ // we define an array of rainbow colors using the color() function. Each color is represented by its RGB values.
 color(255, 0, 0),    // Red
 color(255, 127, 0),  // Orange
 color(255, 255, 0),  // Yellow
 color(0, 255, 0),    // Green
 color(0, 0, 255),    // Blue
 color(75, 0, 130),   // Indigo
 color(148, 0, 211)   // Violet
  };
  
currentColorIndex = new int[]{  // we initialize an array of integers showing the current color index for each state. Each index corresponds to the position of a state in the rainbowColors array.
  0, // Michigan
  1, // Ohio
  2, // Indiana
  3, // Kentucky
  4, // West Virginia
  5, // Pennsylvania
  6  // New York
  };

  // Initialize instances of your programs
  program1 = new Program1();
  program2 = new Program2();
  program3 = new Program3();
  size(1800, 1160); 
  stroke(640, 360);
  max_distance = dist(0, 0, width, height); // calculates basically the diagonal from one edge of the screen to the other

}

void draw() {
  
  fill(255);
  textSize(20);
  textAlign(RIGHT, TOP); 

  myMenu("1. Distance 2D                 ", 10);
  myMenu("2. get Child                       ", 50);
  myMenu("3. Embedded Iteration", 90);

  if (currentProgram == 1) {
    program1.draw();
  } else if (currentProgram == 2) {
    program2.draw();
  } else if (currentProgram == 3) {
    program3.draw();
  }
  
}

void myMenu(String text, float border) {
  float boxWidth = 200;
  float boxHeight = 30;
  float x = width - boxWidth - 20;
  float y = border;
  
  // Check if the mouse is over the menu box
  boolean isMouseOver = mouseX >= x && mouseX <= x + boxWidth && mouseY >= y && mouseY <= y + boxHeight;
  fill(isMouseOver ? color(150) : color(0));// Set the fill color based on mouse interaction
  rect(x, y, boxWidth, boxHeight);// Draw the menu box
  fill(255);// Set the text color to white
  text(text, width - 30, border + 5);// Draw the menu text
}

class Program { //Base Class Progrm 
  void setup() {}
  void draw(){}
  void myfunc(){}
  void drawMenu(){}
}
class Program1 extends Program {
  void setup() {
  }
  void draw() {
  background(0);
  for(int i = 0; i <= width; i += 20) { // this nested loops creates a grid of squares. The i and j variables represent the x and y coordinates of the grid points, and these points are spaced 20 pixels apart.
    for(int j = 0; j <= height; j += 20) {
      float size = dist(mouseX, mouseY, i, j); // size represents the distance between the location of the mouse and grid points i, j and the dist() function calculates this distance.
      if (toggleEllipse){ // if toggleEllipse is true we go inside the if statement
        size = (max_distance - size)/max_distance * 66;//inverse is made of the original code, the ellipses are bigger the more they are closer to the mouse. Further explanation are down
        ellipse(i, j, size, size);
      }else{
        size = size/max_distance * 66;
        ellipse(i, j, size, size);
      }
    } 
  }
  }  
}
class Program2 extends Program {
  void draw(){
    background(255);
    shape(usa, 100, 100); // Draw the full map
    michigan.disableStyle();  // Disable the styles (eg colors) found in the USA SVG file
    ohio.disableStyle();
    indiana.disableStyle();
    kentucky.disableStyle();
    westVirginia.disableStyle();
    pennsylvania.disableStyle();
    newYork.disableStyle();
  
  for (int i = 0; i < currentColorIndex.length; i++) { //This loop iterates through each state using the currentColorIndex array, which stores the current color index for each state. It sets the fill color for each state to a color from the rainbowColors array based on its current color index.
    fill(rainbowColors[currentColorIndex[i]]);
    noStroke();
    shape(getStateShape(i), 100, 100);
  }
  incrementColorIndexes();   // Increment the color index for all states ensures the states chnage color
}
 
  }
 
class Program3 extends Program {
  void setup() {
    centralPoint.set(width / 2, height / 2); // Here I set the PVector to be at center of the canvas which is the initial central point.
    background(0); // set background
    for (int x = gridSize; x <= width - gridSize; x += gridSize) { //this nested loop gets values for x and y then calls the drawLineToPoint function
      for (int y = gridSize; y <= height - gridSize; y += gridSize) {
      drawLineToPoint(x, y, centralPoint);
    }
  }
}

}

void drawLineToPoint(float x, float y, PVector point) { // this is a method that takes three parameters x,y, and a point
  noStroke(); // no outline
  fill(255);// gives color to the line and rectangles
  rect(x - 1, y - 1, 3, 3);  // draws reactangle at the grid point
  stroke(255, 100); // sets stroke with transparency of 100
  line(x, y, point.x, point.y); // draws line starting from point x,y which is somewhere close to the rectangle to the point point,x and point.y
}
void mousePressed() {
  if (mouseButton == RIGHT)  {// Toggle size on left mouse click ignore I said equals right the orientation on my laptop is different
    toggleEllipse = !toggleEllipse;// this is like an event that toggles the boolen value of toggleEllipse anytime mouse Clicked
  } else if (mouseButton == LEFT && currentProgram == 3) { //The code inside this block will only run when mouse is clicked and also changes the central point to the mouse's position
    centralPoint.set(mouseX, mouseY); //central point it is set to mouse location mouseX beeing the x-coordinate and mouseY being the y-coordinate.
    background(0);//clear background so we erase previous lines 
    for (int x = gridSize; x <= width - gridSize; x += gridSize) { //the nest loop is basically saying draw the rectangles and lines to the updated central point
      for (int y = gridSize; y <= height - gridSize; y += gridSize) {
        drawLineToPoint(x, y, centralPoint);
      }
    }
  }
  if (mouseX > width - 200 && mouseY >= 10 && mouseY < 150) { 
    if (mouseY >= 10 && mouseY < 40) {
      background(0);
      currentProgram = 1; 
    } else if (mouseY >= 50 && mouseY < 80) {
      background(0);
      currentProgram = 2;
    } else if (mouseY >= 90 && mouseY < 120) {
      background(0);
      currentProgram = 3;
      program3.setup();
    }
  }   
}

PShape getStateShape(int index) { // this a get method with a retrn type of used to retrieve the PShape object for a specific state based on its index. It uses a switch statement to map the index to the corresponding state's PShape.
 
  switch (index) {
    case 0:
      return michigan;
    case 1:
      return ohio;
    case 2:
      return indiana;
    case 3:
      return kentucky;
    case 4:
      return westVirginia;
    case 5:
      return pennsylvania;
    case 6:
      return newYork;
    default:
      return null;
  }
}
void incrementColorIndexes() { // this function increments the color index for each state. It ensures that the color index wraps around to 0 by using the modulo operator when it reaches the end of the rainbowColors array, creating a looping rainbow effect for the states.
 
  for (int i = 0; i < currentColorIndex.length; i++) {
    currentColorIndex[i] = (currentColorIndex[i] + 1) % rainbowColors.length;
  }
}

//void drawMenu() { Tried doing Menu with Keypad worked but changed to click
  
//  fill(100);
//  rect(width - 260, 0, 260, 95);

//  fill(255);
//  textSize(16);
//  text("Menu", width-250,20);
//  text("for Distance  Press 1", width - 250, 40);
//  text("for Get Child  Press 2", width - 250, 60);
//  text("for Embedding Iteration  Press 3", width - 250, 80);
//}
