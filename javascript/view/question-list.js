
var jit = jit || {};
jit.view = jit.view || {};


$(function( $ ){

  jit.view.QuestionList = Backbone.View.extend({ 
    el: '#question-list',
    initialize: function( options ){
      broker = options.broker;
      broker.on(jit.app.LivePageEvents.QuestionAdded, this.addQuestion, this);
      broker.on(jit.app.LivePageEvents.ReSortQuestions, this.reSortQuestions, this);
      this.collection = new jit.collection.Questions();
      this.childViews = [];

    },
    render: function(){

    },
    addQuestion: function( questionModel ){
      question = new jit.view.Question({ model: questionModel });
      this.childViews.push(question);
      this.collection.add(questionModel);
      this.$el.append(question.$el);
    },
    reSortQuestions: function( ){
      console.log('resort triggered');

      this.$el.html();
      this.collection.sort();

      var local = this;

      _.each(a.childViews, function( view ){ view.remove() });

      _.each(a.collection.models, function( model ){
        question = new jit.view.Question({ model: model });
        local.childViews.push(question);
        local.$el.append(question.$el);
      });

    }

  });

});
