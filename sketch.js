
let video;
let detector;
let detections =[];

function preload () {
  detector = ml5.objectDetector('cocossd');
  gotDetections();
  console.log('uuu')
}


function gotDetections (error, results) {
//if(error){
//console.error(error);
//}
 detections = results;
 detector.detect(video, gotDetections);

}

function setup() {
  createCanvas(600, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  console.log('ready');
  detector.detect(video, gotDetections);
  
}

async function draw() {
  image(video, 0, 0);

  for(let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(255, 0, 0);
    strokeWeight(4);
    fill(0, 255, 0, 50);
    rect(object.x, object.y, object.width, object.height);
    noFill();
    fill(0);
    strokeWeight(0);
    textSize(24);
    text(object.label, object.x + 10, object.y - 20);
  }
}
