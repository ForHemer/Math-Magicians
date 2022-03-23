import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('renders correctly', () => {
  const calc = renderer.create(<Calculator />).toJSON();
  expect(calc).toMatchSnapshot();
});
