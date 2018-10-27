
let characters = [
    {
    picture : '<img id="character1" src="assets/images/Luke_Skywalker.png" alt="Luke Skywalker"/>',
    name : "Luke Skywalker",
    hitPoints : 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/x_wing_background.jpg")',
    startSound: "assets/sounds/luke_afraid.WAV",
    defeatSound: "assets/sounds/luke_impossible.wav",
    },
    {
    picture : '<img id="character2" src="assets/images/amidala.jpg" alt="Padme Amidala"/>',
    name : "Padme Amidala",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/padme_background.jpg")',
    startSound: "assets/sounds/amidala_start.wav",
    defeatSound: "assets/sounds/amidaladying.wav",
    },
    {
    picture : '<img id="character3" src="assets/images/Obi_Wan_Kenobi.jpg" alt="Obi-Wan Kenobi"/>',
    name : "Obi-Wan Kenobi",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/obi_wan_background.jpg")',
    startSound: "assets/sounds/Great disturbance.mp3",
    defeatSound: "assets/sounds/More powerful.mp3",
    },
    {
    picture : '<img id="character4" src="assets/images/Chewbacca.jpg" alt="Chewbacca"/>',
    name : "Chewbacca",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/millenium_falcon.jpg")',
    startSound: "assets/sounds/chewie_chatting.wav",
    defeatSound: "assets/sounds/chewie_roar.wav",
    },
    {
    picture : '<img id="character5" src = "assets/images/Darth_vader.jpg" alt="Darth Vader"/>',
    name : "Darth Vader",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/darth_vader_background.jpg")',
    startSound: "assets/sounds/dark_side_vader.wav",
    defeatSound: "assets/sounds/darth_powerful.wav",
    },
    {
    picture : '<img id="character6" src = "assets/images/Darth_Sidious.jpg" alt="Darth Sidious"/>',
    name : "Darth Sidious",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/darth_sidious_background.jpg")',
    startSound: "assets/sounds/forseen_sidious.WAV",
    defeatSound: "assets/sounds/No..no..no...mp3",
    },
    {
    picture : '<img id="character7" src="assets/images/stormtrooper.jpg" alt="Storm Trooper"/>',
    name : "Storm Trooper",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/stormtrooper_background.jpg")',
    startSound: "assets/sounds/Its them.mp3",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    },
    {
    picture : '<img id="character8" src="assets/images/grand_moff_tarkin.jpg" alt="Grand Moff Tarkin"/>',
    name : "Grand Moff Tarkin",
    hitPoints: 100,
    attackPower : 100,
    counterAttack : 100,
    background: 'url("assets/images/tarkin_background.jpg")',
    startSound: "assets/sounds/tarkin_power.wav",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    }
];

let playerSelected = false;
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
        if(playerSelected === false) {
            let characterChoice = event.target.id;
            playerSelected = true;
            switch(characterChoice) {
                case "character1" :
                    characterStartSound(0)
                    playerMove("#character1")
                    charSelectClear(characterChoice, 1)
                    backgroundSet(0)
                    break;
                case "character2" :
                    characterStartSound(1)
                    playerMove("#character2")
                    charSelectClear(characterChoice, 2)
                    backgroundSet(1)
                    break;
                case "character3" :
                    characterStartSound(2)
                    playerMove("#character3")
                    charSelectClear(characterChoice, 3)
                    backgroundSet(2)
                    break;
                case "character4" :
                    characterStartSound(3)
                    playerMove("#character4")
                    charSelectClear(characterChoice, 4)
                    backgroundSet(3)
                    break;
                case "character5" :
                    characterStartSound(4)
                    playerMove("#character5")
                    charSelectClear(characterChoice, 5)
                    backgroundSet(4)
                    break;
                case "character6" :
                    characterStartSound(5)
                    playerMove("#character6")
                    charSelectClear(characterChoice, 6)
                    backgroundSet(5)
                    break;
                case "character7" :
                    characterStartSound(6)
                    playerMove("#character7")
                    charSelectClear(characterChoice, 7)
                    backgroundSet(6)
                    break;
                case "character8" :
                    characterStartSound(7)
                    playerMove("#character8")
                    charSelectClear(characterChoice, 8)
                    backgroundSet(7)
                    break;
            }
        } 
    });

    // Plays correct character startSound

    function characterStartSound(num) {
        var startVocal = new Audio(characters[num].startSound);
        startVocal.play();
    };

    // Move selected character to player character area

    function playerMove(char) {
        $(char).appendTo(".player_character");
    }

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

    // Set background for selected character

    function backgroundSet(num) {
        $(".background_image").css("background-image", characters[num].background);
    }

    

});
