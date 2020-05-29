(
    function main() {

        const initHiderButton = function () {
            const hideButton = document.getElementById('hide');

            const scriptMapper = getScriptMapper();

            hideButton.onclick = function () {

                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {
                            file: scriptMapper.getScript(new URL(tabs[0].url).hostname)
                        });
                });
            };
        }

        const getScriptMapper = function () {
            return {
                scriptsMapList: [
                    buildScriptMap(/elpais/, 'elpaishider.js'),
                    buildScriptMap(/abc/, 'elpaishider.js'),
                    buildScriptMap(/20minutos/, 'elpaishider.js'),
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
                    console.error(currentDomain);
                    console.error('HOLA');
                    return this.domainRegex.test(currentDomain);
                }
            }
        }

        initHiderButton();
    }
)();