
let characters = [
    {
    picture : '<img src = "assets/images/Luke_Skywalker.png" alt = "Luke Skywalker"/>',
    name : "Luke Skywalker",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/x_wing_background.jpg"/>',
    startSound: "assets/sounds/luke_afraid.wav",
    defeatSound: "assets/sounds/luke_impossible.wav",
    },
    {
    picture : '<img src = "assets/images/Rey.jpg"/>',
    name : "Rey",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/rey_background.jpg"/>',
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : '<img src = "assets/images/Obi_Wan_Kenobi.jpg"/>',
    name : "Obi-Wan Kenobi",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/obi_wan_background.jpg"/>',
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : '<img src = "assets/images/Chewbacca.jpg"/>',
    name : "Chewbacca",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/millenium_falcon.jpg"/>',
    startSound: "assets/sounds/chewie_chatting.wav",
    defeatSound: "assets/sounds/chewie_roar.wav",
    },
    {
    picture : '<img src = "assets/images/Darth_vader.jpg"/>',
    name : "Darth Vader",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/darth_vader_background.jpg"/>',
    startSound: "assets/sounds/dark_side_vader.wav",
    defeatSound: "assets/sounds/darth_powerful.wav",
    },
    {
    picture : '<img src = "assets/images/Darth_Sidious.jpg"/>',
    name : "Darth Sidious",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/darth_sidious_background.jpg"/>',
    startSound: "assets/sounds/forseen_sidious.wav",
    defeatSound: "other sounds",
    },
    {
    picture : '<img src = "assets/images/Captain_Phasma.jpg"/>',
    name : "Captain Phasma",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/first_order.jpg"/>',
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : '<img src = "assets/images/General_Grievous.jpeg"/>',
    name : "General Grievous",
    attackPower : 100,
    counterAttack : 100,
    background: '<img src = "assets/images/general_grievous_background.jpg"/>',
    startSound: "sounds",
    defeatSound: "other sounds",
    }
]

// Start with document ready

$(document).ready(function() {

    // Places character images in character select area. 
    for(let i = 0; i < characters.length; i++) {
    let picture = characters[i].picture;
    $("#character" + (i + 1)).append(picture);
    };
});