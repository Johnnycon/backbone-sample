
var jit = jit || {};
jit.view = jit.view || {};


$(function($){
  'use strict';

  jit.view.Question = Backbone.View.extend({ 
    tagName: 'div',
    className: 'question',
    template: $('#question-template'),
    events: {
      'click .upvote': 'upvote'
    },
    initialize: function(options){
      //this.broker = options.broker;
      this.bind('any', function(){ console.log('any') });
      this.render();
    },
    render: function(){
      $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
      return this;
    },
    upvote: function(){

    }
  });
});
