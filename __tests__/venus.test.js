import Venus from './../src/venus.js'

describe('Venus', () => {
  
  test('should correctly change a persons age to the age in venus years', () => {
    const venus1 = new Venus(31)
    expect(venus1.convert()).toEqual(50);
  })

  test('should correctly show life expectancy on venus',() =>{
    const venus2 = new Venus(31,"no","no","poor")
    expect(venus2.expectation()).toEqual(112);
  })
})