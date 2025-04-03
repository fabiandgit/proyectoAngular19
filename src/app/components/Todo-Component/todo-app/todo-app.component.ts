import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { ModelTask } from '../../../models/task-model';

@Component({
  selector: 'app-todo-app',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  title: string = 'Tareas Pendientes';
  task: ModelTask;

  constructor() {
    this.task = {
      id: 0,
      name: '',
      completed: false,
    };
  }

  sendInfo(e: any) {
    this.task = { ...e };
  }
}
