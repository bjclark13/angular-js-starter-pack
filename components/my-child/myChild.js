function MyChildController() {
    const ctrl = this;
    
    ctrl.delete = function() {
        // Call parent's onDelete function that is passed down
      ctrl.onDelete({me: ctrl.me});
    };
  
    ctrl.update = function(prop, value) {
        // Call parent's onUpdate function that is passed down
        ctrl.onUpdate({me: ctrl.me, prop: prop, value: value});
    };
  }
  
  angular.module('MyApp').component('myChild', {
    template: `
    <hr>
    <div>
      Name: {{$ctrl.me.name}}<br>
      Age: {{$ctrl.me.age}} <button ng-click="$ctrl.update('age', $ctrl.me.age+1)">Add 1</button><br>
      <button ng-click="$ctrl.delete()">Delete</button>
    </div>`, // or use templateUrl
    controller: MyChildController,
    bindings: {
      me: '<',
      onDelete: '&',
      onUpdate: '&'
    }
});