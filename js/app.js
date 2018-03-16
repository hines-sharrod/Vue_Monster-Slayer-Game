new Vue({
    el: '#app',
    data: {
        playerHealth: 0,
        monsterHealth: 0,
        newGame: true,
    },
    methods: {
        startNewGame: function () {
            this.newGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWinner: function () {
            if (this.monsterHealth <= 0) {
                alert('You Defeated the Monster!');
                this.newGame = true;
                this.monsterHealth = 0;
                return;
            }
        },
        attack: function () {
            // Deal damage to the Monster
            this.monsterHealth -= this.calculateDamage(3, 10);

            // Check if the Monster has been defeated
            if (this.monsterHealth <= 0) {
                alert('You Defeated the Monster!');
                this.newGame = true;
                this.monsterHealth = 0;
                return;
            }

            // Deal damage to the Player
            this.playerHealth -= this.calculateDamage(5, 12);

            // Check if the Monster has defeated You
            if (this.playerHealth <= 0) {
                alert('You were Defeated by the Monster!');
                this.newGame = true;
                this.playerHealth = 0;
            }
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        endGame: function (event) {
            this.playerHealth = 0;
            this.monsterHealth = 0;
            setTimeout(function () {
                alert("You have given up and have ended the game!");
            }, 500)
            this.newGame = true;
        }
    }
});