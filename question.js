'use strict';
class Question {
 constructor(questions){
   this.questions = questions
   this.save()
 }
save(){
  this.constructor._All.push(this)
}
  static All(){
      return this._All;
    }

    static FindQuestion(questions){
       return this.All().filter(function(question){
         return question.questions === question;
       })
     }

}

Question._All=[];

let questions = "What's your favorite food?"