"use strict";
var Node = (function () {
    function Node(id, username, userset, title, detail, usetime, date, status) {
        this.id = id;
        this.username = username;
        this.userset = userset;
        this.title = title;
        this.detail = detail;
        this.usetime = usetime;
        this.date = date;
        this.status = status;
    }
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=node.js.map