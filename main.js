function setup() {
    video = createCapture(VIDEO);
video.size(550,550);
video.position(100,100);

canvas = createCanvas(550,500);
canvas.position(700,100)

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized!');
}


function draw() {
    backgrouund('purple');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
