import { Component, OnInit } from '@angular/core';
import { Node } from '../shared/node';
import { NodesService } from '../shared/nodes.service';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { NgModel } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'create',
    templateUrl: './edit-create.component.html',
})
export class CreateComponent implements OnInit {
    node: Node = new Node(null, '','','', '', null, new Date(),'');
    nameButton = {name: "Создать", class: "in_edit3"};
    valids;


    constructor(private nodesService: NodesService, private router: Router,
        private activatedRoute: ActivatedRoute) { 
        
    }

    ngOnInit() { 
        this.valids = document.querySelectorAll('[required]')
    }

    back(){
        this.router.navigate(["todolist"])
    }

    doFunc(event){
        for(let i = 0; i< this.valids.length; i++){
            if(this.valids[i].classList.contains('ng-invalid')){
                document.querySelector('.error').innerHTML = 'Не заполнены все поля!'
                return;
            }
        }
        this.nodesService.addNode(this.node);
        this.router.navigate(["todolist"])
    }
}