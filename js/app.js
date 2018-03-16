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
                if (confirm('You Defeated the Monster! New Game?')) {
                    this.startNewGame();
                } else {
                    this.newGame = true;
                    this.playerHealth = 0;
                    this.monsterHealth = 0;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You were Defeated by the Monster! New Game?')) {
                    this.startNewGame();
                } else {
                    this.newGame = true;
                    this.playerHealth = 0;
                    this.monsterHealth = 0;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function () {
            // Deal damage to the Player
            this.playerHealth -= this.calculateDamage(5, 12);
            // Check if the Monster has defeated You
            this.checkWinner(); //Doesn't need a return call after because there is no more ocde in the function
        },
        attack: function () {
            // Deal damage to the Monster
            this.monsterHealth -= this.calculateDamage(3, 10);
            // Check if the Monster has been defeated
            if (this.checkWinner()) {
                return; //Stops the game if there is a winner at this point
            }

            this.monsterAttack();
        },
        specialAttack: function () {
            // Deal damage to the Monster
            this.monsterHealth -= this.calculateDamage(10, 20);
            // Check if the Monster has been defeated
            if (this.checkWinner()) {
                return; //Stops the game if there is a winner at this point
            }

            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        endGame: function (event) {
            this.playerHealth = 0;
            this.monsterHealth = 0;
            setTimeout(function () {
                alert("You have given up and ended the game!");
            }, 500)
            this.newGame = true;
        }
    }
});