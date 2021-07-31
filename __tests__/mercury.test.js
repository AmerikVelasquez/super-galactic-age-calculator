import Mercury from './../src/mercury.js'

describe('Mercury', () => {
  
  test('should correctly change a persons age to the age in mercury years', () => {
    const mercury1 = new Mercury(12)
    expect(mercury1.convert()).toEqual(50);
  })

  test('should return life expectancy', () => {
    const mercury2 = new Mercury(12,"no","yes","rich")
    expect(mercury2.expectation()).toEqual(241);
  })

  test('should return amount of years above life expectancy', () => {
    const mercury3 = new Mercury(83,"no","yes","rich")
    expect(mercury3.old()).toEqual(12);
  })
})