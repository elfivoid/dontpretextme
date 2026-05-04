
/* Phaser Game Configuration */
var config = {
    type: Phaser.AUTO,
    
    /* Setup Scale Mode for automatic game resolution */
    scale: {
        //parent: divId,
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    /* Main Size 2k*/
            minWidth: 2560,
            minHeight: 1440,

    /* Minimum Size 420p*/
        min: {
            minWidth: 640,
            minHeight: 480,
        },

    /* Maximum Size 4k*/
        max: {
            maxWidth: 3840,
            maxHeight: 2160
        },
        zoom: 1, // size of the canvas = game size * zoom
    },
    autoRound: false
};

var game = new Phaser.Game(config);