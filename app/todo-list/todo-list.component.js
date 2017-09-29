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
var pager_service_1 = require("../shared/pager.service");
var TodolistComponent = (function () {
    function TodolistComponent(nodesService, router, activatedRoute, pagerService) {
        this.nodesService = nodesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pagerService = pagerService;
        this.filter = new node_1.Node(null, '', '', '', '', null, new Date(), '');
        this.pager = {};
    }
    TodolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nodesService.getAllList().then(function (result) { _this.todoList = result, _this.setPage(1); });
    };
    TodolistComponent.prototype.del = function (id, page, event) {
        var _this = this;
        if (confirm('Вы точно хотите удалить запись?').valueOf() == true) {
            this.nodesService.deleteNode(id).then(function (x) { return _this.setPage(page); });
            console.log(id);
        }
        event.stopPropagation();
    };
    TodolistComponent.prototype.edit = function (index) {
        this.router.navigate(["editnode", index]);
    };
    TodolistComponent.prototype.height = function (index) {
        var elem = document.querySelectorAll('.node');
        if (!elem[index].classList.contains('active')) {
            elem[index].classList.add("active");
            elem[index].classList.add("active");
        }
        else {
            elem[index].classList.remove("active");
        }
    };
    TodolistComponent.prototype.filterAll = function () {
        document.querySelector('.filters').classList.toggle('active');
    };
    TodolistComponent.prototype.filt = function () {
        var _this = this;
        this.nodesService.getFilter(this.filter).then(function (result) { _this.todoList = result, _this.setPage(1); });
    };
    TodolistComponent.prototype.setPage = function (page) {
        if (page < 1) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.todoList.length, page);
        // get current page of items
        this.pagedItems = this.todoList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return TodolistComponent;
}());
TodolistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todolist',
        templateUrl: './todo-list.component.html',
    }),
    __metadata("design:paramtypes", [nodes_service_1.NodesService, router_1.Router,
        router_1.ActivatedRoute, pager_service_1.PagerService])
], TodolistComponent);
exports.TodolistComponent = TodolistComponent;
//# sourceMappingURL=todo-list.component.js.map