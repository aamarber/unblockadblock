chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlMatches: '(elpais|abc|20minutos|niusdiario)\.(com|es)' },
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});