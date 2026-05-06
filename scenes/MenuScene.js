class MenuScene extends Phaser.Scene {

    constructor ()
    {
        super('MenuScene');
    }
     preload ()
    {
        this.load.image('zones', 'assets/images/zones1080.png');
    }

     create ()
    {           
        const {width, height} = config.scale;
        this.add.image(width/2, height/2, 'zones');
    }

     update ()
    {}
}