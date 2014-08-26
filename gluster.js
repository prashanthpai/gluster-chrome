function isNumeric(num){
    return !isNaN(num)
}

// Bugzilla
function openBugzilla(info, tab){
    queryString = info.selectionText.trim()
    if (isNumeric(queryString)){
        chrome.tabs.create({url: "https://bugzilla.redhat.com/show_bug.cgi?id=" + queryString})
    }
}
chrome.contextMenus.create({"title": "RH Bugzilla Bug",
                            "contexts":['selection'],
                            "onclick": openBugzilla});

// Gerrit GlusterFS
function openGerritGF(info, tab){
    queryString = info.selectionText.trim()
    if (isNumeric(queryString)){
        chrome.tabs.create({url: "http://review.gluster.org/" + queryString})
    }
}
chrome.contextMenus.create({"title": "gluster.org Gerrit Change",
                            "contexts":['selection'],
                            "onclick": openGerritGF});

// Gerrit OpenStack
function openGerritOS(info, tab){
    queryString = info.selectionText.trim()
    if (isNumeric(queryString)){
        chrome.tabs.create({url: "http://review.openstack.org/" + queryString})
    }
}
chrome.contextMenus.create({"title": "openstack.org Gerrit Change",
                            "contexts":['selection'],
                            "onclick": openGerritOS});
