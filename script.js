// Event simulator object
const sportsDay = {
    scores: {
        athlete1: 0,
        athlete2: 0,
        athlete3: 0
    },

    // Initialize the sports event and start the callback chain
    OpeningCeremony: function(callback) {
        console.log("Sports day event simulator started!");
        document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Sports day event simulator started!</p>`;
        callback();
    },

    // Simulate the 100m race and update scores accordingly
    Race100M: function(callback) {
        setTimeout(() => {
            const times = [10.5, 10.8, 11.2];
            const winner = Math.min(...times);
            const winnerIndex = times.indexOf(winner);
            sportsDay.scores[`athlete${winnerIndex + 1}`] += 10;
            console.log(`100m race results: Athlete ${winnerIndex + 1} wins with a time of ${winner} seconds!`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">100m race results: Athlete ${winnerIndex + 1} wins with a time of ${winner} seconds!</p>`;
            callback();
        }, 2000);
    },

    // Simulate the long jump event and update scores accordingly
    LongJump: function(callback) {
        setTimeout(() => {
            const colors = ["Red", "Blue", "Green"];
            const winnerColor = colors[Math.floor(Math.random() * colors.length)];
            sportsDay.scores[`athlete${colors.indexOf(winnerColor) + 1}`] += 5;
            console.log(`Long jump results: Athlete ${colors.indexOf(winnerColor) + 1} wins with a jump of ${winnerColor}!`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Long jump results: Athlete ${colors.indexOf(winnerColor) + 1} wins with a jump of ${winnerColor}!</p>`;
            callback();
        }, 2000);
    },

    // Simulate the high jump event and update scores accordingly
    HighJump: function(callback) {
        setTimeout(() => {
            
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">${prompt}</p>`;
            const userInput = prompt("Enter the color of the highest jump (Red, Blue, or Green): ");
            const colors = ["Red", "Blue", "Green"];
            if (colors.includes(userInput)) {
                sportsDay.scores[`athlete${colors.indexOf(userInput) + 1}`] += 10;
                console.log(`High jump results: Athlete ${colors.indexOf(userInput) + 1} wins with a jump of ${userInput}!`);
                document.getElementById("event-log").innerHTML += `<p class="event-log-entry">High jump results: Athlete ${colors.indexOf(userInput) + 1} wins with a jump of ${userInput}!</p>`;
            } else {
                console.log("Invalid input. Please try again.");
                document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Invalid input. Please try again.</p>`;
                sportsDay.HighJump(callback);
            }
            callback();
        }, 2000);
    },

    // Display the final scores and winners
    AwardCeremony: function() {
        console.log("Final scores:");
        document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Final scores:</p>`;
        for (const athlete in sportsDay.scores) {
            console.log(`${athlete}: ${sportsDay.scores[athlete]} points`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">${athlete}: ${sportsDay.scores[athlete]} points</p>`;
        }
        const winner = Object.keys(sportsDay.scores).reduce((a, b) => sportsDay.scores[a] > sportsDay.scores[b]? a : b);
        console.log(`And the winner is... ${winner}!`);
        document.getElementById("event-log").innerHTML += `<p class="event-log-entry">And the winner is... ${winner}!</p>`;
    }
};

// Start the sports day event simulator
sportsDay.OpeningCeremony(() => {
    sportsDay.Race100M(() => {
        sportsDay.LongJump(() => {
            sportsDay.HighJump(() => {
                sportsDay.AwardCeremony();
            });
        });
    });
});