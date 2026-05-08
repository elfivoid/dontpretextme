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

        
        
        // ticket shuffle 
   for (let i = 0; i < 4; i++)
        {
            const ticket = this.add.rectangle(width / 4, height / 4 - 50, 800, 500, 0xfff234ff, frames[i]);
            ticket.setStrokeStyle(10, 0x333333);

            ticket.setInteractive({ draggable: true });
        }

        this.input.on('dragstart', function (pointer, gameObject) {

            //  This will bring the selected gameObject to the top of the list
            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
    
   
    }

     update ()
    {}
}
