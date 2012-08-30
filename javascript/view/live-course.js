
var jit = jit || {};
jit.view = jit.view || {};


$(function( $ ){

  jit.view.LiveCourse = Backbone.View.extend({ 
    el: 'body',
    events: {
      'click #ask-button': 'addQuestion',
      'click #resort-button': 'reSortQuestions'
    },
    initialize: function( options ){
      broker = options.broker;
      this.$ask = this.$('#ask-input');
    },

    addQuestion: function(e){
      e.preventDefault();

      var question = new jit.model.Question({
        question : this.$ask.val() 
      });

      broker.trigger(jit.app.LivePageEvents.QuestionAdded, question);

      this.$ask.val('').focus();
    },
    reSortQuestions: function(){
      broker.trigger(jit.app.LivePageEvents.ReSortQuestions, 'nada');
    }
  });

});

