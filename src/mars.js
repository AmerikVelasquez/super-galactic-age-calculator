export default class Mars {
  constructor(age) {
    this.age = age;
  }

  convert(age) {
    const convertMarsAge = Math.floor(this.age * 1.88);
    return convertMarsAge;
  }
}