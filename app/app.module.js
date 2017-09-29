"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var todo_list_component_1 = require("./todo-list/todo-list.component");
var edit_details_component_1 = require("./edit-create/edit-details.component");
var create_component_1 = require("./edit-create/create.component");
var pipe_1 = require("./shared/pipe");
var nodes_service_1 = require("./shared/nodes.service");
var pager_service_1 = require("./shared/pager.service");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_module_1.AppRoutingModule, common_1.CommonModule],
        declarations: [app_component_1.AppComponent, todo_list_component_1.TodolistComponent, edit_details_component_1.EditdetailsComponent, create_component_1.CreateComponent, pipe_1.ClientFilterPipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: 'Window', useValue: window },
            nodes_service_1.NodesService, pager_service_1.PagerService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map