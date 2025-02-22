let morningImage;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let timeString = getChicagoTime(); // Get real-time Chicago time
  let timePeriod = getTimePeriod(timeString); // Determine time of day
  let color = setClockBackgroundColor(timePeriod); // Set background color

  fill(color);
  rect(50, 120, 300, 200); // Square background

  // Display greeting and time inside the square
  displayTextInsideSquare(timePeriod, timeString);
}

// Function to get Chicago time
function getChicagoTime() {
  let now = new Date();
  let utcOffset = now.getTimezoneOffset() * 60000; // Convert to milliseconds
  let chicagoOffset = -6 * 3600000; // CST is UTC-6 (or UTC-5 in Daylight Saving Time)
  let chicagoTime = new Date(now.getTime() + utcOffset + chicagoOffset);

  let hr = chicagoTime.getHours();
  let mn = chicagoTime.getMinutes();
  let sc = chicagoTime.getSeconds();

  return nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sc, 2);
}

// Function to determine time of day
function getTimePeriod(time) {
  let hr = int(time.split(":")[0]); // Extract hours

  if (hr >= 5 && hr < 12) return "morning";
  if (hr >= 12 && hr < 17) return "afternoon";
  if (hr >= 17 && hr < 21) return "evening";
  return "night";
}

// Function to display text inside the square
function displayTextInsideSquare(time, timeString) {
  textAlign(CENTER, CENTER);
  textSize(24);
  fill("white"); // Text color for contrast
  noStroke();

  // Display greeting inside the square
  if (time === "morning") {
    text("Good Morning!", 200, 180);
  } else if (time === "afternoon") {
    text("Good Afternoon!", 200, 180);
  } else if (time === "evening") {
    text("Good Evening.", 200, 180);
  } else if (time === "night") {
    text("Sweet Dreams <3", 200, 180);
  }

  // Display the real-time Chicago clock inside the square
  textSize(32);
  text(timeString, 200, 230);
}

function setClockBackgroundColor(time) {
  let theColor;
 
  if (time === "morning") {
    theColor = "rgb(175,118,103)";
  } else if (time === "afternoon") {
    theColor = "rgb(240,194,192)";
  } else if (time === "evening") {
    theColor = "rgb(130,130,173)";
  } else if (time === "night") {
    theColor = "rgb(19,19,68)";
  }

  return theColor;
}

function preload() {
  morningImage = loadImage("https://media.istockphoto.com/id/1473194765/vector/cute-smiling-sun-icon-flat-design-sun-element-vector.jpg?s=612x612&w=0&k=20&c=cag9TyufYPWCx1IqEkb3ax5qSHUdg9RPCNTrvql9_-A=");
}