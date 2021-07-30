export default class Mercury {
  constructor(age) {
    this.age= age
  }

  convert(age){
    const convertAge = Math.floor(this.age / .24);
    return convertAge;
  }
}