import { Component, Input, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ModelTask } from '../../../models/task-model';
import { NgClass } from '@angular/common';
import { textTodoList } from '@constantes/const';

@Component({
  selector: 'app-todo-list',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
// task = input<string>();
export class TodoListComponent {
  @Input() task!: ModelTask;
  list: ModelTask[] = [];
  faCheck = faCheck; // Asigna el icono a una variable
  faTrash = faTrash;
  NoTasks = textTodoList;

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.list = JSON.parse(savedTasks); // Cargar tareas guardadas
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      if (this.task && this.task.name.trim() !== '') {
        this.list.push(this.task);
        localStorage.setItem('tasks', JSON.stringify(this.list));
        console.log('Task agregado y guardado:', this.task);
      }
    }
  }

  checkTask(id: number) {
    this.list.map((index) => {
      if (id == index.id) {
        index.completed = true;
      }
    });
  }

  deleteTask(id: number) {
    const localStorageTask = localStorage.getItem('tasks') || '[]';
    // se convierte a tipo json
    const storedList = JSON.parse(localStorageTask);
    const updatedList = storedList.filter((item: any) => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedList));
    // Actualizamos la lista en el componente
    this.list = updatedList;
    // if (this.list.length == 0) {
    //   localStorage.removeItem('tasks');
    // }
    this.list.length === 0 && localStorage.removeItem('tasks');
  }
}
