# 🎲 7 Up 7 Down Game

Welcome to the 7 Up 7 Down game! This is a simple dice game where players bet on the outcome of the dice roll. Bet on numbers below 7, 7, or numbers above 7. Players win double their stake for numbers below and above 7, and five times their stake for 7.

## 🚀 Features
- Start with 5000 points
- Place bets of 100, 200, or 500 points
- Choose between "7 Up", "7 Down", or "Lucky 7"
- Real-time dice roll results
- Responsive UI for mobile devices

## 🛠️ Tech Stack
- **Frontend:** React, Material UI, Axios
- **Backend:** Node.js, Express
- **State Management:** Redux Toolkit
- **Routing:** React Router

## 📋 Prerequisites
- Node.js installed
- npm installed

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/7up7down.git
cd 7up7down
```


Install dependencies for both frontend and backend:

```bash
cd 7up7down-client
npm install
cd ../7up7down-server
npm install
```
🔧 Running the Project
Start the backend server:

```bash
cd 7up7down-server
npm start
```

Start the frontend development server:

```bash
cd ../7up7down-client
npm start
```

The frontend should now be running on http://localhost:3000 and the backend on http://localhost:5000.

📄 API Endpoints
Roll Dice
URL: /roll-dice
Method: POST
Description: Rolls two dice and calculates the result based on the bet.

Request Body:
```json
{
  "betAmount": 100,
  "betChoice": "7 Up"
}
```
Response:
```json
{
  "dice1": 3,
  "dice2": 4,
  "result": "7 Down",
  "pointsChange": -100,
  "playerPoints": 4900
}
```
📂 Project Structure
```bash
7up7down/
├── 7up7down-client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Game.js
│   │   ├── store.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── public/
│   ├── package.json
│   └── ...
├── 7up7down-server/
│   ├── server.js
│   ├── routes/
│   │   └── dice.js
│   ├── package.json
│   └── ...
├── README.md
└── ...
```
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ by Kunal Sharma

### Summary
- **Installation:** Describes how to clone and install the project.
- **Running the Project:** Detailed steps to run the frontend and backend.
- **API Endpoints:** Clear documentation for the main API endpoint.
- **Project Structure:** Overview of the project directory structure.
- **UI Components:** Explanation and code for the main UI component.
- **License:** Information about the project license.
