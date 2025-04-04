import { Component } from '@angular/core';
// import { ButtonsComponent } from './shared/buttons/buttons.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
