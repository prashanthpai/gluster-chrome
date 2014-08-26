__module_name__ = "glusterfs"
__module_version__ = "1.0"
__module_description__ = "Converts integer to bugzilla/gerrit URL"
__module_author__ = "Prashanth Pai <ppai@redhat.com>"

import xchat

GF_GERRIT_MIN = 1
GF_GERRIT_MAX = 9999
GF_BUGZILLA_MIN = 761733
GF_BUGZILLA_MAX = 1200000


def handler(word, word_eol, userdata):
    for i in word:
        for w in i.split():
            if w.isdigit():
                wint = int(w)
                if GF_GERRIT_MIN <= wint < GF_GERRIT_MAX:
                    print "http://review.gluster.org/%s" % (wint)
                elif GF_BUGZILLA_MIN <= wint <= GF_BUGZILLA_MAX:
                    print "https://bugzilla.redhat.com/show_bug.cgi?id=%s" \
                        % (wint)
    return xchat.EAT_NONE


EVENTS = [
    ("Channel Message", 1),
    ("Channel Msg Hilight", 1),
    ("Private Message", 1),
    ("Private Message to Dialog", 1)
]

for event in EVENTS:
    xchat.hook_print(event[0], handler, event)

print "GlusterFS xchat plugin loaded!"
