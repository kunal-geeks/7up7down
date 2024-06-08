const express = require('express');
const cors = require('cors');
const diceRoutes = require('./routes/dice');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/roll-dice', diceRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
