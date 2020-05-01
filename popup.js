const hideButton = document.getElementById('hide');

hideButton.onclick = function () {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                file: 'elpaishider.js'
            });
      });
};