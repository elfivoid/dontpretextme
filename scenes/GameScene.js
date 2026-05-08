class GameScene extends Phaser.Scene {

   
    constructor ()
    {
        super('GameScene');
        this.ticketIndex = 0;
        this.scoreSecurity = 100;
        this.scoreSatisfaction = 50;
    }
     preload ()
    {
        this.load.image('zones', 'assets/images/zones.png');
    }

     create ()
    {           
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);
//Placeholders
        // office desk
        this.add.rectangle(width / 2, height, width, height * 0.4, 0x808080);
        //screen
        this.monitor = this.add.rectangle(width / 2, height / 2 - 50, 800, 500, 0xffffff);
        this.monitor.setStrokeStyle(10, 0x333333);
        //ticket
        this.ticketText = this.add.text(width / 2, height / 2 - 50, '', {
            fontSize: '24px',
            fill: '#000',
            wordWrap: { width: 700 },
            align: 'center'
        }).setOrigin(0.5);

    }

     update ()
    {}
}
