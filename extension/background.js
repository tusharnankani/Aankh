// function countTabs() {
// 	chrome.tabs.query({ pinned: false }, function(tabs) {
// 		// localStorage.setItem('tabs_count', JSON.stringify(tabs.length));
// 		alert('tabs_count: ');
// 	});
// }

// chrome.tabs.onCreated.addListener(countTabs);
// chrome.tabs.onRemoved.addListener(countTabs);

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
// 	if (changeInfo != null && changeInfo.pinned != null) {
// 		countTabs();
// 	}
// });

function countTabs() {
	chrome.tabs.query({ pinned: false }, function(tabs) {
		console.log('tabs_count: ' + tabs.length);
		setBadge(tabs.length);
	});
}

function setBadge(value) {
	chrome.storage.sync.set({ tabs_count: value }, function() {
		console.log('Value is set to ' + value);
	});
	if (value > 1) {
		console.log('Please close other tabs');
	}
}

chrome.tabs.onCreated.addListener(countTabs);
chrome.tabs.onRemoved.addListener(countTabs);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo != null && changeInfo.pinned != null) {
		countTabs();
	}
});

countTabs();
