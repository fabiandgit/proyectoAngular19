import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAplicationComponent } from './todo-aplication.component';

describe('TodoAplicationComponent', () => {
  let component: TodoAplicationComponent;
  let fixture: ComponentFixture<TodoAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
