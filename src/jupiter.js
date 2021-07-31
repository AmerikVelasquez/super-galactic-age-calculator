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
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/11.86)- (this.age/11.86));
      return life;
    }
    else if (this.smoke === "yes"){
      life = Math.floor(((life- 8)/11.86)-(this.age /11.86)) ;
      return life;
    }
    else if (this.drink === "yes"){
      life = Math.floor(((life -10)/11.86) -(this.age / 11.86));
      return life ;
    }
  }
}