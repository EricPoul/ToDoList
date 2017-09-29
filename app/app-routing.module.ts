import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TodolistComponent } from "./todo-list/todo-list.component";
import { EditdetailsComponent } from "./edit-create/edit-details.component";
import { CreateComponent } from "./edit-create/create.component";

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "todolist",
            pathMatch: "full"
        },
        {
            path: "todolist",
            component: TodolistComponent,
        },
        {
            path: "editnode/:id",
            component: EditdetailsComponent,
        },
        {
            path: "createnode",
            component: CreateComponent,
        },

    ])],
    exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }