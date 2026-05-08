class MenuScene extends Phaser.Scene {

    constructor ()
    {
        super('MenuScene');
    }
     preload ()
    {
        this.load.image('menuscene', 'assets/images/mainmenu.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);

    }

     update ()
    {}
}