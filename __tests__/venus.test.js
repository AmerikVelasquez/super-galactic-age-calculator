import Venus from './../src/venus.js'

describe('Venus', () => {
  
  test('should correctly change a persons age to the age in venus years', () => {
    const venus1 = new Venus(31)
    expect(venus1.convert()).toEqual(50);
  })
})