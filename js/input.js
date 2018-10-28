$(document).click(function (event) {
    if (!$(event.target).is("#helpIcon")) {
        gamePaused = false;
        hideHelptText();
    }
});