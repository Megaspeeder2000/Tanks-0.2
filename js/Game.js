class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(950,500);
    player1.addImage(greenTank_img);
    
    player2 = createSprite(50,500);
    player2.addImage(grayTank_img);
    players=[player1,player2];
            
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                //image(back_img, 0, 0, 1000, 800);
                 var xAxis =100;
                 var yAxis =200;
                 var index =0;
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     xAxis=500-allPlayers[plr].xAxis
                     yAxis=500-allPlayers[plr].yAxis
                     players[plr].xAxis = xAxis;
                     players[plr].yAxis = yAxis;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,xAxis-25,yAxis+25);

                         
                     }
                     textSize(25);
                     fill("white");
                    text("player1: "+ allPlayers.player1.score,950,50)
                    text("player2: "+ allPlayers.player2.score,50,50)
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.xAxis -= 10
                    player.yAxis = player.yAxis
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.xAxis += 10
                    player.yAxis = player.yAxis
                    player.update();
                }
                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.yAxis += 10
                    player.xAxis = player.xAxis
                    player.update();
               }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.yAxis -= 10
                    player.xAxis = player.xAxis
                    player.update();
                 }
        
         drawSprites();

    }

    end(){
       console.log("Game Ended");
    }
}