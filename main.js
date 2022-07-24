song1="";
song2="";
scoreleftwrift=0;
song1_status="";
song2_status="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
 
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        scoreleftwrift=results[0].pose.keypoints[9].score;
        console.log("scorelleftwrift"+scoreleftwrift);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        console.log("leftwristx="+leftwristx+"leftwristy="+leftwristy);
        console.log("rightwristx="+rightwristx+"rightwristy="+rightwristy);
    }
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
     
    if(scoreLeftwrist>0.2){
        circle(leftwristx,leftwristy,20);
        if(scoreLeftwrist>0.2){
            circle(leftwristx,leftwristy,20);
            song2.stop();
            if(song1_status==false){
                song1.play();
                document.getElementById("song").innerHTML="playing-harry potter";
                
            }
        }
}}

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function play(){
    
}