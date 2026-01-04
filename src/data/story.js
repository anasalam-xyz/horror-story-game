export default function story() {
    const storyline = {
        new_game: {
            texts: [
                "HELLO",
                "FRIEND",
            ],
            choices: [
                { label: "Start Game", next: "start" },
            ],
        },
        start: {
            texts: [
                "Every few years, kids go missing on Hollow Street.\nPeople say it's coincidence.",
                "But the storm drain behind the abandoned park has started whispering names again.",
                "Tonight, one of them sounds like yours."
            ],
            choices: [
                { label: "Go to the park", next: "park" },
                { label: "Ignore it and go home", next: "home" }
            ],
            effect: "storm"
        },
        park: {
            texts: [
                "It's past midnight. The park is empty. \nThe swings creak even without wind",
                "The drain smells like rust and rain. \nMike kneels near it."
            ],
            choices: [
                { label: "Pull Mike back", next: "pull" },
                { label: "Look into the drain", next: "drain" }
            ],
            effect: "crickets"
        },
        pull: {
            texts: [
                "You pull Mike back.",
                '“Relax. It\'s just a stupid hole."',
                "WHOOSH!",
                "Did... did that thing just move ?\nFrom the darkness below, something giggles."
            ],
            choices: [
                { label: "Run", next: "run" },
                { label: "Stay and listen", next: "brutalEnding" }
            ],
            effect: "whoosh"
        },
        drain: {
            texts: [
                "You lean closer.\nAt first, there's nothing.",
                "Then the darkness whispers your name back to you.",
                "Maya grabs your wrist.\n\"I am scared.\""
            ],
            choices: [
                { label: "Ask it what it wants", next: "brutalEnding" },
                { label: "Cover the drain", next: "sealedEnding" }
            ],
            effect: "scary"
        },
        home: {
            texts: [
                "You decide it's not worth it and head home.",
                "Your room feels safe.\n Quiet. Dry",
                "Your phone buzzes.",
                'Unknown number: \n"Why didn\'t you stay?"'
            ],
            choices: [
                { label: "Check the bathroom", next: "followedEnding" }
            ],
            effect: "phone"
        },
        run: {
            texts: [
                "You run.\nFootsteps pound behind you.\nToo many.",
                "You don't look back.",
                "By morning, the park is surrounded by police tape.",
                "Mike's shoes are found near the drain."
            ],
            choices: [
                { label: "New Game", next: "new_game" },
            ],
            effect: "sad",
            ending: true,
            endingType: "sad",
            title: "MIKE DIED."
        },
        brutalEnding: {
            texts: [
                "The laughter grows sharper.",
                "Mike starts laughing too.\nUncontrollably.",
                "Silence. Everywhere.",
                "Only his voice keeps laughing from inside the drain.",
            ],
            choices: [
                { label: "New Game", next: "new_game" },
            ],
            effect: "scream",
            ending: true,
            endingType: "brutal",
            title: "YOU DIED!"
        },
        sealedEnding: {
            texts: [
                "You push debris, metal, and stone over the opening.",
                "The whisper turns into a scream.",
                "Then silence.",
                "Maya starts crying.",
                '"It\'s not gone,"It\'s just hungry.\n somewhere else."'
            ],
            choices: [
                { label: "New Game", next: "new_game" },
            ],
            effect: "suspense",
            ending: true,
            endingType: "safe",
            title: "YOU SEALED THE MONSTER."
        },
        followedEnding: {
            texts: [
                "The bathroom light flickers.\nFrom the drain comes a soft, familiar giggle.",
                "Your phone buzzes one last time",
                '“You can leave me.I will not leave you."'
            ],
            choices: [
                { label: "New Game", next: "new_game" },
            ],
            effect: "giggle",
            ending: true,
            endingType: "psychological",
            title: "HE LIKES YOUR HOME."
        }
    }
    return (storyline);
}