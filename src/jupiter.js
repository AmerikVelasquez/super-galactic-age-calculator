export default class Jupiter {
  constructor(age, livingWage) {
    this.age = age;
    this.livingWage = livingWage;
  }

  convert() {
    const convertJupiterAge = Math.floor(this.age / 11.86);
    return convertJupiterAge;
  }

  expectation() {
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/11.86)- (this.age/11.86));
      return life;
    }
  }
  
  old() {
    let life = 80;
    let older = Math.floor((this.age/11.86) - (life/11.86));
    return older; 

  }
}