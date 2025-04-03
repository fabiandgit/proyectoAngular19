import { Component } from '@angular/core';
import { TodoAplicationComponent } from './pages/todo-aplication/todo-aplication.component';

import { DarkModeService } from './services/dark-mode.service';
// import { ButtonsComponent } from './shared/buttons/buttons.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [TodoAplicationComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isMode: boolean = false;

  constructor(public DarkModeService: DarkModeService) {}

  changeMode() {
    this.isMode = !this.isMode;
    if (this.isMode) {
      this.DarkModeService.enableDarkMode();
    } else {
      this.DarkModeService.disableDarkMode();
    }
  }
}
