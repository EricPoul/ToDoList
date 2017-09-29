import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Node } from './node';

import { Observable } from "rxjs/Observable";

let todoList = [
    new Node(1, 'Poul Eric', 'Некто О.О.', 'Создание внешнего вида', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'done'),
    new Node(2, 'Большие имя и Фамилия', 'Некто О.О.', 'Придумать внешний вид', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new Node(3, 'Poul Eric', 'Некто О.О.', 'Создание методов', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new Node(4, 'Poul Eric', 'Некто О.О.', 'to do list4', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'notstarted'),
    new Node(5, 'Poul Eric', 'Некто О.О.', 'to do list5', 'Делаю to do list  на Angular 2Делаю to do list  на Angular 2Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new Node(6, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'done'),
    new Node(7, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new Node(8, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'notstarted'),
    new Node(9, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'performed'),
    new Node(10, 'Poul Eric', 'Некто О.О.', 'to do list6', 'Делаю to do list  на Angular 2', 4, new Date(), 'done'),
];

    for(let i = 11; i < 50; i++){
        todoList.push(new Node(i, 'Пример '+ i, 'Некто О.О.', 'Test Thema', 'Тестовые значения для пагинации', 4, new Date(), 'notstarted'))
    }
let todoListPromise = Promise.resolve(todoList);

@Injectable()
export class NodesService {
    ngOnInit(){
    }

    public getAllList(): Promise<any[]> {
        return todoListPromise
    }

    public getNode(id: number) : Promise<any> {
        return todoListPromise.then(todolist => todolist.find(x => x.id == id));
    }

    public editNode(node: Node, id: number) {
        todoListPromise.then(todolist => this.editId(todolist, id, node));
    }

    public addNode(node: Node){
        todoListPromise.then(todolist => todolist.push(node))
    }

    public deleteNode(id: number){
        return todoListPromise.then(todolist => this.findId(todolist, id))
    }

    public getFilter(filter: Node){
        return todoListPromise.then(todolist => this.transform(todolist, filter));
    }
    
    private editId(arr, id, node){
        for(let i = 0; i<arr.length; i++){
            if(arr[i].id == id){
                arr[i] = node;
            }
        }
        return arr
    }

    private findId(arr, id){
        for(let i = 0; i<arr.length; i++){
            if(arr[i].id == id){
                arr.splice(i,1)
            }
        }
        return arr
    }

    private transform(items: Node[], filter: Node): Node[] {
        if (!items || !filter) {
          return items;
        }
        return items.filter((item: Node) => this.applyFilter(item, filter));
      }

    private applyFilter(node: Node, filter: Node): boolean {
        for (let field in filter) {
          if (filter[field]) {
            if (typeof filter[field] === 'string') {
              if (node[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                return false;
              }
            } else if (typeof filter[field] === 'number') {
              if (node[field] !== filter[field]) {
                return false;
              }
            }
          }
        }
        return true;
      }
}