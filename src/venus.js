export default class Venus {
  constructor(age, smoke, drink, livingWage) {
    this.age= age;
    this.smoke = smoke;
    this.drink = drink;
    this.livingWage = livingWage;
  }

  convert(){
    const convertVenusAge = Math.floor(this.age / .62);
    return convertVenusAge;
  }

  expectation(){
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/.62)- (this.age/.62));
      return life;
    }
    else if (this.smoke === "yes"){
      life = Math.floor(((life- 8)/.62)-(this.age /.62)) ;
      return life;
    }
    else if (this.drink === "yes"){
      life = Math.floor(((life -10)/.62) -(this.age / .62));
      return life ;
    }
  }

  old(){
    
  }
}

