import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { WeatherComponent } from '../../components/weather-component/weather/weather.component';

@Component({
  selector: 'app-weather-aplication',
  imports: [NavComponent, WeatherComponent],
  templateUrl: './weather-aplication.component.html',
  styleUrl: './weather-aplication.component.css',
})
export class WeatherAplicationComponent {}
