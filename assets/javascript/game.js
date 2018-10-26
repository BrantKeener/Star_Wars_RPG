
let characters = [
    {
    picture : '<img id="character1" src="assets/images/Luke_Skywalker.png" alt="Luke Skywalker"/>',
    name : "Luke Skywalker",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/x_wing_background.jpg"/>',
    startSound: "assets/sounds/luke_afraid.wav",
    defeatSound: "assets/sounds/luke_impossible.wav",
    },
    {
    picture : '<img id="character2" src="assets/images/amidala.jpg" alt="Padme Amidala"/>',
    name : "Padme Amidala",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/rey_background.jpg"/>',
    startSound: "assets/sounds/amidala_start.wav",
    defeatSound: "assets/sounds/amidaladying.wav",
    },
    {
    picture : '<img id="character3" src="assets/images/Obi_Wan_Kenobi.jpg" alt="Obi-Wan Kenobi"/>',
    name : "Obi-Wan Kenobi",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/obi_wan_background.jpg"/>',
    startSound: "assets/sounds/Great disturbance.mp3",
    defeatSound: "assets/sounds/More powerful.mp3",
    },
    {
    picture : '<img id="character4" src="assets/images/Chewbacca.jpg" alt="Chewbacca"/>',
    name : "Chewbacca",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/millenium_falcon.jpg"/>',
    startSound: "assets/sounds/chewie_chatting.wav",
    defeatSound: "assets/sounds/chewie_roar.wav",
    },
    {
    picture : '<img id="character5" src = "assets/images/Darth_vader.jpg" alt="Darth Vader"/>',
    name : "Darth Vader",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/darth_vader_background.jpg"/>',
    startSound: "assets/sounds/dark_side_vader.wav",
    defeatSound: "assets/sounds/darth_powerful.wav",
    },
    {
    picture : '<img id="character6" src = "assets/images/Darth_Sidious.jpg" alt="Darth Sidious"/>',
    name : "Darth Sidious",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/darth_sidious_background.jpg"/>',
    startSound: "assets/sounds/forseen_sidious.wav",
    defeatSound: "assets/sounds/No..no..no...mp3",
    },
    {
    picture : '<img id="character7" src="assets/images/Captain_Phasma.jpg" alt="Captain Phasma"/>',
    name : "Captain Phasma",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/first_order.jpg"/>',
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : '<img id="character8" src="assets/images/grand_moff_tarkin.jpeg" alt="Grand Moff Tarkin"/>',
    name : "Grand Moff Tarkin",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/general_grievous_background.jpg"/>',
    startSound: "assets/sounds/tarkin_power.wav",
    defeatSound: "assets/sounds/storm_trooper_die.wav",
    }
];

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
        let characterChoice = event.target.id;
        switch(characterChoice) {
            case "character1" :
                characterStartSound(0)
                break;
            case "character2" :
                characterStartSound(1)
                break;
            case "character3" :
                characterStartSound(2)
                break;
            case "character4" :
                characterStartSound(3)
                break;
            case "character5" :
                characterStartSound(4)
                break;
            case "character6" :
                characterStartSound(5)
                break;
            case "character7" :
                characterStartSound(6)
                break;
            case "character8" :
                characterStartSound(7)
                break;
        } 
    });

    // Plays correct character startSound

    function characterStartSound(num) {
        var startVocal = new Audio(characters[num].startSound);
        startVocal.play();
    };

});
