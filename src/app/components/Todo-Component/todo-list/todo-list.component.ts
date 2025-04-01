import {
  Component,
  Input,
  input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
// task = input<string>();
export class TodoListComponent {
  @Input() task: string = '';
  list: string[] = [];

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.list = JSON.parse(savedTasks); // Cargar tareas guardadas
    }
    // console.log(savedTasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.list);
    if (changes['task'] && changes['task'].currentValue) {
      this.list.push(this.task); // Agrega el nuevo task a la lista
      // console.log(this.list);

      // Guardar la lista en localStorage
      const parceJson = localStorage.setItem(
        'tasks',
        JSON.stringify(this.list)
      );
    }
  }
}
