
var jit = jit || {};
jit.model = jit.model || {};
jit.collection = jit.collection || {};
jit.view = jit.view || {};

var KeyMap = {
  "Enter":13,
  "Aha": 61,
  "Huh": 47
};
var LivePageEvents = {
  "QuestionAdded" : "jit:QuestionAdded",
  "QuestionUpvoted" : "jit:QuestionUpvoted"
};

var jit.app.broker = jit.app.broker || {};
_.extend(jit.app.broker, Backbone.Events);



// models
$(function($){
  'use strict';

  jit.model.Question = Backbone.Model.extend({ });
});

// collections
$(function($){
  'use strict';

  jit.collection.Questions = Backbone.Collection.extend({ 
    model: jit.model.Question
  });

});


// views
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
      this.broker = options.broker;
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


  jit.view.Questions = Backbone.View.extend({ 
    el: '#question-list',
    initialize: function(){

    },
    render: function(){

    },
    listener: mediator,
  });

  jit.view.QuestionFooter = Backbone.View.extend({

  });


  jit.view.LivePage = Backbone.View.extend({ 
    el: 'body',
    events: {
      'click #ask-button': 'addQuestion'
    },
    initialize: function(){
      this.$ask = this.$('#ask-input');
    },

    addQuestion: function(e){
      e.preventDefault();

      var question = new jit.model.Question({
        content: this.$ask.val() 
      });

      mediator.publish('jit:questionEntered', question);

      //this.$el.append( new jit.view.Question({ model: question }).el );
      this.$ask.val('').focus();
    }
  });

});

$(function($){
    mediator.subscribe('jit:questionEntered', function( q ){
      // need to put this on the instance itself. can't create new 
      // one each time question added. 
      console.log(q.get('content'));
    });
});


// initialize application
$(function(){
  new jit.view.LivePage();
});
