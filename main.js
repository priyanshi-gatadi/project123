function setup(){
    video=createCapture(VIDEO)
    video.size(500,500)
    video.position(100,100)
    
    canvas=createCanvas(550,550)
    canvas.position(700,120)
    
    poseNet=ml5.poseNet(video,modeloaded)
    poseNet.on('pose',gotResults)
    
    }
    function gotResults(results){
    if(results.length>0){console.log(results)}
    }
    
    function modeloaded(){
        console.log("modeloaded")
    }
    
    function draw(){
    background('#f294e6')
    }