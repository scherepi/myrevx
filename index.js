/*
Reverend X Quotes:

"Murder, a devil worshipper will do. That's John chapter 8 verse 42. The Devil does not abide by the truth, because there is no truth in him."

"I don't give a fuck what you think, bitch. Your thoughts ain't my thoughts. Bitch, I'm flowing straight from the survival scroll."

"CUT THAT BITCH OFF! Next caller."

"What's happening?"

"You don't know 'em?"

"You're goddamn straight."

"Debbie? Is that Debbie? Do you understand? Do you understand what I'm doing? Is you down with that? I'm serious about business. You know it's business before pleasure."

"This is the knowledge and the will of almighty god."

"It's my world. That's including your asshole too."

"Fuck what you talking 'bout."

"I am God."

"I come in the name of Jesus by the power of the holy spirit."

"You don't know my words, your best bet is to learn. Now who the fuck is you supposed to be? Don't act like you don't know me, fool. What? You don't? Ain't no shame on me motherfucker, shame on you."

"I am the light. And you, motherfucker, you just blind."

"Well, you've got to be out yo goddamn mind."

"If you don't mind, god don't mind slaying yo wicked ass at the end of time." */

const imageFilenames = ["dancing.png", "egg.png", "standing.png"];

const revXQuotes = [
    "Murder, a devil worshipper will do. That's John chapter 8 verse 42. The Devil does not abide by the truth, because there is no truth in him.", 
    "I don't give a fuck what you think, bitch. Your thoughts ain't my thoughts. Bitch, I'm flowing straight from the survival scroll.", 
    "CUT THAT BITCH OFF! Next caller.",
    "What's happening?",
    "You don't know 'em?",
    "You're goddamn straight.",
    "Debbie? Is that Debbie? Do you understand? Do you understand what I'm doing? Is you down with that? I'm serious about business. You know it's business before pleasure.",
    "This is the knowledge and the will of almighty god.",
    "It's my world. That's including your asshole too.",
    "Fuck what you talking 'bout.",
    "I am God.",
    "I come in the name of Jesus by the power of the holy spirit.",
    "You don't know my words, your best bet is to learn. Now who the fuck is you supposed to be? Don't act like you don't know me, fool. What? You don't? Ain't no shame on me motherfucker, shame on you.",
    "I am the light. And you, motherfucker, you just blind.",
    "Well, you've got to be out yo goddamn mind.",
    "If you don't mind, god don't mind slaying yo wicked ass at the end of time.",
    "God will squash your ass like a bug in a rug.",
    "And fuck another motherfucker contrary to me, you're just a Ku Klux Klan member wannabe."
]

const explanationText = "This is a brief attempt at bringing our lord and savior Reverend X to the glorious Internet. I made this as a shitty little experiment to toy around with CSS and JavaScript the day after I decided to change my life. Go watch Fredding The Needle's video to learn more about Rev X.";

const rev = document.getElementById("rev");
const gospel = document.getElementById("gospel");
console.log("Starting script - Reverend X loves you, motherfucker.");

function rotate() {
    console.log("changing picture of our glorious savior");
    let randomFile = "data/" + imageFilenames[Math.floor(Math.random() * imageFilenames.length)];
    rev.style.backgroundImage = "url(" + randomFile + ")";
    console.log("chosen image: " + randomFile);
    let randomQuote = revXQuotes[Math.floor(Math.random() * revXQuotes.length)];
    console.log("chosen quote: " + randomQuote);
    gospel.childNodes[1].innerHTML = randomQuote;
}

setInterval(rotate, 3000);

function explain() {
    const explainDiv = document.createElement("div");
    explainDiv.setAttribute("id", "explain");
    explainDiv.appendChild(document.createElement("p"));
    explainDiv.childNodes[1].innerHTML = explanationText;
     
}