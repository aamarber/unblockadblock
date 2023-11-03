(function hide() {
    

    const onPopupAdded = () => {
        const popupContainer = document.getElementsByTagName('ytd-popup-container')[0];

        const overlay = document.getElementsByTagName('tp-yt-iron-overlay-backdrop')[0];

        if (popupContainer) {
            popupContainer.setAttribute('style','position: unset !important; display: none !important;');
        }

        if(overlay){
            overlay.setAttribute('style','position: unset !important; display: none !important;');
        }

        if(popupContainer && overlay){
            document.body.style.overflow = 'auto';
        }
    }

    globals.observer.onObserved(document, (x => x.localName === 'ytd-popup-container'), onPopupAdded);
})();