const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { betAmount, betChoice } = req.body;

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result;
    let pointsChange;

    if (sum === 7) {
        result = 'Lucky 7';
        pointsChange = betChoice === 'Lucky 7' ? betAmount * 5 : -betAmount;
    } else if (sum < 7) {
        result = '7 Down';
        pointsChange = betChoice === '7 Down' ? betAmount * 2 : -betAmount;
    } else {
        result = '7 Up';
        pointsChange = betChoice === '7 Up' ? betAmount * 2 : -betAmount;
    }

    const playerPoints = Math.max(0, 5000 + pointsChange);  // Adjust initial points as necessary

    res.json({
        dice1,
        dice2,
        result,
        pointsChange,
        playerPoints
    });
});

module.exports = router;
