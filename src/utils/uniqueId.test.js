import * as utils from './uniqueId';


function hasDuplicates(array) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}


describe('Unique ID', () => {

  it(`Should generate 20k unique ID`, () => {
    let idArray = [];

    for (let i = 0; i < 20000; i++) {
      idArray.push(utils.generateId());
    }

    const duplicated = hasDuplicates(idArray);

    expect(duplicated).toBeFalsy();
  });


});