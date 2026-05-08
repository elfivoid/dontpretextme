class TitleScene extends Phaser.Scene {

    constructor ()
    {
        super('TitleScene');
    }
     preload ()
    {
        this.load.image('zones', 'assets/images/titlescene.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);


    // Keyboard input for fullscreen with f11
        this.input.keyboard.on('keydown-f11', () => {
        //global     
            event.preventDefault();
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
        this.input.keyboard.once('keydown', () => {
            console.log("Taste gedrückt, wechsle Szene...");
            this.scene.start('MenuScene');
        });
    }

     update ()
    {}
}
