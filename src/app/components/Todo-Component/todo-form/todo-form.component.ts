import { Component, input, output } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { ModelTask } from '../../../models/task-model';

@Component({
  selector: 'app-todo-form',
  imports: [InputsComponent, ReactiveFormsModule, ButtonsComponent],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  TodoForm: FormGroup;
  todoInput: FormControl;
  task = output<{}>();
  //button
  titleButton: string = 'Crear';
  valueTask: ModelTask = {
    name: '',
    completed: false,
  };
  constructor() {
    this.todoInput = new FormControl('');
    this.TodoForm = new FormGroup({
      todoInput: this.todoInput,
    });
  }

  TodoTask() {
    this.valueTask.name = this.TodoForm.value.todoInput;
    this.task.emit(this.valueTask);
  }
}
