"Use Strict"
{
   function resources(){
       let vm=this;
    vm.inventory = {
    wood:5,
    water:5,
    food:5,
    houses:1,
    wells:1,
    farms:1,
    days:1};

 //------------------------------------functions--//

 function setResources(){
     return vm.inventory
 };

 }
    angular
        .module("", [])
        .service("resources",resources);
        
}