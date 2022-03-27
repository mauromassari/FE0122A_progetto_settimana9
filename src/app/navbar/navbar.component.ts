import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  deleteLocal(){
    localStorage.clear()
    window.location.reload();

  }

}


