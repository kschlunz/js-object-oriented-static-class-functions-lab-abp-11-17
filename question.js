'use strict';
class Question {
 constructor(){
   this.save()
 }
save(){
  this.constructor._All.push(this)
}
  static All(){
      return this._All;
    }

  constructor(question){
    this.save()
  }

}

Question._All=[];
