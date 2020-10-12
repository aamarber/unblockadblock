(
    function main() {

        const initHiderButton = function () {
            const scriptMapper = getScriptMapper();

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        file: scriptMapper.getScript(new URL(tabs[0].url).hostname)
                    });
            });
        }

        const getScriptMapper = function () {
            return {
                scriptsMapList: [
                    buildScriptMap(/elpais/, './hider/fcabrootHider.js'),
                    buildScriptMap(/abc/, './hider/fcabrootHider.js'),
                    buildScriptMap(/20minutos/, './hider/fcabrootHider.js'),
                    buildScriptMap(/niusdiario/, './hider/niusdiarioHider.js'),
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

        initHiderButton();
    }
)();