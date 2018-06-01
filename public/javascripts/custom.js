
var canvas;
var labImage;

var bunsenBurner = false;

function preload(){
    labImage = loadImage('/images/lab-equipment.png');
}

function setup(){
    canvas = createCanvas(800, 1000);
    canvas.parent('canvas-container');
}

function draw(){
    background(255);
    image(labImage,0,0);
    
    //bunsen burner
    if(mouseX>50 && mouseX<140 && mouseY>25 && mouseY<195){
        cursor(HAND);
    }else{
        cursor(ARROW);
    }
    if(bunsenBurner){
        var x = 140;
        var y = 25;
        var w = 100;
        var h = 100;
        push()
        noStroke();
        fill("rgba(0,0,0,0.5)");        
        rect(x+3, y+3, w, h, 5);
        filter(BLUR,1);
        fill("#fff");
        stroke("#373d3f");
        rect(140,25,100,100,5);
        noStroke();
        fill("#000")
        textSize(32);
        text('Number: x-coordinate of text',x+5,y+15, 150,150);
        pop()
    }
}

function mouseClicked(){

    //bunsen burner
    if(mouseX>50 && mouseX<140 && mouseY>25 && mouseY<195){
        if(bunsenBurner){
            bunsenBurner = false;
        }else{
            bunsenBurner = true;
        }
        return false;
    }
}
