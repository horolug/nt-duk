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

test('If sell happened on 2017-01-01 tax is due next year ', () => {
  expect( Helpers.taxDueDate("2017", "01", "01")).toBe("2018-05-01");
});

test('If sell happened after 2017-05-01 tax is due in 2 years ', () => {
  expect( Helpers.taxDueDate("2017", "05", "01")).toBe("2019-05-01");
});
