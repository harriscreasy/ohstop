function popup() {
    Swal.fire({
        title: 'Bienvenue sur AmbientLove!',
        text: 'Concentre-toi sur les meilleurs ambiances de tes univers préférés',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
};

window.onload = popup;


// SECTION RED DEAD REDEMPTION 2

let volumeRDR = document.querySelector("#volumeRDR");
// Variable qui contient le slide du volume HTML
let RDRbg = document.querySelector(".red-dead-section");
// Variable qui contient la section HTML
let imgArt1 = document.querySelector(".imgArt1");

let musicRDR = new Audio("ass/RedDead1.mp3");
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

let musicTLOS = new Audio("ass/TLOS2.mp3");

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

let musicGOW4 = new Audio("ass/GOW4.mp3");

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

let musicAssaOr = new Audio("ass/AssaOr.mp3");

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

// FIN SECTION ASSASSIN CREED ORIGIN


// SECTION HARRY POTTER

let volumeHP = document.querySelector("#volumeHP");
let HPbg = document.querySelector(".harry-potter-section");
let imgArt5 = document.querySelector(".imgArt5");

let musicHP = new Audio("ass/harrypotter-music.mp3");

if (typeof musicHP.loop == 'boolean')
{
    musicHP.loop = true;
};

volumeHP.addEventListener("change", function(e){
    musicHP.volume = e.currentTarget.value / 100;
    musicHP.play();
    HPbg.classList.add("HP-bg");
    imgArt5.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        HPbg.classList.remove("HP-bg");
        imgArt5.classList.remove("opacity-none");
    }
});

// FIN DE SECTION HARRY POTTER

// SECTION GAME OF THRONES


let volumeGOT = document.querySelector("#volumeGOT");
let GOTbg = document.querySelector(".game-of-throne-section");
let imgArt6 = document.querySelector(".imgArt6");

let musicGOT = new Audio("ass/GOT-music.mp3");

if (typeof musicGOT.loop == 'boolean')
{
    musicGOT.loop = true;
};

volumeGOT.addEventListener("change", function(e){
    musicGOT.volume = e.currentTarget.value / 100;
    musicGOT.play();
    GOTbg.classList.add("GOT-bg");
    imgArt6.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        GOTbg.classList.remove("GOT-bg");
        imgArt6.classList.remove("opacity-none");
    }
});

// FIN SECTION GAME OF THRONE

//SECTION STAR WARS

let volumeSW = document.querySelector("#volumeSW");
let SWbg = document.querySelector(".star-wars-section");
let imgArt7 = document.querySelector(".imgArt7");

let musicSW = new Audio("ass/starwars-music.mp3");

if (typeof musicSW.loop == 'boolean')
{
    musicSW.loop = true;
};

volumeSW.addEventListener("change", function(e){
    musicSW.volume = e.currentTarget.value / 100;
    musicSW.play();
    SWbg.classList.add("SW-bg");
    imgArt7.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        SWbg.classList.remove("SW-bg");
        imgArt6.classList.remove("opacity-none");
    }
});

// FIN SECTION STAR WARS


// SECTION HOBBIT

let volumeHobbit = document.querySelector("#volumeHobbit");
let hobbitbg = document.querySelector(".hobbit-section");
let imgArt8 = document.querySelector(".imgArt8");

let musicHobbit = new Audio("ass/hobbit-music.mp3");

if (typeof musicHobbit.loop == 'boolean')
{
    musicHobbit.loop = true;
};

volumeHobbit.addEventListener("change", function(e){
    musicHobbit.volume = e.currentTarget.value / 100;
    musicHobbit.play();
    hobbitbg.classList.add("hobbit-bg");
    imgArt8.classList.add("opacity-none");

    if (e.currentTarget.value == 0){
        hobbitbg.classList.remove("hobbit-bg");
        imgArt8.classList.remove("opacity-none");
    }
});