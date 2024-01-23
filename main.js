nosex=0
nosey=0
Lwristx=0
Rwristx=0
difference=0
function preload()
{

}

function setup()
{
 canvas=createCanvas(550,500)
 camera=createCapture(VIDEO)
camera.position(60,170)
canvas.position(920,170)
posenet=ml5.poseNet(camera,modelLoaded)
posenet.on("pose",gotResults)
}



function modelLoaded()
{
    console.log("success")
}

function gotResults(result)
{
if (result.length>0)
{
console.log(result)
nosex=result[0].pose.nose.x
nosey=result[0].pose.nose.y
Lwristx=result[0].pose.leftWrist.x
Rwristx=result[0].pose.rightWrist.x
difference=Lwristx-Rwristx
}
}

function draw()
{
    background("chocolate")
fill("cyan")
text("Font",nosex-difference/2,nosey-difference/2)
textSize(difference)
} 