// Sample game data (you can add more games here)
const games = [
    { title: "Om Nom Run", category: "adventure", url: "https://play.famobi.com/om-nom-run" },
    { title: "biliard", category: "adventure", url: "https://play.famobi.com/8-ball-billiards-classic" },
    { title: "Kick Of", category: "action", url: "https://play.famobi.com/3d-free-kick" },
    { title: "Gold Mine", category: "puzzle", url: "https://play.famobi.com/gold-mine" },
    { title: "Element Blocks ", category: "puzzle", url: "https://play.famobi.com/element-blocks" },
    { title: "Moto M3x", category: "action", url: "https://play.famobi.com/moto-x3m-pool-party" },
	{ title: "Tennis", category: "adventure", url: "https://play.famobi.com/table-tennis-world-tour" },
	{ title: "Solitaire ", category: "puzzle", url: "https://play.famobi.com/solitaire-klondike" },
	{ title: "Endless truck", category: "adventure", url: "https://play.famobi.com/endless-truck" },
	{ title: "crazy hen ", category: "adventure", url: "https://play.famobi.com/crazy-hen-level" },
	{ title: "Speed Master", category: "adventure", url: "https://play.famobi.com/speed-master" },
	{ title: "Thief Puzzle", category: "puzzle", url: "https://play.famobi.com/thief-puzzle" },
	{ title: "Peet Sneak", category: "action", url: "https://play.famobi.com/peet-sneak" },
	{ title: "Tap-Tap Dunk", category: "action", url: "https://play.famobi.com/tap-tap-dunk" },
	{ title: "Pizza Cooking", category: "puzzle", url: "https://play.famobi.com/pizza-realife-cooking" },
	{ title: "3D hoops", category: "action", url: "https://play.famobi.com/street-hoops-3d" },
	{ title: "Drift Cup", category: "adventure", url: "https://play.famobi.com/drift-cup-racing" },
	{ title: "Blackjack", category: "puzzle", url: "https://play.famobi.com/blackjack-bet" },
	{ title: "Penalty 3D", category: "action", url: "https://play.famobi.com/penalty-shooters-2" },
	{ title: "Outcome", category: "action", url: "https://play.famobi.com/outcome" },
	{ title: "Aliens Attack", category: "action", url: "https://play.famobi.com/aliens-attack" },
	{ title: "Boxing", category: "action", url: "https://play.famobi.com/ultimate-boxing" },
	{ title: "Highway Rider ", category: "adventure", url: "https://play.famobi.com/highway-rider-extreme" },
	{ title: "Boat Battles", category: "puzzle", url: "https://play.famobi.com/boat-battles" },
	{ title: "Geo quiz", category: "puzzle", url: "https://play.famobi.com/geo-quiz-europe" },
	{ title: "Figet spinner", category: "puzzle", url: "https://play.famobi.com/fidget-spinner-high-score" },
	{ title: "Jumpy Justin", category: "adventure", url: "https://play.famobi.com/jump-with-justin" },
	{ title: "Knife rain", category: "puzzle", url: "https://play.famobi.com/knife-rain" },
	{ title: "Stack Smash", category: "puzzle", url: "https://play.famobi.com/stack-smash" },
	{ title: "Stair race 3d", category: "puzzle", url: "https://play.famobi.com/stair-race-3d" },
	{ title: "Pet a lock", category: "puzzle", url: "https://play.famobi.com/peet-a-lock" },
	{ title: "Defly", category: "action", url: "https://play.famobi.com/defly" },
	{ title: "Diamond rush", category: "puzzle", url: "https://play.famobi.com/diamond-rush" },
	{ title: "Cannon balls", category: "puzzle", url: "https://play.famobi.com/cannon-balls-3d" },
	{ title: "Downhill", category: "adventure", url: "https://cdn.htmlgames.com/Downhill/" },
	{ title: "Christmas", category: "adventure", url: "https://cdn.htmlgames.com/HexLinkChristmas/" },
	{ title: "Airpot shooter", category: "action", url: "https://cdn.htmlgames.com/AirportSniper/" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	{ title: "", category: "", url: "" },
	 // Add more games as needed
];

function displayGames(category = null) {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = ""; // Clear current list

      games
        .filter(game => !category || game.category === category)
        .forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.className = "game-card";
            
            // Creating clickable links and buttons for each game
            gameCard.innerHTML = `
                <h3>${game.title}</h3>
                <div class="game-thumbnail">
                    <img src="icons/${game.title.replace(' ', '-').toLowerCase()}.png" alt="${game.title}">
                </div>
                <p>Category: ${game.category}</p>
                <button onclick="embedGame('${game.url}')">Play Here</button>
                <a href="${game.url}" target="_blank" class="play-link">Play in New Tab</a>
            `;
            gameList.appendChild(gameCard);
        });
}

function embedGame(url) {
    const embeddedGameContainer = document.getElementById("embedded-game-container");
    const embeddedGame = document.getElementById("embedded-game");

    // Set the iframe URL to the selected game and show the container
    embeddedGame.src = url;
    embeddedGameContainer.style.display = "block";
}

// Function to close the embedded game
function closeEmbeddedGame() {
    const embeddedGameContainer = document.getElementById("embedded-game-container");
    const embeddedGame = document.getElementById("embedded-game");

    // Clear the iframe URL and hide the container
    embeddedGame.src = "";
    embeddedGameContainer.style.display = "none";
}

// Initial display of all games
displayGames();

// Navigation links filter games by category
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const category = event.target.getAttribute("href").substring(1); // Remove "#" from href
        displayGames(category === "all" ? null : category);
    });
});
