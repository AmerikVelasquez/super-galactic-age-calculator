export default class Mercury {
  constructor(age,smoke,drink,livingWage) {
    this.age= age;
    this.smoke = smoke;
    this.drink = drink;
    this.livingWage = livingWage;
  }

  convert(){
    const convertMercuryAge = Math.floor(this.age / .24);
    return convertMercuryAge;
  }

  expectation(){
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/.24)- (this.age/.24));
      return life;
    }
    else if (this.smoke === "yes"){
      life = Math.floor(((life- 8)/.24)-(this.age /.24)) ;
      return life;
    }
    else if (this.drink === "yes"){
      life = Math.floor(((life -10)/.24) -(this.age / .24));
      return life ;
    }
  }
}