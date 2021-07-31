import Jupiter from './../src/jupiter.js'

describe('Jupiter', () => {
  
  test('should correctly change a persons age to the age in jupiter years', () => {
    const jupiter1 = new Jupiter(50)
    expect(jupiter1.convert()).toEqual(4);
  })

  test('should correctly give the life expectancy of someone living on jupiter', () =>{
    const jupiter2 = new Jupiter(50, "no","yes", "poor")
    expect(jupiter2.expectation()).toEqual(1);
  })
})