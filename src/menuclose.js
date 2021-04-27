$(document).mouseup(function (e) {
    var container = $("mobile-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});