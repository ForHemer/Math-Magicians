import calculate from '../components/logic/calculate';
import '@testing-library/jest-dom';

describe('testing calculate logic', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('testing the "2" button', () => {
    Object.assign(obj, calculate(obj, '2'));
    expect(obj).toEqual({ total: null, next: '2', operation: null });
  });

  test('testing the "-" button', () => {
    Object.assign(obj, calculate(obj, '-'));
    expect(obj).toEqual({ total: '2', next: null, operation: '-' });
  });
  

});


