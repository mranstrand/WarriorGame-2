function Warrior(name, team, dmg, startX, startY) {

    //Deklarera egenskaper
    this.name = name;
    this.dmg = dmg;
    this.hp = 100;
    this.xPos = startX;
    this.yPos = startY;
    this.team = team;

    // Definiera metoder
    this.hurt = function (damage) {
        this.hp = this.hp - damage;
        console.log(this.name + "skadar sig. Hen blöder lite och får ont. Hen förlorar " + damage + " hp och har nu " + this.hp);
    }

    this.attack = function (opponent) {
        console.log(this.name + "attackerar " + opponent.name + " med ett vildsint skrik!")
        opponent.hurt(this.dmg);

    }

    this.render = function () {

        //Måla ut krigare
        ctx.fillStyle = this.team;
        ctx.fillRect(this.xPos * 100, this.yPos * 100, 100, 100);

    }

    console.log("En krigare är född! Han kallas " + this.name + ". Hen är stark, mycket stark! Hen har " + this.dmg + " i styrka. ");

}