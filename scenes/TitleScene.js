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
        this.add.image(width/2, height/2, 'titlescene').setDisplaySize(width, height);
        //Camera FadeOut
        /* this.add.image(width/2, height/2, 'titlescene');
        this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        this.add.image(width/2, height/2, 'titlescene');
        camera.fadeOut(2000, 255);
        }, this); */

    // Keyboard input for fullscreen with f11
        this.input.keyboard.on('keydown-F11', () => {
        //global FullscreenToggle accross all Scenes   
            event.preventDefault();
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
        this.input.keyboard.on('keydown', (event) => {
        if (event.key === 'F11') {return;}//exclude F11
            this.input.keyboard.off('keydown'); //disable button smashing
            this.cameras.main.fadeOut(500, 0 , 0, 0); //fade out to black in 500ms
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('MenuScene');
            });
        });
    }

     update ()
    {}
}
