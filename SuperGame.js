"use strict";
{
    let game = {
        controller: function (GameService) {
            let vm = this;
            vm.stuff = GameService.SetResources();
            console.log(vm.stuff);
        },

        template: `<h2 ng-init="count=0">Today is day {{count}}</h2>
        <button ng-click="count = count + 1" ng-click="day()">Get Water</button><br>
        <p id="water"></p><br>
        <button ng-click="count = count + 1" >Get Food</button><br>
        <p></p><br>
        <button ng-click="count = count + 1">Get Wood</button><br>
        <p></p><br>
        <button ng-click="count = count + 1">Build Well</button>Cost 5  Wood<br>
        <p></p><br> 
        <button ng-click="count = count + 1">Build House</button>Cost 5 Wood<br>
        <p></p>
        <button>Quit</button>
            `
    };

    game.$inject = ["GameService"];
    angular
        .module("")
        .component("game", game);
}