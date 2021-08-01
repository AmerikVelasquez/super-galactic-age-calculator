export default class Mars {
  constructor(age, livingWage) {
    this.age = age;

    this.livingWage = livingWage;
  }

  convert() {
    const convertMarsAge = Math.floor(this.age / 1.88);
    return convertMarsAge;
  }

  expectation() {
    let life = 80
    if (this.livingWage === "poor"){
      life =Math.floor(((life - 10)/1.88)- (this.age/1.88));
      return life;
    }
  }

  old() {
    let life = 80;
    let older = Math.floor((this.age/1.88) - (life/1.88));
    return older; 
  
  }
}