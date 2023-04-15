const { add, subtract, divide, multiply } =  require('./test');

describe('test.js tests', () =>{
    it ('should test add', () =>{
        expect(add(2, 2)).toBe(4);
    })
    it ('should test subtract', () =>{
        expect(subtract(2, 2)).toBe(0);
    })
    it ('should test sdivide', () =>{
        expect(divide(2, 2)).toBe(1);
    })
    it ('should test multiply', () =>{
        expect(multiply(2, 2)).toBe(4);
    })
})