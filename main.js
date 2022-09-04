var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var isClicking = false;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('ground', 'assets/platform.png');
}

function create() {
    this.input.on('gameobjectdown', onObjectClicked);
}

function onObjectClicked() {
    console.log('x');

    return false;
}


function update() {

    if (!this.input.activePointer.isDown && isClicking == true) {
        var pos = this.input.activePointer.position;
        this.add.image(pos.x, pos.y, 'ground').setOrigin(0, 0).setInteractive();
        isClicking = false;
    } else if (this.input.activePointer.isDown && isClicking == false) {
        isClicking = true;
    }

}