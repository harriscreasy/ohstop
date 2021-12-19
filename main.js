// SECTION RED DEAD REDEMPTION 2

let volumeRDR = document.querySelector("#volumeRDR");
// Variable qui contient le slide du volume HTML
let RDRbg = document.querySelector(".red-dead-section");
// Variable qui contient la section HTML
let imgArt1 = document.querySelector(".imgArt1");

let musicRDR = new Audio("assets/RedDead1.mp3");
// Je crée un nouvel audio qui contient le son de la section


if (typeof musicRDR.loop == 'boolean') // Condition pour que le son se joue en loop
{
    musicRDR.loop = true;
};

// Ecouteur d'évenements sur le slide au moindre changement la fonction s'execute
volumeRDR.addEventListener("change", function(e){
// La valeur du slide est divisé par 100 pour la valeur de l'input ? 
    musicRDR.volume = e.currentTarget.value / 100;
    // L'audio se joue dès que le volume est enclenchée
    musicRDR.play();
    // L'action du volume declenche l'ajout d'un background image à la section
    RDRbg.classList.add("red-dead-bg");
    imgArt1.classList.add("opacity-none");


    // Si l'input revient à zéro pour éteindre le volume
    // Le background est retiré
    if (e.currentTarget.value == 0){
        RDRbg.classList.remove("red-dead-bg");
        imgArt1.classList.remove("opacity-none");
    }
});


// FIN SECTION RED DEAD REDEMPTION 2

// SECTION LAST OF US 2


let volumeTLOS = document.querySelector("#volumeTLOS");
let TLOSbg = document.querySelector(".last-of-us-section");
let imgArt2 = document.querySelector(".imgArt2");

let musicTLOS = new Audio("assets/TLOS2.mp3");

if (typeof musicTLOS.loop == 'boolean')
{
    musicTLOS.loop = true;
};

volumeTLOS.addEventListener("change", function(e){
    musicTLOS.volume = e.currentTarget.value / 100;
    musicTLOS.play();
    TLOSbg.classList.add("thelastofus-bg");
    imgArt2.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        TLOSbg.classList.remove("thelastofus-bg");
        imgArt2.classList.remove("opacity-none");
    }
});

// FIN SECTION LAST OF US 2

// SECTION GOD OF WAR

let volumeGOW4 = document.querySelector("#volumeGOW4");
let GOW4bg = document.querySelector(".god-of-war-section");
let imgArt3 = document.querySelector(".imgArt3");

let musicGOW4 = new Audio("assets/GOW4.mp3");

if (typeof musicGOW4.loop == 'boolean')
{
    musicGOW4.loop = true;
};

volumeGOW4.addEventListener("change", function(e){
    musicGOW4.volume = e.currentTarget.value / 100;
    musicGOW4.play();
    GOW4bg.classList.add("GOW4-bg");
    imgArt3.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        GOW4bg.classList.remove("GOW4-bg");
        imgArt3.classList.remove("opacity-none");
    }
});

// FIN SECTION GOD OF WAR


// SECTION ASSASSIN CREED ORIGIN 

let volumeAssaOr = document.querySelector("#volumeAssa0r");
let AssaOrbg = document.querySelector(".assasins-creed-section");
let imgArt4 = document.querySelector(".imgArt4");

let musicAssaOr = new Audio("assets/AssaOr.mp3");

if (typeof musicAssaOr.loop == 'boolean')
{
    musicAssaOr.loop = true;
};

volumeAssaOr.addEventListener("change", function(e){
    musicAssaOr.volume = e.currentTarget.value / 100;
    musicAssaOr.play();
    AssaOrbg.classList.add("assa0r-bg");
    imgArt4.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        AssaOrbg.classList.remove("assa0r-bg");
        imgArt4.classList.remove("opacity-none");
    }
});