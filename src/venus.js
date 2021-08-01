export default class Venus {
  constructor(age, livingWage) {
    this.age= age;
    this.livingWage = livingWage;
  }

  convert() {
    const convertVenusAge = Math.floor(this.age / .62);
    return convertVenusAge;
  }

  expectation() {
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/.62)- (this.age/.62));
      return life;
    }
  }

  old() {
    let life = 80;
    let older = Math.floor((this.age/.62) - (life/.62));
    return older; 
  }
}

