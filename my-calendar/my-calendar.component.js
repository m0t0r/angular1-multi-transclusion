(function () {
  'use strict';

  angular
    .module('app', [])
    .directive('myCalendar', myCalendar);

    function myCalendar() {
      return {
        restrict: 'E',
        transclude: {
          dayOfWeek: 'daySlot',
          date: 'dateSlot',
          month: 'monthSlot'
        },
        scope: {},
        template: `
          <div class="my-calendar-container">
            <div class="my-calendar-title" ng-transclude="daySlot"></div>
            <div class="my-calendar-body">
              <div class="my-calendar-day" ng-transclude="dateSlot"></div>
              <div class="my-calendar-month" ng-transclude="monthSlot"></div>
            </div>
          </div>
        `
      }
    }
}());
