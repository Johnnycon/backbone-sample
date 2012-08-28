// load in order of
// models
// collections
// views
// routers
// app

var app = app || {};
var ENTER_KEY = 13;

// ***************************//
// applicatoin models
// ***************************//

$(function( $ ){
  'use strict';

  app.Question = Backbone.Model.extend({
    defaults: {
      votes: 0,
      content: ''
    }
  });

  app.QuestionList = Backbone.Collection.extend({
    model: app.Question
  });

});




// ***************************//
// application views
// ***************************//
$(function( $ ) {
  'use strict';

  app.QuestionView = Backbone.View.extend({
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

  
  app.AppView = Backbone.View.extend({
    el: '#question-panel',
    template: $('#footer-template').html(),
    events: {
      'click #ask': 'addQuestion'
    },

    initialize: function() {
      console.log('in AppView initialize');
      this.$footer = this.$("footer");
      this.$ask = this.$("#ask-input");
      this.collection = new app.QuestionList();
      //this.collection.bind('add', this.appendItem, this); 

      this.render();
    },

    render: function(){
      console.log('in AppView render');
      this.$footer.html(Mustache.to_html(this.template,{}));
    },

    addQuestion: function(e) {
      e.preventDefault();
      console.log('in AppView addQuestion');
      console.log( this.$ask.val() );
      // add view
      var questionModel = new app.Question({ content: this.$ask.val() });
      var view = new app.QuestionView({ model: questionModel });
      this.$("#question-list").append(view.el);
      this.$ask.val('').focus();
    }

    //appendItem: function(item){
      //var itemView = new ItemView({
        //model: item
      //});
      //$('ul', this.el).append(itemView.render().el);
    //}    


  });

});







// ***************************//
// initialize application
// ***************************//
$(function() {
 new app.AppView();
});
