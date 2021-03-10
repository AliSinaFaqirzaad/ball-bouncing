var canvas;
var music;
var block1 , block2, block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,800,30);
    block1.shapeColor = rgb(0,0,255);

    block2 = createSprite(800,580,800,30);
    block2.shapeColor = ("red");

    block3 = createSprite(400,50,3600,30);
    block3.shapeColor = ("pink");

    block4 = createSprite( 50,300.400,20);
    block4.shapeColor = ("green");



    //create box sprite and give velocity
    ball = createSprite(random(20,750),100, 40,40); 
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4; 
    ball.velocityY = 9;
}

function draw() {

    music.play();
    

    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites(); ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){ 
        ball.shapeColor = rgb(0,0,255); }

        if(block2.isTouching(ball) && ball.bounceOff(block2)){ 
            ball.shapeColor = ("red"); 
            ball.velocityx = 5;
            ball.velocityY = 3;
        }
    

    

        
if(block4.isTouching(ball) && ball.bounceOff(block4)){ 
            ball.shapeColor = ("purple");
            ball.velocityY = 0;
            ball.velocityX = 0;
            music.stop();
           
}
if(block3.isTouching(ball)){
ball.shapeColor = ("pink");
ball.velocityX = 20;
ball.velocityY = 20;


}


        drawSprites();
}
