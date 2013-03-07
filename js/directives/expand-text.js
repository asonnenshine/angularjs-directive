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
		// NEW: Moved template HTML into a separate file
		templateUrl: "templates/expand-text.html",
		replace: true,
		scope: {
			showMoreString: "@showMoreString",
			showLessString: "@showLessString",
			text: "=text"
		},
		link: function(scope, element, attributes) {
			var maxLength = attributes["maxLength"] || 100;
			if(scope.text.length > maxLength) {
				scope.truncated = true;
				var splitText = truncateWordBounds(scope.text, maxLength);
				scope.text = splitText.truncated;
				scope.expandedText = splitText.expanded;
			}
			else {
				scope.disabled = true; // no need for truncation
			}
		}
	}
});