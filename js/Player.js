class Player {
    constructor() {
        this.index = null;
        this.xCorr = 0;
        this.yCorr = 0;
        this.name = null;
        this.score = 0;
        this.bullet = 0;
        this.distance=0;
        this.xAxis = 0
        this.yAxis = 0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
           // xCorr:this.xCorr,
            //yCorr:this.yCorr,
            //score:this.score,
            //bullet:this.bullet,
            xAxis:this.xAxis,
            yAxis:this.yAxis
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
