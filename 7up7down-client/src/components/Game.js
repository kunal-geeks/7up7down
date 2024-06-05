import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, MenuItem, Typography, Container, FormControl, Select, InputLabel, Card, CardContent } from '@mui/material';
import { updatePoints } from '../store';
import './Game.css';

const Game = () => {
    const dispatch = useDispatch();
    const points = useSelector(state => state.game.points);
    const [betAmount, setBetAmount] = useState(100);
    const [betChoice, setBetChoice] = useState('7 Up');
    const [diceResult, setDiceResult] = useState({ dice1: null, dice2: null, result: '', pointsChange: 0 });

    const handleRollDice = async () => {
        const response = await axios.post('http://localhost:5000/roll-dice', { betAmount, betChoice });
        setDiceResult(response.data);
        dispatch(updatePoints(response.data.playerPoints));
    };

    return (
        <Container style={{ marginTop: '50px', textAlign: 'center' }}>
            <Card className="game-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom>7 Up 7 Down Game</Typography>
                    <Typography variant="h6" gutterBottom>Points: {points}</Typography>
                    <FormControl variant="outlined" className="form-control">
                        <InputLabel>Bet Amount</InputLabel>
                        <Select value={betAmount} onChange={e => setBetAmount(e.target.value)} label="Bet Amount">
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="form-control">
                        <InputLabel>Bet Choice</InputLabel>
                        <Select value={betChoice} onChange={e => setBetChoice(e.target.value)} label="Bet Choice">
                            <MenuItem value="7 Up">7 Up</MenuItem>
                            <MenuItem value="7 Down">7 Down</MenuItem>
                            <MenuItem value="Lucky 7">Lucky 7</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleRollDice} className="roll-button">
                        Roll Dice
                    </Button>
                    {diceResult.dice1 !== null && (
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="h6">Dice 1: {diceResult.dice1}</Typography>
                            <Typography variant="h6">Dice 2: {diceResult.dice2}</Typography>
                            <Typography variant="h6">Result: {diceResult.result}</Typography>
                            <Typography variant="h6">Points Change: {diceResult.pointsChange}</Typography>
                        </div>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};

export default Game;
