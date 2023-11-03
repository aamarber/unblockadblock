class Observer{
    onObserved(document, condition, callback) {
        let observer = new MutationObserver(mutations => {
            let addedNodes = mutations.map(m => m.addedNodes).flat();
    
            if(addedNodes.find(x => Array.from(x).find(condition))){
                callback();
            }
         });
    
         observer.observe(document, { childList: true, subtree: true });
    };
} 

let globals = {observer: new Observer()};