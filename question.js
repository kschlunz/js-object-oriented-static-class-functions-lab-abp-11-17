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
       return this.All().find(function(question){
         return ;
       })
     }

}

Question._All=[];
