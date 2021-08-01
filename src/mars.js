export default class Mars {
  constructor(age, smoke, drink, livingWage) {
    this.age = age;
    this.smoke = smoke;
    this.drink = drink;
    this.livingWage = livingWage;
  }

  convert() {
    const convertMarsAge = Math.floor(this.age / 1.88);
    return convertMarsAge;
  }

  expectation(){
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/1.88)- (this.age/1.88));
      return life;
    }
    else if (this.smoke === "yes"){
      life = Math.floor(((life- 8)/1.88)-(this.age /1.88)) ;
      return life;
    }
    else if (this.drink === "yes"){
      life = Math.floor(((life -10)/1.88) -(this.age / 1.88));
      return life ;
    }
  }

  old(){
    
  }
}