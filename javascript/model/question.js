var jit = jit || {};
jit.model = jit.model || {};

$(function(){
  'use strict';

  jit.model.Question = Backbone.Model.extend({
    defaults: {
      question: "",
      votes: 0
    }
  });

});
