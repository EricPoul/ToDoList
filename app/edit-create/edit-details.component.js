"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var node_1 = require("../shared/node");
var nodes_service_1 = require("../shared/nodes.service");
var router_1 = require("@angular/router");
var EditdetailsComponent = (function () {
    function EditdetailsComponent(nodesService, router, activatedRoute) {
        this.nodesService = nodesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.node = null;
        this.editPage = true;
        this.nameButton = { name: "Удалить", class: "in_edit2" };
    }
    EditdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            _this.nodesService.getNode(id).then(function (result) { _this.node = result, _this.copynode = new node_1.Node(_this.node.id, _this.node.username, _this.node.userset, _this.node.title, _this.node.detail, _this.node.usetime, _this.node.date, _this.node.status); });
        });
    };
    EditdetailsComponent.prototype.back = function () {
        this.nodesService.editNode(this.copynode, this.copynode.id - 1);
        this.router.navigate(["todolist"]);
    };
    EditdetailsComponent.prototype.edit = function () {
        this.nodesService.editNode(this.node, this.copynode.id - 1);
        this.router.navigate(["todolist"]);
    };
    EditdetailsComponent.prototype.doFunc = function (event) {
        if (confirm('Вы точно хотите удалить запись?').valueOf() == true) {
            this.nodesService.deleteNode(this.copynode.id);
            console.log(this.copynode.id);
            this.router.navigate(["todolist"]);
        }
    };
    return EditdetailsComponent;
}());
EditdetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'edit-details',
        templateUrl: './edit-create.component.html',
    }),
    __metadata("design:paramtypes", [nodes_service_1.NodesService, router_1.Router,
        router_1.ActivatedRoute])
], EditdetailsComponent);
exports.EditdetailsComponent = EditdetailsComponent;
//# sourceMappingURL=edit-details.component.js.map