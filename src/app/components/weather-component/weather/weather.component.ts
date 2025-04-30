import { Component } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';

@Component({
  selector: 'app-weather',
  imports: [WeatherFormComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  title: string = 'Clima';
  city: string = '';
  feels_like: string = '';

  getWeatherData(data: any) {
    console.log(data);
    this.city = data.city.toUpperCase();
    this.feels_like = data.main.feels_like;
  }
}
