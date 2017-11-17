'use strict';
class Question {
 constructor(content){
   this.content = content
   this.save()
 }
save(){
  this.constructor._All.push(this)
}
  static All(){
      return this._All;
    }

    static FindQuestion(question){
       return this.All().find(function(content){
          return content;
       })
     }

}

Question._All=[];
