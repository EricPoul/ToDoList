import { Component, OnInit } from '@angular/core';
import { Node } from '../shared/node';
import { NodesService } from '../shared/nodes.service';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { PagerService } from '../shared/pager.service'

@Component({
    moduleId: module.id,
    selector: 'todolist',
    templateUrl: './todo-list.component.html',
})
export class TodolistComponent implements OnInit {
    filter: Node = new Node(null, '','','', '', null, new Date(),'');
    todoList;
    copytodoList;
    limmitFor;
 
    pager: any = {};
    
    pagedItems: any[];

    constructor(private nodesService: NodesService, private router: Router,
        private activatedRoute: ActivatedRoute, private pagerService: PagerService) { 
        
    }

    ngOnInit() { 
        this.nodesService.getAllList().then(result => {this.todoList = result, this.setPage(1)})
    }

    del(id, page, event){
        if(confirm('Вы точно хотите удалить запись?').valueOf() == true){
            this.nodesService.deleteNode(id).then(x => this.setPage(page));
            
            console.log(id)
        }
        event.stopPropagation();
    }

    edit(index){
        this.router.navigate(["editnode", index])
    }

    height(index){
        let elem = document.querySelectorAll('.node')
        if(!elem[index].classList.contains('active')){
            elem[index].classList.add("active");
            elem[index].classList.add("active");
        }else{
            elem[index].classList.remove("active");           
        }
    }

    filterAll(){
        document.querySelector('.filters').classList.toggle('active')
    }

    filt(){
        this.nodesService.getFilter(this.filter).then(result => {this.todoList = result, this.setPage(1)})
    }

    setPage(page: number) {
        if (page < 1) {
            return;
        }

        // get pager object from service
        
        this.pager = this.pagerService.getPager(this.todoList.length, page);

        // get current page of items
        this.pagedItems = this.todoList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}