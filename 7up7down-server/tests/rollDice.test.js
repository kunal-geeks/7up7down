const { calculateResult, updatePlayerPoints } = require('../utils/gameUtils');

describe('calculateResult', () => {
    test('returns correct result for Lucky 7', () => {
        expect(calculateResult(7, 'Lucky 7', 100)).toEqual({
            result: 'Lucky 7',
            pointsChange: 500,
        });
    });

    test('returns correct result for 7 Up', () => {
        expect(calculateResult(8, '7 Up', 100)).toEqual({
            result: '7 Up',
            pointsChange: 200,
        });
    });

    test('returns correct result for 7 Down', () => {
        expect(calculateResult(6, '7 Down', 100)).toEqual({
            result: '7 Down',
            pointsChange: 200,
        });
    });

    test('returns correct result for loss', () => {
        expect(calculateResult(8, '7 Down', 100)).toEqual({
            result: 'Loss',
            pointsChange: -100,
        });
    });
});

describe('updatePlayerPoints', () => {
    test('updates points correctly', () => {
        expect(updatePlayerPoints(5000, 200)).toBe(5200);
        expect(updatePlayerPoints(5000, -100)).toBe(4900);
    });
});
