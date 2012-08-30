
var jit = jit || {};
jit.view = jit.view || {};


$(function($){
  'use strict';

  jit.view.Question = Backbone.View.extend({ 
    //tagName: 'div',
    className: 'question',
    template: $('#question-template').html(),
    events: {
      'click .upvote': 'upvote'
    },
    initialize: function(){
      this.render();
    },
    render: function(){
      var html = Mustache.to_html(this.template, this.model.toJSON());
      this.$el.html( html );

      return this;

    },
    upvote: function( e ){
      e.preventDefault();

      this.model.set('votes', this.model.get('votes') + 1);
      $('.votes', this.el).html( this.model.get('votes') );
    }
  });
});
