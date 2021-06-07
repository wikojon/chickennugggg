function setup()
{
canvas = createCanvas(300,300) //this is the height and width of canvas
canvas.center()  //this will make the canvas ti the center
video = createCapture(VIDEO) //this will create a video capture
video.hide() //this will hide the default camera
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
}

function modelLoaded(){
    console.log('model Loaded!') //this will display in the console
}
function draw()
{
    image(video, 0, 0, 300, 300);//these are the settings for the video capture
    classifier.classify(video, gotResults);
}

function gotResults(error, results)
{
    if(error)       //this will run if its a error
    {
        console.error(error);
    }
    else   //this will run if its no error
    {
console.log(results)
document.getElementById("result_object").innerHTML = results[0].label;
document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}