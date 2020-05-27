var drawing=[];
var currentPath=[];
var clearButton;
function setup() {
    console.log("In func setup..");

  canvas = createCanvas(1000, 600);
  canvas.mousePressed(start);
 
  clearButton = select('#clearButton');
  clearButton.mousePressed(clearDrawing);
  
}

function draw() {
  background("yellow");
  //console.log("In func draw..");

  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(4);
  noFill();
  stroke("red");
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

}
function start(){
    console.log("In func start..");

  currentPath=[];

  drawing.push(currentPath);
  console.log(drawing);

}

function clearDrawing(){
drawing=[];


}