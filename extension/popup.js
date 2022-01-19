document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({ pinned: false }, function(tabs) {
		document.getElementById('tabs_count').innerHTML = tabs.length;
	});
});
