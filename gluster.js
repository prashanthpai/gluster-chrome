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
chrome.contextMenus.create({"title": "Bugzilla Bug",
                            "contexts":['selection'],
                            "onclick": openBugzilla});

// Gerrit
function openGerrit(info, tab){
    queryString = info.selectionText.trim()
    if (isNumeric(queryString)){
        chrome.tabs.create({url: "http://review.gluster.org/" + queryString})
    }
}
chrome.contextMenus.create({"title": "Gerrit Change",
                            "contexts":['selection'],
                            "onclick": openGerrit});

// glusterfs code
function openGlusterFS(info, tab){
    queryString = info.selectionText.trim()
    chrome.tabs.create({url: "https://github.com/gluster/glusterfs/search?q=" + queryString})
}
chrome.contextMenus.create({"title": "Search in GlusterFS source",
                            "contexts":['selection'],
                            "onclick": openGlusterFS});

// gluster-swift code
function openGlusterSwift(info, tab){
    queryString = info.selectionText.trim()
    chrome.tabs.create({url: "https://github.com/gluster/gluster-swift/search?q=" + queryString})
}
chrome.contextMenus.create({"title": "Search in Gluster-Swift source",
                            "contexts":['selection'],
                            "onclick": openGlusterSwift});

// Swift code
function openSwift(info, tab){
    queryString = info.selectionText.trim()
    chrome.tabs.create({url: "https://github.com/openstack/swift/search?q=" + queryString})
}
chrome.contextMenus.create({"title": "Search in Openstack Swift source",
                            "contexts":['selection'],
                            "onclick": openSwift});


// Launchpad gluster-swift
function openLaunchpad(info, tab){
    queryString = info.selectionText.trim()
    if (isNumeric(queryString)){
        chrome.tabs.create({url: "https://bugs.launchpad.net/gluster-swift/+bug/" + queryString})
    }
}
chrome.contextMenus.create({"title": "Launchpad Bug (gluster-swift)",
                            "contexts":['selection'],
                            "onclick": openLaunchpad});
