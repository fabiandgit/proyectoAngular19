import { Component } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-weather',
  imports: [WeatherFormComponent, TableComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  title: string = 'Clima';
  city: string = '';
  feels_like: string = '';
  infoWeather: [string] = [''];
  isTable: boolean = false;
  columns: any = [
    'country',
    'weather',
    'description',
    'temp',
    'feels_like',
    'humidity',
    'pressure',
    'temp_max',
    'temp_min',
    'rain',
    'wind',
  ];

  getWeatherData(data: any) {
    console.log(data);
    this.infoWeather.splice(0, this.infoWeather.length); // Elimina todos los elementos

    if (data) {
      this.isTable = true;
      this.addArray(data);
      this.city = data.city.toUpperCase();
      this.feels_like = data.main.feels_like;
    }
  }
  addArray(data: any) {
    this.infoWeather.shift();
    this.infoWeather.push(data.sys.country);
    this.infoWeather.push(data.weather[0].main);
    this.infoWeather.push(data.weather[0].description);
    this.infoWeather.push(data.weather[0].description);
    this.infoWeather.push(data.main.temp);
    this.infoWeather.push(data.main.humidity);
    this.infoWeather.push(data.main.pressure);
    this.infoWeather.push(data.main.temp_max);
    this.infoWeather.push(data.main.temp_min);
    this.infoWeather.push(data.rain ? data.rain : 'sin lluvia');
    this.infoWeather.push(data.wind ? data.wind.speed : 'sin viento');
    console.log('this.infoWeather', this.infoWeather);
  }
}
