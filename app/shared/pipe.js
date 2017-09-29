"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClientFilterPipe = (function () {
    function ClientFilterPipe() {
    }
    ClientFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Node} Client
     * @param {Node} filter
     * @return {boolean}
     */
    ClientFilterPipe.prototype.applyFilter = function (client, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (client[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (client[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return ClientFilterPipe;
}());
ClientFilterPipe = __decorate([
    core_1.Pipe({
        name: 'nodefilter',
        pure: false
    })
], ClientFilterPipe);
exports.ClientFilterPipe = ClientFilterPipe;
//# sourceMappingURL=pipe.js.map