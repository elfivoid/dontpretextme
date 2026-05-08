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
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);



    }

     update ()
    {}
}
