var state, problemExists=true, answerIsReady=false;
var cFactor, rFactor;
var answer, submission;

function setup() {
  createCanvas(1400, 600);
  state="select";
  textSize(100);
}

function draw() {
  background(255);
  
  if (state=="select") {
    keyCode=0;
    text("Select Factor", 400, 100);
    
    text("1", 50, 550);
    text("2", 150, 550);
    text("3", 250, 550);
    text("4", 350, 550);
    text("5", 450, 550);
    text("6", 550, 550);
    text("7", 650, 550);
    text("8", 750, 550);
    text("9", 850, 550);
    text("10", 950, 550);
    text("11", 1100, 550);
    text("12", 1240, 550)
  }
  
  if (state=="play") {
    if (keyCode==32&&answerIsReady==false) {
      answerIsReady = true;
    }
    if (answerIsReady) {
      text(cFactor+" X "+rFactor+" = "+answer, 600, 400);
      if (keyCode==78) {
        answerIsReady=false;
        newProblem();
      }
    } else {
      text(cFactor+" X "+rFactor, 600, 400);
    }
    if (keyCode==77) {
      state="select";
    }
  }
}

function mousePressed() {
  if (state=="select") {
    //1
    if (mouseX>50&&mouseX<100 && mouseY<550&&mouseY>450) {
      cFactor=1;
      state="play";
      newProblem();
    }
    //2
    if (mouseX>150&&mouseX<200 && mouseY<550&&mouseY>450) {
      cFactor=2;
      state="play";
      newProblem();
    }
    //3
    if (mouseX>250&&mouseX<300 && mouseY<550&&mouseY>450) {
      cFactor=3;
      state="play";
      newProblem();
    }
    //4
    if (mouseX>350&&mouseX<400 && mouseY<550&&mouseY>450) {
      cFactor=4;
      state="play";
      newProblem();
    }
    //5
    if (mouseX>450&&mouseX<500 && mouseY<550&&mouseY>450) {
      cFactor=5;
      state="play";
      newProblem();
    }
    //6
    if (mouseX>550&&mouseX<600 && mouseY<550&&mouseY>450) {
      cFactor=6;
      state="play";
      newProblem();
    }
    //7
    if (mouseX>650&&mouseX<700 && mouseY<550&&mouseY>450) {
      cFactor=7;
      state="play";
      newProblem();
    }
    //8
    if (mouseX>750&&mouseX<800 && mouseY<550&&mouseY>450) {
      cFactor=8;
      state="play";
      newProblem();
    }
    //9
    if (mouseX>850&&mouseX<900 && mouseY<550&&mouseY>450) {
      cFactor=9;
      state="play";
      newProblem();
    }
    //10
    if (mouseX>950&&mouseX<1050 && mouseY<550&&mouseY>450) {
      cFactor=10;
      state="play";
      newProblem();
    }
    //11
    if (mouseX>1100&&mouseX<1200 && mouseY<550&&mouseY>450) {
      cFactor=11;
      state="play";
      newProblem();
    }
    //12
    if (mouseX>1240&&mouseX<1340 && mouseY<550&&mouseY>450) {
      cFactor=12;
      state="play";
      newProblem();
    }
  }
}

function newProblem() {
  rFactor = Math.round(random(1, 12));
  answer = cFactor*rFactor
}