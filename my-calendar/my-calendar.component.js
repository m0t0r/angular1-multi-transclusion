(function () {
  'use strict';

  angular
    .module('app', [])
    .component('myCalendar', {
      transclude: {
        dayOfWeek: 'daySlot',
        date: 'dateSlot',
        month: 'monthSlot'
      },
      template: `
          <div class="my-calendar-container">
            <div class="my-calendar-title" ng-transclude="daySlot"></div>
            <div class="my-calendar-body">
              <div class="my-calendar-day" ng-transclude="dateSlot"></div>
              <div class="my-calendar-month" ng-transclude="monthSlot"></div>
            </div>
          </div>
        `
    });
}());
