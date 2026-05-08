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

            this.input.keyboard.off('keydown'); //disable button smashing
            this.cameras.main.fadeOut(500, 0 , 0, 0); //fade out to black in 500ms
            this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('GameScene');
            });
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