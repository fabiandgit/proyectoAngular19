import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';
import { lightMode, darkMode, Task, Weather } from '@constantes/const';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isMode: boolean = false;
  faHome = faHome;
  lightMode: string = lightMode;
  darkMode: string = darkMode;
  Task: string = Task;
  Weather: string = Weather;

  constructor(public DarkModeService: DarkModeService) {}

  changeMode() {
    if (this.isMode) {
      this.DarkModeService.enableDarkMode();
    } else {
      this.DarkModeService.disableDarkMode();
    }
    this.isMode = !this.isMode;
  }
}
