import Mercury from './../src/mercury.js'

describe('Mercury', () => {
  
  test('should correctly change a persons age to the age in mercury years', () => {
    const mercury1 = new Mercury(12)
    expect(mercury1.age).toEqual(50)
  })
})