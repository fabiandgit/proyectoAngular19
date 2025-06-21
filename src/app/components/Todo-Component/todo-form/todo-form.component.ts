import { Component, input, output } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { ModelTask } from '../../../models/task-model';
import { addTask, buttonCreate } from '@constantes/const';

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
  titleButton: string = buttonCreate;
  isButton: boolean = false;
  valueTask: ModelTask = {
    id: 0,
    name: '',
    completed: false,
  };

  addTask: string = addTask;
  constructor() {
    this.todoInput = new FormControl('', Validators.required);
    this.TodoForm = new FormGroup({
      todoInput: this.todoInput,
    });
  }

  TodoTask() {
    if (this.TodoForm.valid) {
      this.isButton = true;
      this.valueTask.id++;
      this.valueTask.name = this.TodoForm.value.todoInput;
      this.task.emit(this.valueTask);
      this.todoInput.reset();
    }
    this.isButton = false;
  }
}
