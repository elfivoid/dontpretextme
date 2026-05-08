class GameScene extends Phaser.Scene {

   
    constructor ()
    {
        super('GameScene');
        this.ticketIndex = 0;
        this.scoreSecurity = 100;
        this.scoreSatisfaction = 50;
    }
     preload ()
    {   //preload images and assets
        this.load.image('zones', 'assets/images/zones.png');
        //preload ticket data
        this.load.json('ticketData', 'data/tickets.json'); 
        this.load.json('employees', 'data/employees.json');
        this.load.json('levels', 'levels.json');
    }

     create ()
    {        


//set background to screen
        const {width, height} = this.scale;
        this.add.image(width/2, height/2, 'zones').setDisplaySize(width, height);
//Placeholders
        
        // office desk
        let officedesk = this.add.rectangle(width / 2, height, width, height * 0.4, 0x808080);
        
        //screen
        this.monitor = this.add.rectangle(width / 2, height / 2 - 50, 800, 500, 0xffffff);
        this.monitor.setStrokeStyle(10, 0x333333);

        
        
        // ticket shuffle 
   for (let i = 0; i < 4; i++)
        {
            const ticket = this.add.rectangle(width / 4, height / 4 - 50, 800, 500, 0xfff234ff);
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

        // creating a hidden zone for placing the tickets for compare
        this.add.zone(width / 4, height / 4 - 50, 800, 500, 0xfff234ff);

        //load tickets from json
        this.tickets = this.cache.json.get('ticketData');
        this.ticketIndex = 0;
        //surface to click for spawning tickets with json data
        let ticketSpawner = this.add.rectangle(960, 900, 200, 60,0x4488ff);
        ticketSpawner.setInteractive();
        ticketSpawner.on('pointerdown', () =>{
            this.showTicket(this.ticketIndex);
            this.ticketIndex++;
        });
    }

     update ()
    {}
}
