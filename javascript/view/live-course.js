
var jit = jit || {};
jit.view = jit.view || {};


$(function( $ ){

  jit.view.LiveCourse = Backbone.View.extend({ 
    el: 'body',
    events: {
      'click #ask-button': 'addQuestion'
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

      //this.$el.append( new jit.view.Question({ model: question }).el );
      this.$ask.val('').focus();
    }
  });

});

