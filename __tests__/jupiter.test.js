import Jupiter from './../src/jupiter.js'

describe('Jupiter', () => {
  
  test('should correctly change a persons age to the age in jupiter years', () => {
    const jupiter1 = new Jupiter(50)
    expect(jupiter1.age).toEqual(593);
  })
})