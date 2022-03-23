import '@testing-library/jest-dom';
import operate from '../components/logic/operate';

describe('test for operate logic', () => {
  test('multiplying 2 by 1 should return 2', () => {
    const numberOne = 2;
    const numberTwo = 1;
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toBe('2');
  });

  test('subtraction 5 from 10 should return 5', () => {
    const numberOne = 10;
    const numberTwo = 5;
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toBe('5');    
  });

});
