noseX = 0;
noseY = 0;
difference_width = 0;
difference_height = 0;
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0; 


function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    
    canvas = createCanvas(450,450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw(){
    background('#EB2E28');
    document.getElementById("rect_sides").innerHTML="Length and Breadth of a rectangle will be = "+difference_width+"px"+difference_height+"px";
    fill('#8C6A97');
    stroke('#8C6A97');
    rect(noseX , noseY , difference_width , difference_height );

}

function modelLoaded(){
    console.log("PoseNet is Initialised !");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        difference_width=floor(leftWristX-rightWristX);
        difference_height=floor(leftWristY-rightWristY);
        console.log("noseX="+noseX + "," + "noseY=" + noseY);
        console.log("leftWristX="+ leftWristX+"," + "leftWristY = "+leftWristY);
        console.log("rightWristX="+ rightWristX+"," + "rightWristY = "+rightWristY);
    }
}