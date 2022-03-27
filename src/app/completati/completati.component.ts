import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  tasks: Todo[] = []

  task!: any

  messaggio: any = "Recupero task da fare..."


  constructor(private tasksService: TodosService) {
  }

  ngOnInit(): any{
    this.tasks = this.tasksService.getImpegni()

   if(!this.tasks.length){this.provaPromise()}

  }

  provaPromise():any{
    let p =new Promise((succ,err) =>
    {setTimeout(()=>{succ(this.messaggio = "Non ci sono task completati")},2000)},
    )
    return p
  }


}
