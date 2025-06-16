import { Component, EventEmitter, Output } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from '../../../shared/alerts/alerts.component';
import { WeatherService } from '../../../services/weather.service';
import {
  buttonSearch,
  successAlert,
  warningAlert,
  errorAlert,
  GetCity,
  errorGetCity,
  errorGetApi,
} from '@constantes/const';

@Component({
  selector: 'app-weather-form',
  imports: [
    InputsComponent,
    ButtonsComponent,
    ReactiveFormsModule,
    AlertsComponent,
  ],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  @Output() cityWeather = new EventEmitter<{}>();
  weatherform: FormGroup;
  country: FormControl;
  titleButton: string = buttonSearch;
  city: string = '';
  isEmpty: boolean = false;
  typeAlert: string = '';
  complement: string = '';

  constructor(public weatherService: WeatherService) {
    this.country = new FormControl('');
    this.weatherform = new FormGroup({
      country: this.country,
    });
  }

  sendInfo() {
    this.city = this.weatherform.value.country;
    let latitud = '';
    let longitud = '';
    this.isEmpty = false;
    this.weatherService.getWeatherGeo(this.city).subscribe(
      (data) => {
        if (data.length > 0) {
          latitud = data[0].lat;
          longitud = data[0].lon;
          this.getWeatherInfo(latitud, longitud, this.city);
          this.country.reset();
          this.isEmpty = true;
          this.typeAlert = successAlert;
          this.complement = GetCity;
        } else {
          this.isEmpty = true;
          this.typeAlert = warningAlert;
          this.complement = errorGetCity;
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
        this.typeAlert = errorAlert;
        this.complement = errorGetApi;
      }
    );
    this.country.reset();
  }

  getWeatherInfo(latitud: any, longitud: any, city: string) {
    this.weatherService.getWeather(latitud, longitud).subscribe(
      (data) => {
        if (data) {
          const updatedData = {
            ...data, // Copiar propiedades existentes del objeto data
            city: city, // Añadir la nueva propiedad 'city'
          };
          this.cityWeather.emit(updatedData);
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }
}
