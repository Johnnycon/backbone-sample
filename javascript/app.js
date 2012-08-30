// load in order of
// models
// collections
// views
// routers
// app

var jit = jit || {};
jit.model = jit.model || {};
jit.collection = jit.collection || {};
jit.view = jit.view || {};

var ENTER_KEY = 13;

// ***************************//
// applicatoin models
// ***************************//

$(function( $ ){
  'use strict';

  jit.model.Question = Backbone.Model.extend({
    defaults: {
      votes: 0,
      content: ''
    }
  });

  jit.collection.Questions = Backbone.Collection.extend({
    model: jit.model.Question
  });

});




// ***************************//
// application views
// ***************************//
$(function( $ ) {
  'use strict';

  jit.view.Question = Backbone.View.extend({
    //el: '#question-list',
    tagName: 'div',
    template: $("#question-template").html(),
    events: {
      'click .upvote': 'upvote'
    },

    initialize: function(){
      this.render();
    },

    render: function(){
      $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
      console.log(this.$el);
      return this;
    },

    upvote:function(){
      var votes = this.$('.votes')[0];
      var voteTotal = (this.model.get('votes') + 1);
      this.model.set('votes', voteTotal);
      votes.innerText = this.model.get('votes');
      console.log(this.$el);
    }

  });

  jit.view.App = Backbone.View.extend({
    el: '#question-panel',
    template: $('#footer-template').html(),
    events: {
      'click #ask': 'addQuestion'
    },

    initialize: function() {
      console.log('in AppView initialize');
      this.$footer = this.$("footer");
      this.$ask = this.$("#ask-input");
      this.collection = new jit.collection.Questions();
      this.collection.bind('add', this.appendItem, this); 

      this.render();
    },

    render: function(){
      console.log('in AppView render');
      this.$footer.html(Mustache.to_html(this.template,{}));

      console.log('AppView render');
    },

    addQuestion: function(e) {
      e.preventDefault();
      console.log('in AppView addQuestion');
      console.log( this.$ask.val() );
      // add view
      var questionModel = new jit.model.Question({ content: this.$ask.val() });
      this.collection.add({ model: questionModel });

      var view = new jit.view.Question({ model: questionModel });
      this.$("#question-list").append(view.el);
      this.$ask.val('').focus();
    },

    appendItem: function(question){
      console.log('in AppView appendItem');
      //var itemView = new ItemView({
      //  model: item
      //});
      //$('ul', this.el).append(itemView.render().el);
    }    


  });

});







// ***************************//
// initialize application
// ***************************//
$(function() {
 new jit.view.App();
});
