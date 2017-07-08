import insArr from './';

describe('Sum', () => {
    const arr = [];
    
    test('Should return undefined if no array is passed', () => {
        expect(insArr()).toEqual(undefined);
    });

    test('Should return passed value if value is not array', () => {
        expect(insArr(10)).toEqual(10);
    });

    test('Should return passed array if value is not passed', () => {
        expect(insArr(arr)).toEqual(arr);
    });

    test('Item should be added into an array', () => {
        expect(insArr(arr, 10)).toEqual([10]);        
    });
});