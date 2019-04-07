function MyParentController() {
    var ctrl = this;
  
    // This would be loaded by $http etc.
    ctrl.list = [
      {
        name: 'Person 1',
        age: 10
      },
      {
        name: 'Person 2',
        age: 20
      }
    ];
  
    ctrl.updatePerson = function(person, prop, value) {
      person[prop] = value;
    };
  
    ctrl.deletePerson = function(person) {
      var idx = ctrl.list.indexOf(person);

      if (idx >= 0) {
        ctrl.list.splice(idx, 1);
      }
    };
  }
  
  angular.module('MyApp').component('myParent', {
    template: `
        <b>My List</b><br>
        <my-child ng-repeat="person in $ctrl.list" me="person" on-delete="$ctrl.deletePerson(person)" on-update="$ctrl.updatePerson(person, prop, value)">
        </my-child>`, // or use templateUrl
    controller: MyParentController
  });