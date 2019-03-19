import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment'
import Helpers from './helpers';

test('Minimum notary fee is 28.96', () => {
  expect( Helpers.calculateNotaryFee(100)).toBe(28.96);
});

test('Maximum notary fee is 5792.4', () => {
  expect( Helpers.calculateNotaryFee(2000000)).toBe(5792.4);
});

test('Notary fee is 0.0045% of the sell price', () => {
  expect( Helpers.calculateNotaryFee(150000)).toBe(675.00);
});
