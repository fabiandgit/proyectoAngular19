import { Component } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';
import { TableComponent } from '../../../shared/table/table.component';
import { weather, SearchWeather, TitletableWeather } from '@constantes/const';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-weather',
  imports: [WeatherFormComponent, AlertsComponent, TableComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  weather: string = weather;
  SearchWeather: string = SearchWeather;
  city: string = '';
  feels_like: string = '';
  infoWeather: [string] = [''];
  isTable: boolean = false;
  columns = TitletableWeather;
  emptyAlert = false;
  typeAlert = '';
  complement = '';

  getAlert(alert: any) {
    console.log('alert', alert);
    if (alert) {
      this.emptyAlert = true;
      this.typeAlert = alert.type;
      this.complement = alert.complement;
    } else {
      this.emptyAlert = false;
    }
  }
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
    // console.log('this.infoWeather', this.infoWeather);
  }
}
