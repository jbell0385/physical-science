
var canvas;
var labImage;
var modalActive = false;
var modalDeactivated = false;

var equip = [
    {name:'bunsen-burner', xl:5, xr:100, yt:4, yb:172},
    {name:'ring-stand', xl:116, xr:213, yt:4, yb:220},
    {name:'wash-bottle', xl:240, xr:310, yt:43, yb:203},
    {name:'pipe-stem-triangle', xl:330, xr:460, yt:7, yb:100},
    {name:'evaporating-dish', xl:500, xr:622, yt:15, yb:98},
    {name:'test-tube', xl:668, xr:753, yt:4, yb:140},
    {name:'beaker', xl:800, xr:900, yt:4, yb:130},
    {name:'utility-clamp', xl:380, xr:554, yt:125, yb:192},
    {name:'mortar-pestle', xl:586, xr:704, yt:121, yb:235},
    {name:'crucible', xl:753, xr:873, yt:158, yb:256},
    {name:'wire-gauze', xl:10, xr:144, yt:265, yb:363},
    {name:'iron-ring', xl:225, xr:300, yt:214, yb:310},
    {name:'rubber-stopper', xl:319, xr:423, yt:272, yb:363},
    {name:'corks', xl:467, xr:579, yt:211, yb:296},
    {name:'watch-glass', xl:612, xr:758, yt:284, yb:320},
    {name:'safety-goggles', xl:163, xr:298, yt:328, yb:402},
    {name:'test-tube-holder', xl:385, xr:501, yt:322, yb:448},
    {name:'erlenmeyer-flask', xl:777, xr:890, yt:284, yb:480},
    {name:'buret', xl:7, xr:69, yt:388, yb:670},
    {name:'pipet', xl:102, xr:119, yt:385, yb:669},
    {name:'thermometer', xl:151, xr:170, yt:427, yb:668},
    {name:'graduated-cylinder', xl:205, xr:246, yt:432, yb:665},
    {name:'tongs', xl:273, xr:361, yt:440, yb:565},
    {name:'scoopula', xl:389, xr:526, yt:422, yb:508},
    {name:'spatula', xl:407, xr:541, yt:494, yb:588},
    {name:'micro-pipets', xl:394, xr:531, yt:596, yb:654},
    {name:'funnel', xl:563, xr:637, yt:566, yb:668},
    {name:'dropper', xl:642, xr:705, yt:526, yb:622},
    {name:'forceps', xl:567, xr:749, yt:413, yb:448},
    {name:'file', xl:570, xr:757, yt:474, yb:503},
    {name:'test-tube-rack', xl:728, xr:895, yt:539, yb:647},
    {name:'wire-brush', xl:553, xr:748, yt:352, yb:376}

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
        if(!modalActive){
            if(mouseX>item.xl && mouseX<item.xr && mouseY>item.yt && mouseY<item.yb){
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