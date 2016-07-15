"use strict";

(function(){
  angular.module("bleets")
  .controller("BleetShowController", [
    "BleetFactory",
    "$stateParams",
    "$state",
    BleetShowControllerFunction
  ])

  function BleetShowControllerFunction(BleetFactory, $stateParams, $state){
    console.log("hey")
    this.bleet = BleetFactory.get({id: $stateParams.id});

    this.destroy = function(){
    this.bleet.$delete({id: $stateParams.id}).then(function(response){
    $state.go("bleetIndex", ({id: response.id}));
  })
}
  }
})();
