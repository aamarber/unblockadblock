chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status != 'complete') {
    return;
  }

  const scriptMapper = getScriptMapper();

  const script = scriptMapper.getScript(new URL(tab.url).hostname);

  if(!script){
    return;
  }
  
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: [ './hider/observer.js', script ]
  });
});

const getScriptMapper = function () {
  return {
    scriptsMapList: [
      buildScriptMap(/elpais/, './hider/fcabrootHider.js'),
      buildScriptMap(/abc/, './hider/fcabrootHider.js'),
      buildScriptMap(/20minutos/, './hider/fcabrootHider.js'),
      buildScriptMap(/heraldo/, './hider/fcabrootHider.js'),
      buildScriptMap(/elindependiente/, './hider/fcabrootHider.js'),
      buildScriptMap(/genbeta/, './hider/fcabrootHider.js'),
      buildScriptMap(/xataka/, './hider/fcabrootHider.js')
    ],
    getScript: function (domain) {
      const scriptMap = this.scriptsMapList.filter(x => x.matches(domain))[0];

      if (!scriptMap) {
        return null;
      }

      return scriptMap.script;
    }
  }
}

const buildScriptMap = function (domainRegex, script) {
  return {
    domainRegex: domainRegex,
    script: script,
    matches: function (currentDomain) {
      return this.domainRegex.test(currentDomain);
    }
  }
}