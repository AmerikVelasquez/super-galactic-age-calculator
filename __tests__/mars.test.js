import Mars from './../src/mars.js'

describe('Mars', () => {
  
  test('should correctly change a persons age to the age in mars years', () => {
    const mars1 = new Mars(88)
    expect(mars1.age).toEqual(188);
  })
})