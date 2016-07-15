"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetIndexController", [
    "BleetFactory",
    BleetIndexControllerFunction
  ]);

  function BleetIndexControllerFunction(BleetFactory){
    this.bleets = BleetFactory.query();
  }
}());
