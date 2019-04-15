function hoverState() {
    return {
      restrict: "A",

      // Use the link functionality to connect 
      // to the element that it is attached to and 
      // apply jQuery to it
      link: function($scope, $element, $attrs) {
        $element.on("mouseenter", () => {
          $element.css("color", "red");
        });
        $element.on("mouseleave", () => {
          $element.css("color", "black");
        });
      }
    };
  };

angular
    .module ('MyApp')
    .directive ('myDirective', hoverState);
