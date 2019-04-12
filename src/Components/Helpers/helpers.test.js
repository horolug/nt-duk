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

test('If sell happened on 2016-01-01 tax is due next year ', () => {
  expect( Helpers.taxDueDate("2016", "01", "01")).toBe("2018-05-02");
});

test('Purchase card has filled flag with: 1998 12 11 10000', () => {
  expect( Helpers.isCardFilled(["1998", "12", "11", "10000"])).toBe(true);
});

test('Purchase card has filled flag with: 1998 12 F 10000', () => {
  expect( Helpers.isCardFilled(["1998", "12", "F", "10000"])).toBe(false);
});

test('1000 is valid price', () => {
  expect( Helpers.validPrice('1000')).toBe(1000);
});

test('foobar is invalid price', () => {
  expect( Helpers.validPrice('foobar')).toBe('Netinkamas Kainos formatas');
});
