export default class Mars {
  constructor(age) {
    this.age = age;
  }

  convert() {
    const convertMarsAge = Math.floor(this.age * 1.88);
    return convertMarsAge;
  }
}