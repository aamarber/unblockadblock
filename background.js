chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'elpais.com' },
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostSuffix: 'lasprovincias.es' }
        }),
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});