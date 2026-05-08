
/* Phaser Game Configuration */
var config = {
    type: Phaser.AUTO,
    
    input: {
        keyboard: true,
    },
    /* Setup Scale Mode for automatic game resolution */
    scale: {
        //parent: divId,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        transparent: true,
    /* Main Size Full HD*/
            width: 1920,
            height: 1080,
            //zoom: 1,
    /* Minimum Size 420p*/
        min: {
            width: 640,
            height: 480,
        },

    /* Maximum Size 2k*/
        max: {
            width: 2560,
            height: 1440
        },
        zoom: 1, // size of the canvas = game size * zoom
    },
    autoRound: false,
    scene: [ TitleScene, MenuScene, GameScene, DebriefingScene]
};

var game = new Phaser.Game(config);
