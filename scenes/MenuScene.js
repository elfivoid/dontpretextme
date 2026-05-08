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
        this.add.image(width/2, height/2, 'menuscene').setDisplaySize(width, height);

        //Placeholder Rectangle Button
        let startbtn = this.add.rectangle(width/2, height/2,200, 200, 0xff0000);
        startbtn.setInteractive();
        startbtn.on('pointerdown', () => {
        this.scene.start('GameScene');
        });
        let btntext = this.add.text (width/2, height/2, 'NEUES SPIEL', {
        fontSize: '16px',
        fontFamily: 'Calibri',
        color: '#ffffff',
        fontStyle: 'bold'
        });

    }

     update ()
    {}
}