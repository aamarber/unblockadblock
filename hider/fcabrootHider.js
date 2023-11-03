class FcRootHider {
    constructor(){
        this.classSelector = 'fc-ab-root';
    }
    
    hide() {
    
        const onPopupAdded = () => {
            const popupContainer = document.getElementsByClassName(this.classSelector)[0];
    
            console.log(popupContainer);
    
            if (!popupContainer) { 
                return;
            }
                
            popupContainer.setAttribute('style','position: unset !important; display: none !important');
    
            document.body.style.overflow = 'auto';
        }
    
        globals.observer.onObserved(document, (x => x.className === this.classSelector), onPopupAdded);
    }
}

(function(){ new FcRootHider().hide()})();