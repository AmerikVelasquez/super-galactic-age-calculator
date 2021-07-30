export default class Venus {
  constructor(age) {
    this.age= age;
  }

  convert(age){
    const convertAge = Math.floor(this.age / .62);
    return convertAge;
  }
}

