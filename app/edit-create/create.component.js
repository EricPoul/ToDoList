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
var CreateComponent = (function () {
    function CreateComponent(nodesService, router, activatedRoute) {
        this.nodesService = nodesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.node = new node_1.Node(null, '', '', '', '', null, new Date(), '');
        this.nameButton = { name: "Создать", class: "in_edit3" };
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.valids = document.querySelectorAll('[required]');
    };
    CreateComponent.prototype.back = function () {
        this.router.navigate(["todolist"]);
    };
    CreateComponent.prototype.doFunc = function (event) {
        for (var i = 0; i < this.valids.length; i++) {
            if (this.valids[i].classList.contains('ng-invalid')) {
                document.querySelector('.error').innerHTML = 'Не заполнены все поля!';
                return;
            }
        }
        this.nodesService.addNode(this.node);
        this.router.navigate(["todolist"]);
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create',
        templateUrl: './edit-create.component.html',
    }),
    __metadata("design:paramtypes", [nodes_service_1.NodesService, router_1.Router,
        router_1.ActivatedRoute])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map