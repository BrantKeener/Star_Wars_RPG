
let characters = [
    {
    picture : '<img id="character1" src="assets/images/Luke_Skywalker.png" alt="Luke Skywalker"/>',
    name : "Luke Skywalker",
    characterID : "character1",
    hitPoints : Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/x_wing_background.jpg")',
    startSound: "assets/sounds/Dark side.mp3",
    defeatSound: "assets/sounds/luke_impossible.wav",
    },
    {
    picture : '<img id="character2" src="assets/images/amidala.jpg" alt="Padme Amidala"/>',
    name : "Padme Amidala",
    characterID : "character2",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/valerii_sendetskyi_starship.jpg")',
    startSound: "assets/sounds/amidala_start.wav",
    defeatSound: "assets/sounds/amidaladying.wav",
    },
    {
    picture : '<img id="character3" src="assets/images/Obi_Wan_Kenobi.jpg" alt="Obi-Wan Kenobi"/>',
    name : "Obi-Wan Kenobi",
    characterID : "character3",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/obi_wan_background.jpg")',
    startSound: "assets/sounds/Great disturbance.mp3",
    defeatSound: "assets/sounds/More powerful.mp3",
    },
    {
    picture : '<img id="character4" src="assets/images/Chewbacca.jpg" alt="Chewbacca"/>',
    name : "Chewbacca",
    characterID : "character4",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/millenium_falcon.jpg")',
    startSound: "assets/sounds/chewie_chatting.wav",
    defeatSound: "assets/sounds/chewie_roar.wav",
    },
    {
    picture : '<img id="character5" src = "assets/images/Darth_vader.jpg" alt="Darth Vader"/>',
    name : "Darth Vader",
    characterID : "character5",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/toY6rLU_death_star.jpg")',
    startSound: "assets/sounds/dark_side_vader.wav",
    defeatSound: "assets/sounds/darth_powerful.wav",
    },
    {
    picture : '<img id="character6" src = "assets/images/Darth_Sidious.jpg" alt="Darth Sidious"/>',
    name : "Darth Sidious",
    characterID : "character6",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/throne_room.jpg")',
    startSound: "assets/sounds/must_be_done.mp3",
    defeatSound: "assets/sounds/No..no..no...mp3",
    },
    {
    picture : '<img id="character7" src="assets/images/stormtrooper.jpg" alt="Storm Trooper"/>',
    name : "Storm Trooper",
    characterID : "character7",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/stormtrooper_background.jpg")',
    startSound: "assets/sounds/Its them.mp3",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    },
    {
    picture : '<img id="character8" src="assets/images/grand_moff_tarkin.jpg" alt="Grand Moff Tarkin"/>',
    name : "Grand Moff Tarkin",
    characterID : "character8",
    hitPoints: Math.floor((Math.random() * 200) + 100),
    attackPower : Math.floor(Math.random() * 5),
    counterAttack : Math.floor((Math.random() * 10) + 1),
    background: 'url("assets/images/19418.jpg")',
    startSound: "assets/sounds/tarkin_power.wav",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    }
];

let weapons = {
    lightsaber : '<img id="lightsaber" class="weapon" src="assets/images/lightsaber.jpg" alt="Lightsaber"/>',
    blaster : '<img id="blaster" class="weapon" src="assets/images/blaster.png" alt="Blaster"/>',
}
let playerSelected = false;
let defenderSelected = false;
let player = "";
let defender = "";
let playerAttack = false;
let bGMRunning = false;
let backgroundMusic = new Audio("assets/sounds/The Light Crusaders.mp3");
let defeatedCharactersCount = "0";

// Start with document ready

$(document).ready(function() {

    function startMessage(){
        $("<div class='start_message'><p>Star Wars Duel</p><p>First: Choose a character from the character portraits</p><p>Second: Choose a defender from the list of defenders</p><p>Third: Click on your weapon to attack</p><p>As you defeat defenders, you will select the next defender from the list</p><p>Press <button class='start'>start</button> to begin </p></div>").appendTo(".content");
        $(".start").click(gameStart);
    };

    function restart() {
        playerSelected = false;
        defenderSelected = false;
        player = "";
        defender = "";
        playerAttack = false;
        bGMRunning = false;
        defeatedCharactersCount = "0";
        backgroundMusic.pause();
        $(".background_image").css("background-image", 'url("assets/images/opening_background.jpg")')
        $(".message").remove();
        $("#playerHP").remove();
        $(".selection").remove();
        $(".weapon").remove();
        for(let i = 1; i < 9; i++) {
            $("<div class='selection'></div>").attr("id", "character" + i).appendTo(".character_selection");
        }
        gameStart();
    };
    
    startMessage();

    alert("Song: The Light Crusaders by Ivan Torrent will play as soon as you click on a character.")
    
    function gameStart() {
        $(".start_message").remove();
        // Places character images in character select area. 
        for(let i = 0; i < characters.length; i++) {
            let picture = characters[i].picture;
            let characterID = $("#character" + (i + 1));
            characterID.append(picture);
        };
        
        // Select character based on which image you click
        $(".selection").click(function(event) {
            if(bGMRunning === false) {
                backgroundMusic.play();
                bGMRunning = true;
            };     
            if(playerSelected === true) {
                if(defenderSelected === false){
                    defenderEvaluate(event);
                    };
                };
            if(playerSelected === false) {
                let characterChoice = event.target.id;
                playerSelected = true;
                switch(characterChoice) {
                    case "character1" :
                        player = characters[0].characterID;
                        characterDialoguePlay(characters[0].startSound)
                        playerMove("#character1")
                        charSelectClear(characterChoice, 1)
                        backgroundSet(0)
                        lightSaber()
                        break;
                    case "character2" :
                        player = characters[1].characterID;
                        characterDialoguePlay(characters[1].startSound)
                        playerMove("#character2")
                        charSelectClear(characterChoice, 2)
                        backgroundSet(1)
                        blasterWeapon()
                        break;
                    case "character3" :
                        player = characters[2].characterID;
                        characterDialoguePlay(characters[2].startSound)
                        playerMove("#character3")
                        charSelectClear(characterChoice, 3)
                        backgroundSet(2)
                        lightSaber()
                        break;
                    case "character4" :
                        player = characters[3].characterID;
                        characterDialoguePlay(characters[3].startSound)
                        playerMove("#character4")
                        charSelectClear(characterChoice, 4)
                        backgroundSet(3)
                        blasterWeapon()
                        break;
                    case "character5" :
                        player = characters[4].characterID;
                        characterDialoguePlay(characters[4].startSound)
                        playerMove("#character5")
                        charSelectClear(characterChoice, 5)
                        backgroundSet(4)
                        lightSaber()
                        break;
                    case "character6" :
                        player = characters[5].characterID;
                        characterDialoguePlay(characters[5].startSound)
                        playerMove("#character6")
                        charSelectClear(characterChoice, 6)
                        backgroundSet(5)
                        lightSaber()
                        break;
                    case "character7" :
                        player = characters[6].characterID;
                        characterDialoguePlay(characters[6].startSound)
                        playerMove("#character7")
                        charSelectClear(characterChoice, 7)
                        backgroundSet(6)
                        blasterWeapon()
                        break;
                    case "character8" :
                        player = characters[7].characterID;
                        characterDialoguePlay(characters[7].startSound)
                        playerMove("#character8")
                        charSelectClear(characterChoice, 8)
                        backgroundSet(7)
                        blasterWeapon()
                        break;
                    };
                };
        });

        // Evaluate whether defender choice is also player choice

        function defenderEvaluate(event) {
            if(event.target.id !== player) {
                defenderSelect(event);
            };
        };

        // Defender selected that is not player

        function defenderSelect(event) {
            defenderSelected = true;
            defender = event.target.id;
            if(defender !== player) {
                $("#" + defender).appendTo(".defending_character");
                for(i = 0; i < characters.length; i++) {
                    if(characters[i].characterID === defender){
                        $("#" + defender).append("<div id='defenderHP' class='hp'></div>");
                        $("#defenderHP").text(characters[i].hitPoints);
                        characterDialoguePlay(characters[i].startSound);
                    };
                };
            };
        };

        // Move selected character to player character area

        function playerMove(char) {
            $(char).appendTo(".player_character");
            $(char).append('<div id="playerHP" class="hp"></div>')
            for(i = 0; i < characters.length; i++) {
                if(char === "#" + characters[i].characterID) {
                    $("#playerHP").text(characters[i].hitPoints);
                };
            };
        };

        // Clear out all non-chosen characters from the selection menu

        function charSelectClear(choice, num) {
            if(num < 5) {
                for(let i = 1; i < 5; i++) {
                    if("character" + i !== choice) {
                        $("#character" + i).remove();
                    };
                };
                for(let i = 5; i < 10; i++) {
                    $("#character" + i).appendTo(".remaining_defenders");
                };
            };

            if(num >= 5) {
                for(let i = 5; i < 10; i++){
                    if("character" + i !== choice) {
                        $("#character" + i).remove();
                    };
                };
                for(let i = 1; i < 5; i++) {
                    $("#character" + i).appendTo(".remaining_defenders");
                };
            };
        };

        // Add lightsaber for jedi/sith and blaster for all others

        function lightSaber() {
            $(".character_selection").append(weapons.lightsaber);
            attackClick();
        };

        function blasterWeapon() {
            $(".character_selection").append(weapons.blaster);
            attackClick();
        };
        // Set background for selected character

        function backgroundSet(num) {
            $(".background_image").css("background-image", characters[num].background);
        };

        // Attack click handler
        function attackClick() {
            $(".weapon").click(function() {
                if(defenderSelected === true) {
                    enemyDamaged();
                };
            });
        };

        // Attack hurts enemy
        function enemyDamaged() {
            let enemyHP = $("#defenderHP").text();
            if(playerAttack === false) {
                for(let i = 0; i < characters.length; i++) {
                    if(characters[i].characterID === player) {
                        playerAttack = characters[i].attackPower;
                    };
                };
            };
            enemyHP -= playerAttack;
            $("#defenderHP").text(enemyHP);
            playerAttack += Math.floor((Math.random() * 2) + 1);
            enemyHPCheck();
            performCounterAttack();
        };

        // Counter attack player character
        function performCounterAttack() {
            let playerHP = $("#playerHP").text();
            enemyAttack = "";
            for(let i = 0; i < characters.length; i++) {
                if(characters[i].characterID === defender) {
                    cAttack = characters[i].counterAttack;
                };
            };
            playerHP -= cAttack;
            $("#playerHP").text(playerHP);
            playerHPCheck();
        };

        // Player character death
        function playerHPCheck() {
            if($("#playerHP").text() <= 0) {
                for(let i = 0; i < characters.length; i++) {
                    if(characters[i].characterID === player) {
                        characterDialoguePlay(characters[i].defeatSound);
                    };
                };
                playerLoss();
            };
        };

        function enemyHPCheck() {
            if($("#defenderHP").text() <= 0) {
                for(let i = 0; i < characters.length; i++) {
                    if(characters[i].characterID === defender) {
                        characterDialoguePlay(characters[i].defeatSound);
                    };
                };
                $("#" + defender).appendTo(".defeated_defenders");
                $("#" + defender).removeAttr("id", "class");
                $("#defenderHP").text("Defeated!");
                $("#defenderHP").attr("class", "defeated_tag");
                $("#defenderHP").removeAttr("id");
                defenderSelected = false;
                defeatedCharactersCount++;
                if(defeatedCharactersCount === 4) {
                    playerWins();
                };
            };
        };

        function characterDialoguePlay(def){
            let dialogueSound = new Audio(def);
            backgroundMusic.volume = 0.4;
            dialogueSound.play();
            setTimeout(bgmVolumeUp, 1000);
        };

        function bgmVolumeUp(){
            backgroundMusic.volume = 1;
        };

        function playerWins(){
            $("<div class='message'><p>You win!</p><button class='start'>restart</button></div>").appendTo(".content");
            $(".start").click(restart);
        };

        function playerLoss() {
            $("<div class='message'><p>You've lost!</p><button class='start'>restart</button></div>").appendTo(".content");
            $(".start").click(restart);
        };
    };
});



