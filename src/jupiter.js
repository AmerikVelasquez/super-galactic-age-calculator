export default class Jupiter {
  constructor(age, smoke, drink, livingWage) {
    this.age = age;
    this.smoke = smoke;
    this.drink = drink;
    this.livingWage = livingWage;
  }

  convert() {
    const convertJupiterAge = Math.floor(this.age / 11.86);
    return convertJupiterAge;
  }

  expectation(){

  }
}