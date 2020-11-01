var database ;
var gameState = 0;
var playerCount = 0 ;
var form,game,player,allPlayers,rank;
var car1,car2,car3,car4,cars;
var c1i,c2i,c3i,c4i,tracki,groundi;
function preload(){
c1i=loadImage("images/car1.png")
c2i=loadImage("images/car2.png")
c3i=loadImage("images/car3.png")
c4i=loadImage("images/car4.png")
tracki=loadImage("images/track.jpg")
groundi=loadImage('images/ground.png')

}
function setup(){
createCanvas(displayWidth-120,displayHeight-200)
database= firebase.database()
game = new Game();
game.getState();
game.start();
}
function draw(){
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}
if(gameState===2){
   stroke("black")
   text(player.name+  ":"  +player.rank,displayWidth/2-75,-2850)
   clear();
   console.log(allPlayers)
}

}
                             