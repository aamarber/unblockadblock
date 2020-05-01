(function hideElPaisPopup() {
    const popupContainer = document.getElementsByClassName('fc-ab-root')[0];

    if (popupContainer) {
        popupContainer.style.position = 'unset';
    }

    document.body.style.overflow = 'auto';
})();