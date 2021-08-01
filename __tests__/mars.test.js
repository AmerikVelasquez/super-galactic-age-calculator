import Mars from './../src/mars.js'

describe('Mars', () => {
  
  test('should correctly change a persons age to the age in mars years', () => {
    const mars1 = new Mars(10)
    expect(mars1.convert()).toEqual(5);
  })

  test('should correctly show the life expectancy of someone living on mars', () => {
    const mars2 = new Mars(10,"yes","no","rich")
    expect(mars2.expectation()).toEqual(32);
  })

  test('should correctly return the amount of years past life expectancy', () =>{
    const mars3 = new Mars(84,"no","no","rich")
    expect(mars3.old()).toEqual(2);
  })
})