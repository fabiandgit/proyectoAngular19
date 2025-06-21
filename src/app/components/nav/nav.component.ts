import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';
import { lightMode, darkMode, Task, Weather } from '@constantes/const';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isMode: boolean = false;
  faHome = faHome;
  faBars = faBars;
  lightMode: string = lightMode;
  darkMode: string = darkMode;
  Task: string = Task;
  Weather: string = Weather;
  isMenuOpen: boolean = false;

  constructor(public DarkModeService: DarkModeService) {}

  changeMode() {
    if (this.isMode) {
      this.DarkModeService.enableDarkMode();
    } else {
      this.DarkModeService.disableDarkMode();
    }
    this.isMode = !this.isMode;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
