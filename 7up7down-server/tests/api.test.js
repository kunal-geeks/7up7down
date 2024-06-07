const request = require('supertest');
const app = require('../app');  // Adjust the path to your Express app

describe('POST /roll-dice', () => {
    test('returns correct result for Lucky 7', async () => {
        const response = await request(app)
            .post('/roll-dice')
            .send({
                betAmount: 100,
                betChoice: 'Lucky 7',
                currentPoints: 5000,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('result');
        expect(response.body).toHaveProperty('pointsChange');
        expect(response.body).toHaveProperty('playerPoints');
    });

    test('returns correct result for 7 Up', async () => {
        const response = await request(app)
            .post('/roll-dice')
            .send({
                betAmount: 100,
                betChoice: '7 Up',
                currentPoints: 5000,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('result');
        expect(response.body).toHaveProperty('pointsChange');
        expect(response.body).toHaveProperty('playerPoints');
    });

    test('returns correct result for 7 Down', async () => {
        const response = await request(app)
            .post('/roll-dice')
            .send({
                betAmount: 100,
                betChoice: '7 Down',
                currentPoints: 5000,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('result');
        expect(response.body).toHaveProperty('pointsChange');
        expect(response.body).toHaveProperty('playerPoints');
    });
});
