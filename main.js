
/* Phaser Game Configuration */
var config = {
    type: Phaser.AUTO,
    
    /* Setup Scale Mode for automatic game resolution */
    scale: {
        //parent: divId,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        transparent: true,
    /* Main Size 2k*/
            width: 2560,
            height: 1440,
            zoom: 1,
    /* Minimum Size 420p*/
        min: {
            width: 640,
            height: 480,
        },

    /* Maximum Size 4k*/
        max: {
            width: 3840,
            height: 2160
        },
        zoom: 1, // size of the canvas = game size * zoom
    },
    autoRound: false,
    scene: [GameScene]
};

var game = new Phaser.Game(config);