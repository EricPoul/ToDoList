import { Component, OnInit } from '@angular/core';
import { Node } from '../shared/node';
import { NodesService } from '../shared/nodes.service';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { NgModel } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'edit-details',
    templateUrl: './edit-create.component.html',
})
export class EditdetailsComponent implements OnInit {
    node: Node = null;
    copynode;
    editPage = true;
    nameButton = {name: "Удалить", class: "in_edit2"};
    constructor(private nodesService: NodesService, private router: Router,
        private activatedRoute: ActivatedRoute) { 
        
    }

    ngOnInit() { 
        this.activatedRoute.params.forEach((params: Params)=>{
            let id = +params["id"];
            this.nodesService.getNode(id).then(result => {this.node = result, this.copynode = new Node(this.node.id,this.node.username,this.node.userset,this.node.title,this.node.detail,this.node.usetime,this.node.date,this.node.status)})
        })  
    }

    back(){
        this.nodesService.editNode( this.copynode ,this.copynode.id);
        this.router.navigate(["todolist"])
    }

    edit(){
        this.nodesService.editNode( this.node ,this.copynode.id);
        this.router.navigate(["todolist"])
    }

    doFunc(event){
        if(confirm('Вы точно хотите удалить запись?').valueOf() == true){
            this.nodesService.deleteNode(this.copynode.id);
            console.log(this.copynode.id)
            this.router.navigate(["todolist"])
        }
    }
}