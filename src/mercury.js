export default class Mercury {
  constructor(age) {
    this.age= age
  }

  convert(){
    const convertMercuryAge = Math.floor(this.age / .24);
    return convertMercuryAge;
  }

  expectation(){

  }
}