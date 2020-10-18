import { BaseString } from '../../../../../app/boundedContext/shared/domain/valueObjects/baseString';

// eslint-disable-next-line max-lines-per-function
describe('Unit test to Base String Value Object', () => {
  const string = 'Iván';
  const baseString = new BaseString(string);

  test('Should get value of string when call method getValue()', async () => {
    expect(baseString.getValue()).toEqual(string);
  });

  test('Should get value of string when call method toString()', async () => {
    expect(baseString.toString()).toEqual(string);
  });

  test('Should get true if string on method equals are the same', async () => {
    expect(baseString.equals(string)).toEqual(true);
  });

  test('Should get false if string on method equals are not the same', async () => {
    expect(baseString.equals('123')).toEqual(false);
  });
});
