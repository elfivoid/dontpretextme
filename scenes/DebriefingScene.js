class DebriefingScene extends Phaser.Scene {

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
        this.add.image(width/2, height/2, 'zones');
    }

     update ()
    {}
}