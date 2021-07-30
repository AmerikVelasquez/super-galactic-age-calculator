export default class Venus {
  constructor(age) {
    this.age= age;
  }

  convert(age){
    const convertVenusAge = Math.floor(this.age / .62);
    return convertVenusAge;
  }
}

