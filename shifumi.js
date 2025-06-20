// Je récupère le bouton pour Jouer
const btn = document.querySelector("button");

// Je récupère les éléments de résultat
const result = document.querySelector("#result");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

// Je recup les icones pour pierre feuille et ciseaux via leur id
const scissor = document.querySelector("#scissors");
const leaf = document.querySelector("#leaf");
const stone = document.querySelector("#stone");

// Gestion du choix entre les 3 options
let playerChoice = "";
const choices = [scissor, leaf, stone];

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const id = choice.id;

        if (id === "leaf") {
            playerChoice = "Feuille";
        } else if (id === "stone") {
            playerChoice = "Pierre";
        } else {
            playerChoice = "Ciseau";
        }

        player.textContent = playerChoice;
        document.getElementById("error").classList.add("hidden");
    });
});

// On écoute le click sur le bouton "Jouer"
btn.addEventListener("click", () => {
    if (!playerChoice) {
        document.getElementById("error").classList.remove("hidden");
        return;
    }

    // Choix aléatoire de l'ordinateur
    const options = ["Pierre", "Feuille", "Ciseau"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    computer.textContent = computerChoice;

    // Résultat du jeu
    let outcome = "";

    if (playerChoice === computerChoice) {
        outcome = "Égalité ! 😐";
    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseau") ||
        (playerChoice === "Feuille" && computerChoice === "Pierre") ||
        (playerChoice === "Ciseau" && computerChoice === "Feuille")
    ) {
        outcome = "Gagné ! 🥳";
        const scorePlayer = document.getElementById("scorePlayer");
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
    } else {
        outcome = "Perdu ! 😭";
        const scoreIa = document.getElementById("scoreIa");
        scoreIa.textContent = parseInt(scoreIa.textContent) + 1;
    }

    result.textContent = outcome;

    // 🔁 Auto reset après 2 secondes
    setTimeout(() => {
        result.textContent = "...";
        player.textContent = "...";
        computer.textContent = "...";
        playerChoice = "";
    }, 2000);
});
