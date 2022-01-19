let currentTabs;

// window.onload = (e) => {
// 	// fetch from localStorage;
// 	chrome.storage.local.get([ 'tabs_count' ], function(result) {
// 		if (result.tabs_count === undefined) currentTabs = 1;
// 		else currentTabs = result.tabs_count;
// 		// console.log('Value currently is ' + result.key);
// 	});
// };

document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({ pinned: false }, function(tabs) {
		document.getElementById('tabs_count').innerHTML = tabs.length;
	});

	// console.log(window.screenTop);
	// console.log(window.screenY);
	if (window.screenTop !== 0 || window.screenY !== 0) {
		document.getElementById('full_screen').innerHTML = 'true';
	}
	// else {
	// 	document.getElementById('full_screen').innerHTML = 'false';
	// }
});
