
var jit = jit || {};
jit.collection = jit.collection || {};


$(function($){
  'use strict';

  jit.collection.Questions = Backbone.Collection.extend({ 
    model: jit.model.Question
  });

});
