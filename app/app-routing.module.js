"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var todo_list_component_1 = require("./todo-list/todo-list.component");
var edit_details_component_1 = require("./edit-create/edit-details.component");
var create_component_1 = require("./edit-create/create.component");
// В данном примере настройки маршрутизации выделены в отдельный модуль.
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot([
                {
                    path: "",
                    redirectTo: "todolist",
                    pathMatch: "full"
                },
                {
                    path: "todolist",
                    component: todo_list_component_1.TodolistComponent,
                },
                {
                    path: "editnode/:id",
                    component: edit_details_component_1.EditdetailsComponent,
                },
                {
                    path: "createnode",
                    component: create_component_1.CreateComponent,
                },
            ])],
        exports: [router_1.RouterModule] // делаем re-export модуля для использования директив при маршрутизации
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map