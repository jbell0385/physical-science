
var canvas;
var labImage;


function preload(){
    labImage = loadImage('/images/lab-equipment.png');
}

function setup(){
    canvas = createCanvas(900, 675);
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
}

function mouseClicked(){

    //bunsen burner
    if(mouseX>50 && mouseX<140 && mouseY>25 && mouseY<195){
        activateModal('bunsen-burner');
    }
}

function activateModal(item){
    $("#"+item).modal('toggle');
}
    