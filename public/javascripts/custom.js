
var canvas;
var labImage;
var modalActive = false;
var modalDeactivated = false;

var equip = [
    {name:'bunsen-burner',title:'Bunsen Burner', xl:5, xr:100, yt:4, yb:172},
    {name:'ring-stand', title:"Ring Stand", xl:116, xr:213, yt:4, yb:220},
    {name:'wash-bottle', title:"Wash Bottle", xl:240, xr:310, yt:43, yb:203},
    {name:'pipe-stem-triangle', title:"Pipe Stem Triangle", xl:330, xr:460, yt:7, yb:100},
    {name:'evaporating-dish', title:"Evaporating Dish", xl:500, xr:622, yt:15, yb:98},
    {name:'test-tube', title:"Test Tube", xl:668, xr:753, yt:4, yb:140},
    {name:'beaker', title:"Beaker", xl:800, xr:900, yt:4, yb:130},
    {name:'utility-clamp', title:"Utility Clamp", xl:380, xr:554, yt:125, yb:192},
    {name:'mortar-pestle', title:"Mortar Pestle", xl:586, xr:704, yt:121, yb:235},
    {name:'crucible', title:"Crucible", xl:753, xr:873, yt:158, yb:256},
    {name:'wire-gauze', title:"Wire Gauze", xl:10, xr:144, yt:265, yb:363},
    {name:'iron-ring', title:"Iron Ring", xl:225, xr:300, yt:214, yb:310},
    {name:'rubber-stopper', title:"Rubber Stopper", xl:319, xr:423, yt:272, yb:363},
    {name:'corks', title:"Corks", xl:467, xr:579, yt:211, yb:296},
    {name:'watch-glass', title:"Watch Glass", xl:612, xr:758, yt:284, yb:320},
    {name:'safety-goggles', title:"Safety Goggles", xl:163, xr:298, yt:328, yb:402},
    {name:'test-tube-holder', title:"Test Tube Holder", xl:385, xr:501, yt:322, yb:448},
    {name:'erlenmeyer-flask', title:"Erlenmeyer Flask", xl:777, xr:890, yt:284, yb:480},
    {name:'buret', title:"Buret", xl:7, xr:69, yt:388, yb:670},
    {name:'pipet', title:"Pipet", xl:102, xr:119, yt:385, yb:669},
    {name:'thermometer', title:"Thermo - meter", xl:151, xr:170, yt:427, yb:668},
    {name:'graduated-cylinder', title:"Graduated Cylinder", xl:205, xr:246, yt:432, yb:665},
    {name:'tongs', title:"Tongs", xl:273, xr:361, yt:440, yb:565},
    {name:'scoopula', title:"Scoopula", xl:389, xr:526, yt:422, yb:508},
    {name:'spatula', title:"Spatula", xl:407, xr:541, yt:494, yb:588},
    {name:'micro-pipets', title:"Micro Pipets", xl:394, xr:531, yt:596, yb:654},
    {name:'funnel', title:"Funnel", xl:563, xr:637, yt:566, yb:668},
    {name:'dropper', title:"Dropper", xl:642, xr:705, yt:526, yb:622},
    {name:'forceps', title:"Forceps", xl:567, xr:749, yt:413, yb:448},
    {name:'file', title:"File", xl:570, xr:757, yt:474, yb:503},
    {name:'test-tube-rack', title:"Test Tube Rack", xl:728, xr:895, yt:539, yb:647},
    {name:'wire-brush', title:"Wire Brush", xl:553, xr:748, yt:352, yb:376}

]

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
    
    equip.some((item)=>{
        // check to see if modal active. If true, then don't change cursor
        if(!modalActive){
            if(mouseX>item.xl && mouseX<item.xr && mouseY>item.yt && mouseY<item.yb){
                push()

                rectMode(CENTER);
                noStroke();
                fill('rgba(0,0,0,0.65)');
                rect((item.xl+item.xr)/2, (item.yt+item.yb)/2, 120, 100, 5, 5, 5, 5);

                fill(255,255,255);
                textSize(20);
                textAlign(CENTER,CENTER);
                text(item.title, (item.xl+item.xr)/2, (item.yt+item.yb)/2, 100,100);

                pop()

                cursor(HAND);
                return true;
            }else{
                cursor(ARROW);
            }
        }  
    })
}

function mouseClicked(){

    if(!modalDeactivated){
        if(!modalActive){
            equip.forEach((item)=>{
                if(mouseX>item.xl && mouseX<item.xr && mouseY>item.yt && mouseY<item.yb){            
                    activateModal(item.name);
                }
            })
        }       
    }else{
        modalDeactivated = false;
    }
}

function activateModal(item){
    modalActive = true;
    $("#"+item).modal('toggle');
}

$('.modal').on('hide.bs.modal',function(e){
    modalActive = false;
    modalDeactivated = true;
})