
let characters = [
    {
    picture : '<img id="character1" src="assets/images/Luke_Skywalker.png" alt="Luke Skywalker"/>',
    name : "Luke Skywalker",
    characterID : "character1",
    hitPoints : 1,
    attackPower : 1,
    counterAttack : 100,
    background: 'url("assets/images/x_wing_background.jpg")',
    startSound: "assets/sounds/luke_afraid.wav",
    defeatSound: "assets/sounds/luke_impossible.wav",
    },
    {
    picture : '<img id="character2" src="assets/images/amidala.jpg" alt="Padme Amidala"/>',
    name : "Padme Amidala",
    characterID : "character2",
    hitPoints: 2,
    attackPower : 2,
    counterAttack : 100,
    background: 'url("assets/images/valerii_sendetskyi_starship.jpg")',
    startSound: "assets/sounds/amidala_start.wav",
    defeatSound: "assets/sounds/amidaladying.wav",
    },
    {
    picture : '<img id="character3" src="assets/images/Obi_Wan_Kenobi.jpg" alt="Obi-Wan Kenobi"/>',
    name : "Obi-Wan Kenobi",
    characterID : "character3",
    hitPoints: 3,
    attackPower : 3,
    counterAttack : 100,
    background: 'url("assets/images/obi_wan_background.jpg")',
    startSound: "assets/sounds/Great disturbance.mp3",
    defeatSound: "assets/sounds/More powerful.mp3",
    },
    {
    picture : '<img id="character4" src="assets/images/Chewbacca.jpg" alt="Chewbacca"/>',
    name : "Chewbacca",
    characterID : "character4",
    hitPoints: 4,
    attackPower : 4,
    counterAttack : 100,
    background: 'url("assets/images/millenium_falcon.jpg")',
    startSound: "assets/sounds/chewie_chatting.wav",
    defeatSound: "assets/sounds/chewie_roar.wav",
    },
    {
    picture : '<img id="character5" src = "assets/images/Darth_vader.jpg" alt="Darth Vader"/>',
    name : "Darth Vader",
    characterID : "character5",
    hitPoints: 5,
    attackPower : 5,
    counterAttack : 100,
    background: 'url("assets/images/toY6rLU_death_star.jpg")',
    startSound: "assets/sounds/dark_side_vader.wav",
    defeatSound: "assets/sounds/darth_powerful.wav",
    },
    {
    picture : '<img id="character6" src = "assets/images/Darth_Sidious.jpg" alt="Darth Sidious"/>',
    name : "Darth Sidious",
    characterID : "character6",
    hitPoints: 6,
    attackPower : 6,
    counterAttack : 100,
    background: 'url("assets/images/throne_room.jpg")',
    startSound: "assets/sounds/forseen_sidious.wav",
    defeatSound: "assets/sounds/No..no..no...mp3",
    },
    {
    picture : '<img id="character7" src="assets/images/stormtrooper.jpg" alt="Storm Trooper"/>',
    name : "Storm Trooper",
    characterID : "character7",
    hitPoints: 7,
    attackPower : 7,
    counterAttack : 100,
    background: 'url("assets/images/stormtrooper_background.jpg")',
    startSound: "assets/sounds/Its them.mp3",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    },
    {
    picture : '<img id="character8" src="assets/images/grand_moff_tarkin.jpg" alt="Grand Moff Tarkin"/>',
    name : "Grand Moff Tarkin",
    characterID : "character8",
    hitPoints: 8,
    attackPower : 8,
    counterAttack : 100,
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
// Start with document ready

$(document).ready(function() {

    // Places character images in character select area. 
    for(let i = 0; i < characters.length; i++) {
    let picture = characters[i].picture;
    let characterID = $("#character" + (i + 1));
    characterID.append(picture);
    };
    
    // Select character based on which image you click
    $(".selection").click(function(event){
        if(playerSelected === true) {
            if(defenderSelected === false){
                defenderSelect(event);
                setTimeout(attackInstructions, 1000);
                };
                defenderSelected = true;
            };
        if(playerSelected === false) {
            let characterChoice = event.target.id;
            playerSelected = true;
            setTimeout(defnederInstructions, 1000);
            switch(characterChoice) {
                case "character1" :
                    player = characters[0].characterID;
                    characterStartSound(0)
                    playerMove("#character1")
                    charSelectClear(characterChoice, 1)
                    backgroundSet(0)
                    lightSaber()
                    break;
                case "character2" :
                    player = characters[1].characterID;
                    characterStartSound(1)
                    playerMove("#character2")
                    charSelectClear(characterChoice, 2)
                    backgroundSet(1)
                    blasterWeapon()
                    break;
                case "character3" :
                    player = characters[2].characterID;
                    characterStartSound(2)
                    playerMove("#character3")
                    charSelectClear(characterChoice, 3)
                    backgroundSet(2)
                    lightSaber()
                    break;
                case "character4" :
                    player = characters[3].characterID;
                    characterStartSound(3)
                    playerMove("#character4")
                    charSelectClear(characterChoice, 4)
                    backgroundSet(3)
                    blasterWeapon()
                    break;
                case "character5" :
                    player = characters[4].characterID;
                    characterStartSound(4)
                    playerMove("#character5")
                    charSelectClear(characterChoice, 5)
                    backgroundSet(4)
                    lightSaber()
                    break;
                case "character6" :
                    player = characters[5].characterID;
                    characterStartSound(5)
                    playerMove("#character6")
                    charSelectClear(characterChoice, 6)
                    backgroundSet(5)
                    lightSaber()
                    break;
                case "character7" :
                    player = characters[6].characterID;
                    characterStartSound(6)
                    playerMove("#character7")
                    charSelectClear(characterChoice, 7)
                    backgroundSet(6)
                    blasterWeapon()
                    break;
                case "character8" :
                    player = characters[7].characterID;
                    characterStartSound(7)
                    playerMove("#character8")
                    charSelectClear(characterChoice, 8)
                    backgroundSet(7)
                    blasterWeapon()
                    break;
                }
            }
    });

    // Select defender

    function defenderSelect(event) {
        let defender = event.target.id;
        if(defender !== player)
        $("#" + defender).appendTo(".defending_character");
        for(i = 0; i < characters.length; i++) {
            if(characters[i].characterID === defender){
                $("#" + defender).append("<div id='defenderHP' class='hp'></div>");
                $("#defenderHP").text(characters[i].hitPoints);
                let defendVocal = new Audio(characters[i].startSound);
                defendVocal.play();
            };
        };
    };
    // Plays correct character startSound

    function characterStartSound(num) {
        var startVocal = new Audio(characters[num].startSound);
        startVocal.play();
    };

    // Move selected character to player character area

    function playerMove(char) {
        $(char).appendTo(".player_character");
        $(char).append('<div id="playerHP" class="hp"></div>')
        console.log(char);
        for(i = 0; i < characters.length; i++) {
            if(char === "#" + characters[i].characterID) {
                $("#playerHP").text(characters[i].hitPoints);
            };
        };
        console.log($("#playerHP").text());
    };

    // Clear out all non-chosen characters from the selection menu

    function charSelectClear(choice, num) {
        if(num < 5) {
            for(let i = 1; i < 5; i++) {
                if("character" + i !== choice) {
                    $("#character" + i).remove();
                }
            }
            for(let i = 5; i < 10; i++) {
                $("#character" + i).appendTo(".remaining_defenders");
            }
        }

        if(num >= 5) {
            for(let i = 5; i < 10; i++){
                if("character" + i !== choice) {
                    $("#character" + i).remove();
                }
            }
            for(let i = 1; i < 5; i++) {
                $("#character" + i).appendTo(".remaining_defenders");
            }
        }
    }

    // Add lightsaber for jedi/sith and blaster for all others

    function lightSaber() {
        $(".character_selection").append(weapons.lightsaber);
    }

    function blasterWeapon() {
        $(".character_selection").append(weapons.blaster);
    }
    // Set background for selected character

    function backgroundSet(num) {
        $(".background_image").css("background-image", characters[num].background);
    }

    // How to choose attacker

    function defnederInstructions() {
        alert("Click on one of the enemies to choose a defender.");
    };

    // How to attack

    function attackInstructions() {
        alert("Click on the " + $(".weapon").attr("id") + " to attack!")
    }
    $(".weapon").click(function() {
        console.log("Hi!");
    });

    
});
