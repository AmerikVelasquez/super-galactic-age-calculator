import Mars from './../src/mars.js'

describe('Mars', () => {
  
  test('should correctly change a persons age to the age in mars years', () => {
    const mars1 = new Mars(10)
    expect(mars1.convert()).toEqual(18);
  })
})