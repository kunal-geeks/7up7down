const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let playerPoints = 5000;

app.post('/roll-dice', (req, res) => {
    const betAmount = req.body.betAmount;
    const betChoice = req.body.betChoice;

    // Generate two dice rolls
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    let result;
    let pointsChange = 0;

    if (sum === 7 && betChoice === 'Lucky 7') {
        result = 'win';
        pointsChange = betAmount * 5;
    } else if (sum < 7 && betChoice === '7 Down' || sum > 7 && betChoice === '7 Up') {
        result = 'win';
        pointsChange = betAmount * 2;
    } else {
        result = 'lose';
        pointsChange = -betAmount;
    }

    playerPoints += pointsChange;

    res.json({
        dice1,
        dice2,
        sum,
        result,
        pointsChange,
        playerPoints
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
