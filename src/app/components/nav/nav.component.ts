import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';
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
