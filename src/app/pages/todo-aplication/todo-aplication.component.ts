import { Component } from '@angular/core';
import { TodoAppComponent } from '../../components/Todo-Component/todo-app/todo-app.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-todo-aplication',
  imports: [TodoAppComponent, NavComponent],
  templateUrl: './todo-aplication.component.html',
  styleUrl: './todo-aplication.component.css',
})
export class TodoAplicationComponent {}
