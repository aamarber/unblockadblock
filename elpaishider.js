(function () {
    const popupContainer = document.getElementsByClassName('fc-ab-root')[0];

    if (!popupContainer) {
        return;
    }

    popupContainer.style.position = 'unset';

    document.body.style.overflow = 'auto';
})();