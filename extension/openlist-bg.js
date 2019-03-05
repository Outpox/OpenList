browser.runtime.onInstalled.addListener(function(details) {
    browser.contextMenus.create({"title": "OpenList", "id": "OpenList-ContextMenuOpen", "contexts":["selection"]});

    browser.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId === "OpenList-ContextMenuOpen") {
            openList(info.selectionText);
        }
    });
});
