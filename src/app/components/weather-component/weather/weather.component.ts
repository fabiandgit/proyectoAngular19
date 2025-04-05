import { Component } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  selector: 'app-weather',
  imports: [InputsComponent, ButtonsComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  title: string = 'titulo';
}
