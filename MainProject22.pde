// DATA 6260 - Project #2 - Vehicle Analysis
// Ryan Renken & Elvis Chukwuani

// The data used in this analysis was web scraped from a website used as a part of the 1983 Exposition of Statistical Graphics Technology.
// There are 406 cars inlcuded in this dataset.
// Car Attributes include: MPG (miles per gallon), number of cyclinders, engine displacement, horsepower, weight, acceleration, model year, and the region of origin.

// This scatter plot visualization enables users to analyze vehicle acceleration performance trends as they relate to all other car attributes.
// Acceleration is a variable of time - the amount of time in seconds it takes a car to go from 0 mph to 60 mph

// There are buttons along the righthand side of the output window that allow users to toggle through the different attributes shown as the X-axis in the plot.
// To drill down further, clicking the region buttons along the bottom will filter the plot to only show cars from the selected region (American, European, or Japanese).
// The default view of all the attribute buttons is the 'Overall View'


// Prior to running this code, please navigate to the 'Manage Libraries...' option under the 'Sketch' tab in the toolbar and install the following libraries:

import controlP5.*;
import interfascia.*;
import grafica.*;
import processing.data.*;
import g4p_controls.*;




Table table; // attributes table
Table carNames; // car names table

int selectedOrigin = 0; // by default showing overview

GPlot plot1;

int selectedXColumn = 4; // default X column selected

float threshold = 2.5;

ControlP5 cp5;
ControlP5 cp6;
ControlP5 cp7;
ControlP5 cp8;
ControlP5 cp9;
ControlP5 cp10;
ControlP5 cp11;
ControlP5 cp12;
ControlP5 cp13;
ControlP5 cp14;
ControlP5 cp15;
ControlP5 cp16;


void setup() {
  size(1750,850);
  loadData(); 
  loadNames(); 
  mergeTables();
  
  table.print();                // print merged table (shows values before cleaning is done)
  
  plot1 = new GPlot(this);
  drawScatterPlot1();
  
  // Button setup
  cp5 = new ControlP5(this);
  cp6 = new ControlP5(this);
  cp7 = new ControlP5(this);
  cp8 = new ControlP5(this);
  cp9 = new ControlP5(this);
  cp10 = new ControlP5(this);
  cp11 = new ControlP5(this);
  cp12 = new ControlP5(this);
  cp13 = new ControlP5(this);
  cp14 = new ControlP5(this);
  cp15 = new ControlP5(this);
  
  cp5.setColorBackground(color(33, 28, 1));
  cp6.setColorBackground(color(143, 50, 21));
  cp7.setColorBackground(color(11, 99, 32));
  cp8.setColorBackground(color(84, 3, 71));
  
  cp9.setColorBackground(color(158, 22, 49));
  cp10.setColorBackground(color(44, 39, 110));
  cp11.setColorBackground(color(93, 143, 145));
  cp12.setColorBackground(color(154, 158, 103));
  
  cp13.setColorBackground(color(66, 12, 11));
  cp14.setColorBackground(color(82, 31, 84));
  cp15.setColorBackground(color(189, 115, 51));
  
  cp5.addButton("Button1")
    //.setPosition(240, 1130)
     .setPosition(100, height - 165)
     .setSize(190, 90)
     .setLabel("Overall View")
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
  cp6.addButton("Button2")
     .setPosition(400, height - 165)//300 950
     .setSize(190, 90)
     .setLabel("1. American")
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     

  cp7.addButton("Button3")
     .setPosition(700, height - 165)
     .setSize(190, 90)
     .setLabel("2. European")
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
  cp8.addButton("Button4")
     .setPosition(1000, height - 165)
     .setSize(190, 90)
     .setLabel("3. Japanese")
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
   cp9.addButton("Button5")
     //.setPosition(1630, 50)
     .setPosition(width - 375, 50)
     .setSize(60, 60)
     .setLabel("1.")
     .setColorForeground(color(204, 100, 20)) // Set the foreground color (purple)
     //.setColorActive(color(255, 0, 0)) 
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
   cp10.addButton("Button6")
     .setPosition(width - 375, 150)
     .setSize(60, 60)
     .setLabel("2.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
   cp11.addButton("Button7")
     .setPosition(width - 375, 250)
     .setSize(60, 60)
     .setLabel("3.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
       
   cp12.addButton("Button8")
     .setPosition(width - 375, 350)
     .setSize(60, 60)
     .setLabel("4.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
    cp13.addButton("Button9")
     .setPosition(width - 375, 450)
     .setSize(60, 60)
     .setLabel("5.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
   cp14.addButton("Button10")
     .setPosition(width - 375, 550)
     .setSize(60, 60)
     .setLabel("6.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
     
    cp15.addButton("Button11")
     .setPosition(width - 375, 650)
     .setSize(60, 60)
     .setLabel("7.")
     .setColorForeground(color(204, 100, 20))
     .getCaptionLabel().setFont(createFont("Arial Black", 20));
  
 
}

void draw() {
 // background(255);
 // fill(0);
 // text("1983 ASA Data Exposition - Car Analysis", 0, 10);
 // text("goood", 1000, 500);
  background(225, 230, 218);
  plot1.beginDraw();
  plot1.drawBackground();
  plot1.drawBox();
  plot1.drawXAxis();
  plot1.drawYAxis();
  plot1.drawTitle();
  plot1.drawGridLines(GPlot.BOTH);
  plot1.drawPoints();
  plot1.drawLabels();
  plot1.endDraw();
  
  
  String message = "Miles Per Gallon";
  String message1 = "No of Clyinders";
  String message2 = "Engine Displacement";
  String message3 = "Horsepower";
  String message4 = "Vehicle Weight";
  String message5 = "Model Year";
  String message6 = "Car Origin";
  
  String message7 = "**Cars with null values for the selected attribute are not depicted in the scatter plot**";
  
  textSize(24); // Font size
  fill(0); // Fill color (black)

  // Display the text
  //text(message, 1695, 85);
  text(message, width - 300, 85);
  text(message1, width - 300, 185);
  text(message2, width - 300, 285);
  text(message3, width - 300, 385);
  text(message4, width - 300, 485);
  text(message5, width - 300, 585);
  text(message6, width - 300, 685);
  
  textSize(18);
  fill(100);
  text(message7, width - 700, height - 15);
 

  
  /*
 // Display the table data
  float x = width - 500;
  float y = 50;
  //float x2 = width - 500;
  //float y2 = 50;
  for (int i = 0; i < table.getRowCount(); i++) {
    for (int j = 0; j < table.getColumnCount(); j++) {
      String value = table.getString(i, j);
      text(value, x + j * 100, y + i * 20);
    }}
  for (int i = 0; i < carNames.getRowCount(); i++) {
      String carName = carNames.getString(i, "CarName");
      text(carName, x, y + i * 20);
    } */
}

// Web scraping the car attributes and storing as a table
void loadData() {
  String url = "http://lib.stat.cmu.edu/datasets/cars.data";
  String[] lines = loadStrings(url);    // loads content of the website and splits each line into an array of strings

  // Create an empty table and add columns with appropriate names
  table = new Table();
  table.addColumn("MPG");
  table.addColumn("Cylinders");
  table.addColumn("Displacement");
  table.addColumn("Horsepower");
  table.addColumn("Weight");
  table.addColumn("Acceleration");
  table.addColumn("Model Year");
  table.addColumn("Origin");

  int currentColumn = 0; // variable to keep track of which column is 'currently' being processed in the next step

  // Extracting data from lines 425 to 830 and add it to the table
  for (int i = 424; i < 830; i++) {               // starts a loop that goes through lines 425 through 830
    String line = lines[i];                       // extract a single line [i] as identified in previous step
    String[] values = splitTokens(line, " ");     // using a space as a delimeter between values within each individual line
    TableRow newRow = table.addRow();             // Add this identified row to the empty table we created before
    for (String value : values) {                 // loop that goes through each value row of values
    if (value.equals("NA")) {
      newRow.setString(currentColumn, null); }    // converts NA values to null/NaN
      else {
      newRow.setString(currentColumn, value);     // assigns the the current value in the row being processed to the corresponding column
      }
      
      
      currentColumn++;                            // Move to the next column
    }
   // println(currentColumn);
    currentColumn = 0;                            // Reset the column index for the next row before looping through the next line [i]
  
}

 }

// Extracting just the car names (same process as looping through attributes without needing to process values in each line)
void loadNames() {
  String url = "http://lib.stat.cmu.edu/datasets/cars.data";
  String[] lines = loadStrings(url);
  
  carNames = new Table();
  carNames.addColumn("CarName", Table.STRING);
  
  int currentRow = 0;
  
  for (int i = 15; i < 421; i++) {
    String carName = lines[i];
    TableRow newRow = carNames.addRow();
    newRow.setString("CarName", carName);
    currentRow++;
  }
  currentRow = 0;
}

// merging the car names table to the attributes table
void mergeTables() {
  table.addColumn("CarName", Table.STRING);
  for (int i = 0; i < carNames.getRowCount(); i++){      // loop through each row in the car names table
    TableRow tableRow = table.getRow(i);
    TableRow carNamesRow = carNames.getRow(i);
    tableRow.setString("CarName", carNamesRow.getString("CarName"));

  }
 
}

//drawing the scatter plot
void drawScatterPlot1() {
  plot1 = new GPlot(this);
  plot1.setPos(0,0);
  plot1.setDim(width - 500, height - 300);
  plot1.getTitle().setText("CAR DATA");
  plot1.getXAxis().setAxisLabelText(getSelectedAttributeLabel());          // Using a new funtion to show the selected Attribute as a label
  plot1.getYAxis().setAxisLabelText("Time to Accelerate 0 - 60 (Secs)");
  plot1.setPointColor(color(0, 0, 0, 255));
  plot1.setPointSize(10);
  
  float[] xValues = new float[table.getRowCount()];
  float[] yValues = new float[table.getRowCount()];
  GPointsArray newDataPoints = new GPointsArray();
  

for (int i = 0; i < table.getRowCount(); i++) {
    String carName1 = carNames.getString(i, "CarName");
    String mpgValue = table.getString(i, 0);
    String CylndValue = table.getString(i, 1);
    String dspValue = table.getString(i, 2);
    String hpValue = table.getString(i, 3);
    String wghtValue = table.getString(i, 4);
    String accValue = table.getString(i, 5);
    String yearValue = table.getString(i, 6);
    String originValue = table.getString(i, 7);
    if (selectedXColumn >= 0) {                          // only considers values >= 0  --  filters out null values
    float xValue = table.getFloat(i, selectedXColumn);   // assign the selected column as the xValue in scatter plot
    float yValue = table.getFloat(i, 5);                 // assign the 5th column (Acceleration) as the yValue in scatter plot
   
    xValues[i] = xValue;
    float mean = mean(xValues);
    float stdDev = standardDeviation(xValues);
    //println(mean);
    float zScore = (xValues[i] - mean) / stdDev;
    //println("zScore is:" + zScore);
    //println("zScore is:" + mean);
    //println("zScore is:" + stdDev);
    // Check if yValue is an outlier
    if (abs(zScore) > threshold) {
        // This is an outlier, add it with a special label
        newDataPoints.add(abs(xValue), yValue, "OUTLIER" + "\n Name: "+carName1 +"\n mpg: "+mpgValue+"\n Cyl: "+CylndValue+"\n Eng: "+dspValue+"\n HP: "+hpValue+"\n Weight: "+wghtValue+"\n Time: "+accValue+"\n Year: "+yearValue+"\n Origin: "+originValue);
               
       
    } else {
        // This is not an outlier
        newDataPoints.add(abs(xValue), yValue, "Name: "+carName1 +"\n mpg: "+mpgValue+"\n Cyl: "+CylndValue+"\n Eng: "+dspValue+"\n HP: "+hpValue+"\n Weight: "+wghtValue+"\n Time: "+accValue+"\n Year: "+yearValue+"\n Origin: "+originValue);
        //println(xValue, yValue, carName1 + "(outlier)");
    }

    //// Check if yValue is an outlier
    //if (yValue < lowerBound || yValue > upperBound) {
    //    // This is an outlier, add it with a special label
    //    newDataPoints.add(xValue, yValue, carName1 + " (outlier)");
    //} else {
    //    // This is not an outlier
    //    newDataPoints.add(xValue, yValue, carName1);
    //}
}
}
  
  
  //for (int i = 0; i < table.getRowCount(); i++) {
  //  //String names =table.getString(i, 
  //  String carName1 = carNames.getString(i, "CarName");
  //  float xValue = table.getFloat(i, selectedXColumn);
  //  float yValue = table.getFloat(i, 5);
  //  xValues[i] = xValue;
  //  yValues[i] = yValue;
  //  newDataPoints.add(xValues[i], yValues[i], carName1);
  //}
  
  
  //plot1.setPoints(newDataPoints);
  plot1.setPoints(newDataPoints);
  plot1.activatePointLabels();
  plot1.activateZooming();
  plot1.activatePanning();
  
  
 
}


String getSelectedAttributeLabel() {
  String[] attributeLabels = {"Miles Per Gallon", "No of Cylinders", "Engine Displacement", "Horsepower", "Vehicle Weight", "Acceleration", "Model Year", "Car Origin"};
  return attributeLabels[selectedXColumn];
}


// Draw overview button
void Button1(int theValue) {
  drawScatterPlot1(); // overview
}

//filter for origin buttons
void Button2(int theValue) {
 filterByOrigin(1);
}
void Button3(int theValue) {
  filterByOrigin(2);
}
void Button4(int theValue) {
  filterByOrigin(3);
}


// filter X axis attributes buttons
void Button5(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(0); // MPG
}

void Button6(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(1); // Cylinders
}

void Button7(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(2); // Displacement
}

void Button8(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(3); // Horsepower
}
  
void Button9(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(4); // Weight
}

void Button10(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(6); // Model year
}

void Button11(int theValue) {
  filterByOrigin(selectedOrigin);
  filterXAxis(7);// Origin
}

// Defining "filterByOrigin" function found in above functions
void filterByOrigin(int origin) {
  selectedOrigin = origin;
  
  GPointsArray newDataPoints1 = new GPointsArray();
  float[] xValues1 = new float[table.getRowCount()];
  
  for (int i = 0; i < table.getRowCount(); i++) {
    if(origin == 0 || table.getInt(i, 7) == origin) {
      String carName2= carNames.getString(i, "CarName");
      String mpgValue2 = table.getString(i, 0);
      String CylndValue2 = table.getString(i, 1);
      String dspValue2 = table.getString(i, 2);
      String hpValue2 = table.getString(i, 3);
      String wghtValue2 = table.getString(i, 4);
      String accValue2 = table.getString(i, 5);
      String yearValue2 = table.getString(i, 6);
      String originValue2 = table.getString(i, 7);
      float xValue1 = table.getFloat(i, selectedXColumn);  // references the selected attribute function
      float yValue1 = table.getFloat(i, 5);
      xValues1[i] = xValue1;
      float mean1 = mean(xValues1);
      float stdDev1 = standardDeviation(xValues1);
      
    //println(mean);
      float zScore1 = (xValues1[i] - mean1) / stdDev1;
    //println("zScore is:" + zScore);
    //println("zScore is:" + mean);
    //println("zScore is:" + stdDev);
    // Check if yValue is an outlier
      if (abs(zScore1) > threshold) {
        // This is an outlier, add it with a special label
        newDataPoints1.add(abs(xValue1), yValue1, "OUTLIER" + "\n Name: "+carName2 +"\n mpg: "+mpgValue2+"\n Cyl: "+CylndValue2+"\n Eng: "+dspValue2+"\n HP: "+hpValue2+"\n Weight: "+wghtValue2+"\n Time: "+accValue2+"\n Year: "+yearValue2+"\n Origin: "+originValue2);newDataPoints1.add(abs(xValue1), yValue1, "OUTLIER" + "\n Name: "+carName2 +"\n mpg: "+mpgValue2+"\n Cyl: "+CylndValue2+"\n Eng: "+dspValue2+"\n HP: "+hpValue2+"\n Weight: "+wghtValue2+"\n Time: "+accValue2+"\n Year: "+yearValue2+"\n Origin: "+originValue2);
               
       
      } else {
        // This is not an outlier
        newDataPoints1.add(abs(xValue1), yValue1, "\n Name: "+carName2 +"\n mpg: "+mpgValue2+"\n Cyl: "+CylndValue2+"\n Eng: "+dspValue2+"\n HP: "+hpValue2+"\n Weight: "+wghtValue2+"\n Time: "+accValue2+"\n Year: "+yearValue2+"\n Origin: "+originValue2);
        
        //println(xValue, yValue, carName1 + "(outlier)");
    }
    }
  }if(selectedOrigin == 1){
    plot1.setPointColor(color(168, 14, 8));
    plot1.setPoints(newDataPoints1);
  }else if(selectedOrigin == 2){
    plot1.setPointColor(color(0, 97, 5));
    plot1.setPoints(newDataPoints1);
  }else if(selectedOrigin == 3){
    plot1.setPointColor(color(145, 12, 166));
    plot1.setPoints(newDataPoints1);
  }
    
} 
  
// Defining X Axis filters found in above button functions
void filterXAxis(int columnIndex) {              // columnIndex is identified in each of the buttons to select the numbered column attribute
//  int previousSelectedOrigin = selectedOrigin;
  selectedXColumn = columnIndex;                 // makes the selected attribute the column index
 // filterByOrigin(previousSelectedOrigin);        
  drawScatterPlot1();                            // draw the scatter plot with the newly selected column attribute
  
  
  /*
  int columnIndex = getColumnIndex(attribute);
  if (columnIndex >= 0) {
    selectedXColumn = columnIndex;
    drawScatterPlot1(); */
 }
/*
// function to try matching the attribute name from the column index to the attribute names in the original table
int getColumnIndex(String attributeName) {
  String[] columnNames = {"Cylinders", "Displacement", "Horsepower", "Weight", "Acceleration", "Model Year"};
  
  for (int i = 0; i < columnNames.length; i++) {
    if(attributeName.equals(columnNames[i])) {
      return i;
    }
  }
  return -1;
}
*/
float mean(float[] data) {
  float sum = 0;
  for (int i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
}

float standardDeviation(float[] data) {
  float avg = mean(data);
  float sum = 0;
  for (int i = 0; i < data.length; i++) {
    sum += pow(data[i] - avg, 2);
  }
  return sqrt(sum / (data.length - 1));
}


  
  
  
