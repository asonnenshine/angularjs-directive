angular.module("answer", []).directive("expandText", function() {
	function truncateWordBounds(full, len) {
		var last = full.substr(len, 1);
		var abbrev = full.substr(0, len);
		if (RegExp(/[A-Za-z]/).test(last)) {
		abbrev = abbrev.replace(/[A-Za-z]+$/, '');
		}
		return {truncated : abbrev, expanded: full.substr(abbrev.length)};
	}
	return {
		restrict: "A",
		templateUrl: "partials/expand-text.html",
		replace: true,
		scope: {
			showMoreLabel: "@showMoreLabel",
			showLessLabel: "@showLessLabel"
		},
		link: function(scope, element, attributes) {
			var maxLength = attributes["maxLength"] || 100;
			scope.text = attributes["text"];
			if(scope.text.length < maxLength) {
				scope.disabled = true; // no need for truncation
			}
			else {
				scope.truncated = true;
				var splitText = truncateWordBounds(scope.text, maxLength);
				scope.text = splitText.truncated;
				scope.expandedText = splitText.expanded;
			}
		}
	}
});