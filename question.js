'use strict';
class Question {
 constructor(question){
   this.question = question
   this.save()
 }
save(){
  this.constructor._All.push(this)
}
  static All(){
      return this._All;
    }

    static FindQuestion(question){
       return this.All()(function(question){
         return question.find(question);
       })
     }

}

Question._All=[];
