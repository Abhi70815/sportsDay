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
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log(`Countdown: ${5 - i} seconds`);
                document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Countdown: ${5 - i} seconds</p>`;
            }, i * 1000);
        }
        setTimeout(() => {
            callback();
        }, 5000);
    },

    // Simulate the 100m race and update scores accordingly
    Race100M: function(callback) {
        setTimeout(() => {
            const times = [10.5, 10.8, 11.2];
            for (let i = 0; i < times.length; i++) {
                times[i] = Math.random() * (12 - 10) + 10;
            }
            const winner = Math.min(...times);
            const winnerIndex = times.indexOf(winner);
            sportsDay.scores[`athlete${winnerIndex + 1}`] += 10;
            console.log(`100m race results: Athlete ${winnerIndex + 1} wins with a time of ${winner} seconds!`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">100m race results: Athlete ${winnerIndex + 1} wins with a time of ${winner} seconds!</p>`;
            callback(sportsDay.scores);
        }, 3000);
    },

    // Simulate the long jump event and update scores accordingly
    LongJump: function(scores, callback) {
        setTimeout(() => {
            const colors = ["Red", "Blue", "Green"];
            const winnerColor = colors[Math.floor(Math.random() * colors.length)];
            scores[`athlete${colors.indexOf(winnerColor) + 1}`] += 5;
            console.log(`Long jump results: Athlete ${colors.indexOf(winnerColor) + 1} wins with a jump of ${winnerColor}!`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Long jump results: Athlete ${colors.indexOf(winnerColor) + 1} wins with a jump of ${winnerColor}!</p>`;
            callback(scores);
        }, 2000);
    },

    // Simulate the high jump event and update scores accordingly
    HighJump: function(scores, callback) {
        setTimeout(() => {
        
            const userInput = prompt("Enter the color of the highest jump (Red, Blue, or Green): ");
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">${prompt}</p>`;
            const colors = ["Red", "Blue", "Green"];
            if (colors.includes(userInput)) {
                scores[`athlete${colors.indexOf(userInput) + 1}`] += 10;
                console.log(`High jump results: Athlete ${colors.indexOf(userInput) + 1} wins with a jump of ${userInput}!`);
                document.getElementById("event-log").innerHTML += `<p class="event-log-entry">High jump results: Athlete ${colors.indexOf(userInput) + 1} wins with a jump of ${userInput}!</p>`;
            } else {
                console.log("Invalid input. Please try again.");
                document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Invalid input. Please try again.</p>`;
                sportsDay.HighJump(scores, callback);
            }
            callback(scores);
        }, 2000);
    },

    // Display the final scores and winners
    AwardCeremony: function(scores) {
        console.log("Final scores:");
        document.getElementById("event-log").innerHTML += `<p class="event-log-entry">Final scores:</p>`;
        for (const athlete in scores) {
            console.log(`${athlete}: ${scores[athlete]} points`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">${athlete}: ${scores[athlete]} points</p>`;
        }
        const winners = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        console.log(`And the winner is... ${winners[0]}!`);
        document.getElementById("event-log").innerHTML += `<p class="event-log-entry">And the winner is... ${winners[0]}!</p>`;
        for (let i = 1; i < winners.length; i++) {
            console.log(`And the ${i + 1} place is... ${winners[i]}!`);
            document.getElementById("event-log").innerHTML += `<p class="event-log-entry">And the ${i + 1} place is... ${winners[i]}!</p>`;
        }
    }
};

// Start the sports day event simulator
sportsDay.OpeningCeremony(() => {
    sportsDay.Race100M((scores) => {
        sportsDay.LongJump(scores, (scores) => {
            sportsDay.HighJump(scores, (scores) => {
                sportsDay.AwardCeremony(scores);
            });
        });
    });
});
