export default class Jupiter {
  constructor(age) {
    this.age = age;
  }

  convert() {
    const convertJupiterAge = Math.floor(this.age * 11.86);
    return convertJupiterAge;
  }
}