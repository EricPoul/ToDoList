"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var node_1 = require("./node");
var todoList = [
    new node_1.Node(1, 'Poul Eric', 'Некто О.О.', 'Создание внешнего вида', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'done'),
    new node_1.Node(2, 'Большие имя и Фамилия', 'Некто О.О.', 'Придумать внешний вид', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new node_1.Node(3, 'Poul Eric', 'Некто О.О.', 'Создание методов', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new node_1.Node(4, 'Poul Eric', 'Некто О.О.', 'to do list4', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'notstarted'),
    new node_1.Node(5, 'Poul Eric', 'Некто О.О.', 'to do list5', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new node_1.Node(6, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'done'),
    new node_1.Node(7, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new node_1.Node(8, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'notstarted'),
    new node_1.Node(9, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new node_1.Node(10, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'done'),
];
for (var i = 11; i < 50; i++) {
    todoList.push(new node_1.Node(i, 'Пример ' + i, 'Некто О.О.', 'Test Thema', 'Тестовые значения для пагинации', 4, new Date(), 'notstarted'));
}
var todoListPromise = Promise.resolve(todoList);
var NodesService = (function () {
    function NodesService() {
    }
    NodesService.prototype.ngOnInit = function () {
    };
    NodesService.prototype.getAllList = function () {
        return todoListPromise;
    };
    NodesService.prototype.getNode = function (id) {
        return todoListPromise.then(function (todolist) { return todolist.find(function (x) { return x.id == id; }); });
    };
    NodesService.prototype.editNode = function (node, ids) {
        todoListPromise.then(function (todolist) { return todolist[ids] = node; });
    };
    NodesService.prototype.addNode = function (node) {
        todoListPromise.then(function (todolist) { return todolist.push(node); });
    };
    NodesService.prototype.deleteNode = function (id) {
        var _this = this;
        return todoListPromise.then(function (todolist) { return _this.findId(todolist, id); });
    };
    NodesService.prototype.getFilter = function (filter) {
        var _this = this;
        return todoListPromise.then(function (todolist) { return _this.transform(todolist, filter); });
    };
    NodesService.prototype.findId = function (arr, id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                arr.splice(i, 1);
            }
        }
        return arr;
    };
    NodesService.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    NodesService.prototype.applyFilter = function (node, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (node[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (node[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return NodesService;
}());
NodesService = __decorate([
    core_1.Injectable()
], NodesService);
exports.NodesService = NodesService;
//# sourceMappingURL=nodes.service.js.map