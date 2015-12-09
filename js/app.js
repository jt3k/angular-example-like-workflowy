angular.module('components', ['contenteditable']);
angular.module('app', ['components']);
angular.module('components')
  .directive('tree', function($compile) {
    'use strict';

    return {
      restrict: 'E',
      terminal: true,
      scope: {
        val: '=',
        parentData: '='
      },

      link: function(scope, element, attrs) {

        // scope.keydown = function($event) {
        //   if ($event.keyCode === 13) {
        //       console.log(scope);
        //   }
        // }
        var template = `<div class="node">
        <div class="node__dot" ng-click="deleteMe(parentData, val)" ng-show="val.label">&bull;</div>
        <div class="node__label" strip-br="true" contenteditable="true"' ng-keydown="keydown(parentData, val)" ng-model='val.label'></div>`;
        if (angular.isArray(scope.val.childrens)) {
          template += `<div class="node__childrens">
            <div ng-repeat="item in val.childrens">
              <tree val="item" parent-data="val.childrens"></tree>
            </div>
          </div>`;
        }
        template += '</div>';


        scope.deleteMe = function(parent, element) {
          _.pull(scope.parentData, scope.val)
          scope.val = {};
        };
        var newElement = angular.element(template);
        $compile(newElement)(scope);
        element.replaceWith(newElement);

        newElement.find('.node__label').on('keydown', function(e) {
          // console.log(arguments);
            if (e.keyCode === 13) {
              var index = scope.parentData.indexOf(scope.val);
              scope.parentData.splice(index,0, {label: scope.val.label});
              document.execCommand('insertHTML', false, "");
              scope.$apply();
              return false;
            }
          });

      }
    }
  });