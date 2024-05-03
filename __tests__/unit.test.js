// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('returns true for valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('returns false for invalid phone numbers', () => {
  expect(isPhoneNumber('1234')).toBe(false);
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('returns true for valid emails', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user123@mail.co')).toBe(true);
});

test('returns false for invalid emails', () => {
  expect(isEmail('not_an_email')).toBe(false);
  expect(isEmail('invalid@')).toBe(false);
});

test('returns true for strong passwords', () => {
  expect(isStrongPassword('A12345')).toBe(true);
  expect(isStrongPassword('test2example')).toBe(true);
});

test('returns false for weak passwords', () => {
  expect(isStrongPassword('')).toBe(false);
  expect(isStrongPassword('13245')).toBe(false);
});

test('returns true for valid dates', () => {
  expect(isDate('3/12/2004')).toBe(true);
  expect(isDate('06/19/2004')).toBe(true);
});

test('returns false for invalid dates', () => {
  expect(isDate('3/12/04')).toBe(false);
  expect(isDate('6-19-2004')).toBe(false);
});

test('returns true for valid hex colors', () => {
  expect(isHexColor('#abc')).toBe(true);
  expect(isHexColor('#123456')).toBe(true);
});

test('returns false for invalid hex colors', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('#ghj')).toBe(false);
});