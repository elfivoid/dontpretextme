class TitleScene extends Phaser.Scene {

    constructor ()
    {
        super('TitleScene');
    }
     preload ()
    {
        this.load.image('titlescene', 'assets/images/titlescene.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);


    // Keyboard input for fullscreen with f11
        this.input.keyboard.on('keydown-F11', () => {
        //global     
            event.preventDefault();
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
        this.input.keyboard.on('keydown', (event) => {
            if (event.code === 'F11') return; //exclude F11
            console.log("Taste gedrückt, wechsle Szene...");
            this.input.keyboard.off('keydown');
            this.scene.start('MenuScene');
        });
    }

     update ()
    {}
}
