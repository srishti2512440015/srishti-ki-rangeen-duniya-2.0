```javascript id="0c5v5y"

/* =========================
   CHARACTER DATA
========================= */

const characters = [

    {
        name: "Renji Takamori",

        role: "The Fallen Samurai",

        image: "images/char1.jpg",

        description:
        "Renji Takamori is a battle-worn samurai haunted by betrayal and war. Once a protector of the Emerald Throne, he now walks a path stained with blood, revenge, and broken honor."
    },

    {
        name: "Akari Nozomi",

        role: "The Crimson Priestess",

        image: "images/char2.jpg",

        description:
        "Akari commands forbidden rituals lost beneath the empire. Elegant and calm on the surface, she hides terrifying power beneath her silence."
    },

    {
        name: "Daichi Kuro",

        role: "The Shadow Blade",

        image: "images/char3.jpg",

        description:
        "Raised beneath the capital in secrecy, Daichi became the empire's deadliest assassin. Every movement is precise. Every strike is final."
    },

    {
        name: "Hana Miyori",

        role: "The Last Healer",

        image: "images/char4.jpg",

        description:
        "Hana carries the final remnants of sacred healing arts. In a kingdom consumed by war, she remains a fragile symbol of hope."
    }

];


/* =========================
   CHARACTER SLIDER
========================= */

let startIndex = 0;


/* =========================
   UPDATE CARDS
========================= */

function updateCards(){

    for(let i = 0; i < 4; i++){

        let charIndex =
        (startIndex + i) % characters.length;

        document.getElementById("img" + i).src =
        characters[charIndex].image;

        document.getElementById("name" + i).innerText =
        characters[charIndex].name;

        document.getElementById("role" + i).innerText =
        characters[charIndex].role;
    }
}


/* =========================
   NEXT CHARACTERS
========================= */

function nextCharacters(){

    startIndex++;

    if(startIndex >= characters.length){

        startIndex = 0;
    }

    updateCards();
}


/* =========================
   PREVIOUS CHARACTERS
========================= */

function previousCharacters(){

    startIndex--;

    if(startIndex < 0){

        startIndex = characters.length - 1;
    }

    updateCards();
}


/* =========================
   SELECT CHARACTER
========================= */

function selectCharacter(index){

    let realIndex =
    (startIndex + index) % characters.length;

    document.getElementById("descriptionBox").innerHTML =

    `
    <h1>${characters[realIndex].name}</h1>

    <p>
        ${characters[realIndex].description}
    </p>
    `;
}


/* =========================
   AUDIO PLAYER
========================= */

function toggleAudio(id){

    const audio =
    document.getElementById(id);

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();
    }
}


/* =========================
   AUTO START CHARACTER PAGE
========================= */

window.onload = function(){

    if(document.getElementById("img0")){

        updateCards();
    }
};

```
