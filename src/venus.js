export default class Venus {
  constructor(age) {
    this.age= age;
  }

  convert(){
    const convertVenusAge = Math.floor(this.age / .62);
    return convertVenusAge;
  }
}

