// NEW: Define your own directive (See http://docs.angularjs.org/guide/directive )
angular.module("answer", []).directive("expandText", function() {
	return {
		restrict: "A",
		template: "<p><i>{{text}}</i></p>",
		replace: true
	}
});