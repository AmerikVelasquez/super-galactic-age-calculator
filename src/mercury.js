export default class Mercury {
  constructor(age) {
    this.age= age
  }

  convert(age){
    const convertMercuryAge = Math.floor(this.age / .24);
    return convertMercuryAge;
  }
}