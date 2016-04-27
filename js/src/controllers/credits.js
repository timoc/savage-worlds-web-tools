angular.module("baseApp").controller(
	"creditsController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			$rootScope.showSciFiCreatorMenu = false;
			$rootScope.showChargenMenu = false;
			$translate(['APP_TITLE', 'INDEX_CREDITS']).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_CREDITS + " | " + translation.APP_TITLE;
				$rootScope.subtitle_tag = translation.INDEX_CREDITS;
			});
		}
	]
);
