
var jit = jit || {};
jit.view = jit.view || {};


$(function( $ ){

  jit.view.QuestionList = Backbone.View.extend({ 
    el: '#question-list',
    initialize: function( options ){
      broker = options.broker;
      broker.on(jit.app.LivePageEvents.QuestionAdded, this.addQuestion, this);
      //broker.on(jit.app.LivePageEvents.ReSortQuestions, this.reSortQuestions, this);

    },
    render: function(){

    },
    addQuestion: function( arg ){
      question = new jit.view.Question({ model: arg });
      //console.log(this.$el);
      this.$el.append(question.$el);
    },
    reSortQuestions: function(){
      //console.log('resort triggered');
    }
  });

});
