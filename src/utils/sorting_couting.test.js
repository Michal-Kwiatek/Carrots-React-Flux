import sort from './sorting_couting';


function fillTable(count) {
  let elements = [];

  while (elements.length < count) {
    elements.push({
      name: Math.random().toString(34).slice(2),
      carrotsCount: Math.round(Math.random() * 10000)
    })
  }
  
  return elements;
}


describe('Sorting by counting', () => {
  var elementsCount = 20000,  
      elements = fillTable(elementsCount),
      sorted;
  
 
  it(`Elements count before sorting should be ${elementsCount}`, () => {
    expect(elements.length).toBe(elementsCount)
  });

  it('Sorting time should be less than 10s', () => {
    var startTime = new Date().getTime();

    sorted = sort(elements);

    var endTime = new Date().getTime();
    var elapsedTime = (endTime-startTime) / 1000;

    console.info('Sorting time', elapsedTime+'s')
    expect(elapsedTime).toBeLessThan(10);
  });

  it(`Elements count after sorting should be ${elementsCount}`, () => {
    expect(sorted.length).toBe(elementsCount)
  });

  it('Each next element carrots count number should be equal or less', () => {
    let sortingWorks = true;
    
    for(let i = 0; i < sorted.length-1; i++) {
      if(sorted[i].carrotsCount < sorted[i+1].carrotsCount) {
        sortingWorks = false;
      }
    }

    expect(sortingWorks).toBe(true);
  });

});