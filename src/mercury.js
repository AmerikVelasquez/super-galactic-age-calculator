export default class Mercury {
  constructor(age,livingWage) {
    this.age= age;
   
    this.livingWage = livingWage;
  }

  convert() {
    const convertMercuryAge = Math.floor(this.age / .24);
    return convertMercuryAge;
  }

  expectation() {
    let life = 80
    if (this.livingWage === "poor"){
      life = Math.floor(((life - 10)/.24)- (this.age/.24));
      return life;
    }
  }
  
  old() {
    let life = 80;
    let older = Math.floor((this.age/.24) - (life/.24));
    return older; 
  }
}