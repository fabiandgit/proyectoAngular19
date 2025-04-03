import {
  Component,
  Input,
  input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ModelTask } from '../../../models/task-model';

@Component({
  selector: 'app-todo-list',
  imports: [FontAwesomeModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
// task = input<string>();
export class TodoListComponent {
  @Input() task!: ModelTask;
  list: ModelTask[] = [];
  faCheck = faCheck; // Asigna el icono a una variable
  faTrash = faTrash; // Asigna el icono a una variable

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.list = JSON.parse(savedTasks); // Cargar tareas guardadas
      console.log(this.list);
    }
    console.log(savedTasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      console.log(this.task);
      if (this.task && this.task.name.trim() !== '') {
        this.list.push(this.task);
        localStorage.setItem('tasks', JSON.stringify(this.list));
        console.log('Task agregado y guardado:', this.task);
      }
    }
  }

  checkTask() {
    console.log('completada');
  }

  deleteTask() {
    console.log('eliminada');
  }
}
