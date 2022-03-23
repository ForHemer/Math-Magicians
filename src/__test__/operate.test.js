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

  it('dividing 2 by 0 should return "Cant divide by 0."', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('2 modulo 2 should return "0"', () => {
    expect(operate(2, 2, '%')).toEqual('0');
  });

  it(`2 modulo 0 should return "Can't find modulo as can't divide by 0."`, () => {
    expect(operate(2, 0, '%')).toEqual(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
