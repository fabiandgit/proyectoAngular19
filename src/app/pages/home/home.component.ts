import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-home',
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
