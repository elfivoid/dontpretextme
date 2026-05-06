class GameScene extends Phaser.Scene {

    constructor ()
    {
        super('GameScene');
    }
     preload ()
    {
        this.load.image('zones', 'assets/images/zones.png');
    }

     create ()
    {           
        const {width, height} = config.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);


    // Keyboard input for fullscreen with f11
        this.input.keyboard.on('keydown-f11', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }

     update ()
    {}
}
