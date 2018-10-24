
let characters = [
    {
    picture : '<img src = "assets/images/Luke_Skywalker.png" alt = "Luke Skywalker"/>',
    name : "Luke Skywalker",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/x_wing_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Rey.jpg",
    name : "Rey",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/rey_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Obi_Wan_Kenobi.jpg",
    name : "Obi-Wan Kenobi",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/obi_wan_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Chewbacca.jpg",
    name : "Chewbacca",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/millenium_falcon.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Darth_vader.jpg",
    name : "Darth Vader",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/darth_vader_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Darth_Sidious.jpg",
    name : "Darth Sidious",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/darth_sidious_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/Captain_Phasma.jpg",
    name : "Captain Phasma",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/first_order.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    },
    {
    picture : "../images/General_Grievous.jpg",
    name : "General Grievous",
    attackPower : 100,
    counterAttack : 100,
    background: "../images/general_grievous_background.jpg",
    startSound: "sounds",
    defeatSound: "other sounds",
    }
]

// Start with document ready

$(document).ready(function() {

    // Places character images in character select area.
    console.log(characters[0].picture);
    let picture = characters[0].picture;
    console.log(picture);
    $("#luke").append(picture);
});