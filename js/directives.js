app.directive('backgroundDirective', [backgroundDirective]);

function backgroundDirective() {
  return {
    controller: ['$scope', function($scope) {
      $scope.sayHi = function() {
        alert('Hi! Thanks for clicking on me!');
      };
    }],
    link: function(scope, element, attrs) {
      var oldColor = element.css('background-color');
      var oldText = element.html();
      var counter = 0;
      element.html(oldText + ' '+counter);
      console.log(attrs);

      element.on('mouseenter', function(event) {
        counter++;
        element.css('background-color', attrs.color || oldColor);
        element.html(oldText + ' '+counter);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
        element.html(oldText + ' '+counter);
      });

      element.on('click', function(event) {
        scope.sayHi();
      });
    },
    restrict: 'A'
  };
}
