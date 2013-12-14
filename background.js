function getClickHandler() {
    return function(info, tab) {
        alert("クリックされました");
    };
};

var parentId = chrome.contextMenus.create({
    "title" : "how2SayInEng",
    "type" : "normal",
    "contexts" : ["all"],
    "onclick" : getClickHandler()
});
