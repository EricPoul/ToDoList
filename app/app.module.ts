import { NgModule } from "@angular/core";
import { CommonModule }       from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { TodolistComponent } from "./todo-list/todo-list.component";
import { EditdetailsComponent } from "./edit-create/edit-details.component";
import { CreateComponent } from "./edit-create/create.component";

import { ClientFilterPipe } from './shared/pipe';
import { NodesService } from "./shared/nodes.service";
import { PagerService } from './shared/pager.service'

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, CommonModule ],
    declarations: [ AppComponent, TodolistComponent, EditdetailsComponent, CreateComponent, ClientFilterPipe ],
    bootstrap: [AppComponent],
    providers: [
        { provide: 'Window',  useValue: window },
        NodesService, PagerService
    ],
})
export class AppModule { } 