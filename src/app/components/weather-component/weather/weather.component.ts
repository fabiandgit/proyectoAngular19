import { Component } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';

@Component({
  selector: 'app-weather',
  imports: [WeatherFormComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {}
