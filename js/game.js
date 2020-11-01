class Game {
    constructor(){


    }
    getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val();
        }
    )
    }
    update(State){
    database.ref("/").update({
        gameState:State
    })    
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
            car1 = createSprite(300,200)
            car1.addImage(c1i)
            car2 = createSprite(500,200)
            car2.addImage(c2i)
            car3 = createSprite(700,200)
            car3.addImage(c3i)
            car4 = createSprite(900,200)
            car4.addImage(c4i)
            cars= [car1,car2,car3,car4]
        }
    }
    play(){
    form.hide();
   //player.getRank();
    Player. getPlayerInfo();
    if(allPlayers!==undefined){
        background(groundi);
        image(tracki,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index = 0 ;
        var x = 190 
        var y = y ;
            for(var plr in allPlayers){
            y = displayHeight - 275 - allPlayers[plr].distance
            x = x+200;
            cars[index].x = x ;
            cars[index].y = y ;
            if(plr==="player"+player.index)
            {cars[index].shapeColor=("red")
            camera.position.x= displayWidth/2;
            camera.position.y= y;
            noFill();
            stroke("red")
            strokeWeight(6)
            ellipse(x,y,100,150)
          
            }
            else
            {cars[index].shapeColor="blue"}
            index = index + 1
            }
            
 drawSprites();
    }
    if(keyDown("UP_ARROW")){
    player.distance = player.distance + 50 ;
    player.update();
    }
 //console.log(allPlayers);
  if(player.distance>3400){
  gameState=2;
  player.rank = player.rank+1
  //player.updateRank(player.rank)
  player.update();
  
  }
    }
   
}
