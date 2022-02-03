const chai = require('chai');
const { expect } = require('chai');
const HakunaTupu = require('../src/index');
const defaultObject = require('./mocks/defaultObject');
const removeAll = require('./mocks/removeAll');
const notRemoveNull = require('./mocks/notRemoveNull');
const notRemoveEmptyStrings = require('./mocks/notRemoveEmptyStrings');
const notRemoveUndefined = require('./mocks/notRemoveUndefined');
const notRemoveEmptyObject = require('./mocks/notRemoveEmptyObject');
const notRemoveEmptyArray = require('./mocks/notRemoveEmptyArray');

describe('HakunaTupu', () => {
  it('Remove everything', () => {
    const hakunaTupu = new HakunaTupu();
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(removeAll);
  });

  it('Not remove null values', () => {
    const hakunaTupu = new HakunaTupu({
      removeNull: false
    });
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(notRemoveNull);
  });

  it('Not remove undefined values', () => {
    const hakunaTupu = new HakunaTupu({
      removeUndefined: false
    });
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(notRemoveUndefined);
  });

  it('Not remove empty string values', () => {
    const hakunaTupu = new HakunaTupu({
      removeEmptyStrings: false
    });
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(notRemoveEmptyStrings);
  });

  it('Not remove empty object values', () => {
    const hakunaTupu = new HakunaTupu({
      removeEmptyObjects: false
    });
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(notRemoveEmptyObject);
  });

  it('Not remove empty array values', () => {
    const hakunaTupu = new HakunaTupu({
      removeEmptyArrays: false
    });
    const result = hakunaTupu.removeEmpty(defaultObject);

    expect(result).to.deep.equal(notRemoveEmptyArray);
  });
});
