spa.component("issueNotes",{target:"#container4issueNotes"}),spa.extendComponent("issueNotes",{renderCallback:function(){"use strict";var e=$("#container4issueNotes");$("#issueNotesCount").text(e.find(".comment.system-false").length),$("#sysNotesCount").text(e.find(".comment.system-true").length),app.uiHelper.indicateLoading("#btnCommentsFullRefresh","remove")}});