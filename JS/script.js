var canvas,
    ctx;

// Deklarera ett fält med krigare
var warriors = [
    new Warrior("Glenn", "rgba(255, 0, 0, 0.5)", 66, 0, 0),
    new Warrior("Rupert", "rgba(0, 0, 255, 0.5)", 66, 2, 5),
    new Warrior("Ada", "rgba(255, 255, 0, 0.5)", 66, 7, 5)
];

function start() {

    // Tilldela variabler för canvas.
    canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");



    window.setInterval(update, 20);
}

function update() {
    //Sudda
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Skapa rutmönster
    ctx.fillStyle = "black";
    for (var i = 1; i <= 7; i++) {
        ctx.fillRect(100 * i, 0, 1, 600);
    }
    for (var i = 1; i <= 5; i++) {
        ctx.fillRect(0, 100 * i, 800, 1);
    }

    // Måla ut krigare
    for (var i = 0; i < warriors.length; i++) {

        warriors[i].render();

    }
}

function keyDown(e) {

    console.log(e.keyCode);
    //Vänster
    if (e.keyCode == 37) {
        warriors[0].xPos = warriors[0].xPos - 1;
    }

    //Höger
    if (e.keyCode == 39) {
        warriors[0].xPos = warriors[0].xPos + 1;
    }

    //Ner
    if (e.keyCode == 40) {
        warriors[0].yPos = warriors[0].yPos + 1;
    }

    //Upp
    if (e.keyCode == 38) {
        warriors[0].yPos = warriors[0].yPos - 1;
    }

    //Space
    if (e.keyCode == 32) {

        warriors[0].attack(warriors[1]);
    }
}