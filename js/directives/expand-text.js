angular.module("answer", []).directive("expandText", function() {
	// NEW: Truncation function
	function truncateWordBounds(full, len) {
		var last = full.substr(len, 1);
		var abbrev = full.substr(0, len);
		if (RegExp(/[A-Za-z]/).test(last)) {
		abbrev = abbrev.replace(/[A-Za-z]+$/, '');
		}
		return abbrev;
	}

	return {
		restrict: "A",
		template: "<p>{{text}}</p>",
		replace: true,
		// NEW: Add linking function
		link: function(scope, element, attributes) {
			var maxLength = 100;
			if(scope.text.length > maxLength) {
				scope.text = truncateWordBounds(scope.text, maxLength) + "...";
			}
		}
	}
});