const textBox = document.getElementById("text");
const typeSound = new Audio("assetss/typing.mp3");
typeSound.volume = 0.6;
let num = 1;
const messages = [
    "Wait… why does my heart feel like it’s trying to remind me of something important…? (,,•᷄‎ࡇ•᷅,,)",
    "There’s a date today that feels… different. Special. Almost magical (╭ರ_•́)?",
    "Hold on… what’s today’s date again? Why does it sound so familiar…?",
    "Wasn’t the world blessed with someone dangerously attractive on this exact day? (╹-╹)?",
    "Oh… oh wow. It’s some Cutie potie's  birthday, isn’t it?",
    "No wonder the universe feels extra charming today ✨",
    "Happy Birthday dear, lets play some game",
    "But to play the game you have give me a password 😏"
];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function textUpdate(){
    const p = document.createElement("p");
    textBox.appendChild(p);

    for(const line of messages){

        p.textContent = '';

        await typeEffect(p, line)

        await sleep(900);
    }
    autheticate();
}
document.body.addEventListener("click", () => {
    textUpdate();
}, { once: true });

async function autheticate(){

    textBox.innerHTML = '';

    const label = "Who is your bestFriend ";
    const p = document.createElement("p");
    textBox.appendChild(p);
    p.textContent = ""; // IMPORTANT
    await typeEffect(p, label); 
    const input = document.createElement("input");
    input.id = "bestfriend";
    input.placeholder = "Enter password...";
    textBox.appendChild(document.createElement("br"));
    textBox.appendChild(input);
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            checkthepass("Mario", input.value);
        }
    });
}

async function checkthepass(correctValue, userInput){
    if(correctValue.toLowerCase() === userInput.toLowerCase()){
        textBox.innerHTML = ""
        const p = document.createElement("p");
        textBox.appendChild(p);
        let message = 'I knew because i am genius and no one ther could be more special then me here.. Hahahaha'
        await typeEffect(p, message);
        return
    }
    const p1 = document.createElement("p");
    textBox.appendChild(p1);

    let message;

    switch (num){
        case 1:
            message = 'Wrong Password 🤦‍♂️ Think again';
            break;
        case 2:
            message = 'Na someone more special like ✌︎㋡';
            break;
        case 3:
            message = 'I give up you may pass i will remember it 𓆩🥺🫶🏻💞𓆪';
            break;
        default:
            message = 'Locked forever 😏';
    }

    num++;

    await typeEffect(p1, message);
    textBox.appendChild(document.createElement('br'));
}


async function typeEffect(p, label){
    for(const char of label){

        p.textContent += char;

        if(char !== " "){
            typeSound.currentTime = 0;
            typeSound.play().catch(()=>{});
        }
        await sleep(70);
    }

}