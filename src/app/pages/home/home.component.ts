import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { DarkModeService } from '../../services/dark-mode.service';
import { welcome } from '../../constantes/const';

@Component({
  selector: 'app-home',
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  welcome: string = welcome;
}
