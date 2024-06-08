import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, MenuItem, Typography, Container, FormControl, Select, InputLabel, Card, CardContent } from '@mui/material';
import { updatePoints } from '../store';
import { Howl } from 'howler';
import './Game.css';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Load sounds
const rollSound = new Howl({ src: ['/sounds/dice-roll.mp3'], volume: 0.9 });
const backgroundMusic = new Howl({ src: ['/sounds/game-music.mp3'], loop: true, volume: 0.1 });
const clickSound = new Howl({ src: ['/sounds/click.mp3'], volume: 0.9 });

const Game = () => {
    const dispatch = useDispatch();
    const points = useSelector(state => state.game.points);
    const [betAmount, setBetAmount] = useState(100);
    const [betChoice, setBetChoice] = useState('7 Up');
    const [diceResult, setDiceResult] = useState({ dice1: 6, dice2: 6, result: '', pointsChange: 0 });
    const [rolling, setRolling] = useState(false);
    const [resultVisible, setResultVisible] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    
    // Play background music
    React.useEffect(() => {
        backgroundMusic.play();
        return () => {
            backgroundMusic.stop();
        };
    }, []);

    const handleRollDice = async () => {
        setRolling(true);
        try {
            rollSound.play();

            const response = await axios.post(`${apiUrl}/roll-dice`, {
                betAmount,
                betChoice,
                currentPoints: points
            });
    
            setTimeout(() => {
                setDiceResult(response.data);
                dispatch(updatePoints(response.data.playerPoints));
                setRolling(false);
                setResultVisible(true);
            }, 500); // simulate rolling time
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleBetAmountChange = (e) => {
        setBetAmount(e.target.value);
        clickSound.play();
    };

    const handleBetChoiceChange = (e) => {
        setBetChoice(e.target.value);
        clickSound.play();
    };

    return (
        <Container className="game-container">
            <Card className="game-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom>7 Up 7 Down Game</Typography>
                    <Typography variant="h6" gutterBottom>Points: {points}</Typography>
                    <FormControl variant="outlined" className="form-control">
                        <InputLabel>Bet Amount</InputLabel>
                        <Select value={betAmount} onChange={handleBetAmountChange} label="Bet Amount">
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="form-control">
                        <InputLabel>Bet Choice</InputLabel>
                        <Select value={betChoice} onChange={handleBetChoiceChange} label="Bet Choice">
                            <MenuItem value="7 Up">7 Up</MenuItem>
                            <MenuItem value="7 Down">7 Down</MenuItem>
                            <MenuItem value="Lucky 7">Lucky 7</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="dice-result">
                        <div className={`dice dice-${diceResult.dice1} ${rolling ? 'rolling' : ''}`}></div>
                        <div className={`dice dice-${diceResult.dice2} ${rolling ? 'rolling' : ''}`}></div>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleRollDice} className="roll-button" disabled={rolling}>
                        {rolling ? 'Rolling...' : 'Roll Dice'}
                    </Button>
                    {resultVisible && !rolling && (
                        <div className="result-container">
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
