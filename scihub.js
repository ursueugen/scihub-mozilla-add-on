// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

var URL = "http://sci-hub.tw/";

// Firefox always has both chrome and browser objects, Chrome has only chrome
 var browser = browser || chrome

function openSciHubTab(tab) {
    if ( tab.active ){
        browser.tabs.create({
            url: URL + tab.url,
            index: tab.index + 1
        });
    }
}

/*
 *  EVENT LISTENER
 */

// Listener
browser.browserAction.onClicked.addListener(function(tab) { openSciHubTab(tab) });
