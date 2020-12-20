(function hide() {
    const popupContainer = document.getElementsByClassName('fc-ab-root')[0];

    if (popupContainer) {
        popupContainer.setAttribute('style','position: unset !important');

        document.body.style.overflow = 'auto';

        return true;
    }

    return false;
})();