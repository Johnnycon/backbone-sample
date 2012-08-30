
var jit = jit || {};
jit.view = jit.view || {};


$(function( $ ){

  jit.view.LiveCourse = Backbone.View.extend({ 
    el: 'body',
    events: {
      'click #ask-button': 'addQuestion'
    },
    initialize: function(){
      this.$ask = this.$('#ask-input');
    },

    addQuestion: function(e){
      e.preventDefault();
      console.log('question added');

      var question = new jit.model.Question({
        content: this.$ask.val() 
      });

      this.$el.append( new jit.view.Question({ model: question }).el );
      this.$ask.val('').focus();
    }
  });

});

