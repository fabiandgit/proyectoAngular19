import { Component, EventEmitter, Output } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  cityErrorField,
  countryErrorField,
} from '@constantes/const';

@Component({
  selector: 'app-weather-form',
  imports: [InputsComponent, ButtonsComponent, ReactiveFormsModule],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  @Output() cityWeather = new EventEmitter<{}>();
  @Output() sendAlert = new EventEmitter<{}>();
  weatherform: FormGroup;
  country: FormControl;
  city: FormControl;
  titleButton: string = buttonSearch;
  country2: string = '';
  city2: string = '';
  isEmpty: boolean = false;
  typeAlert: string = '';
  complement: string = '';
  countryErrorField: string = countryErrorField;
  cityErrorField: string = cityErrorField;
  alert = {
    type: '',
    complement: '',
  };

  constructor(public weatherService: WeatherService) {
    this.country = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.weatherform = new FormGroup({
      country: this.country,
      city: this.city,
    });
  }

  sendInfo() {
    this.weatherform.value.city.toLowerCase();
    this.country2 = this.firstLetterMayus(this.weatherform.value.country);
    this.city2 = this.weatherform.value.city;
    let latitud = '';
    let longitud = '';
    this.isEmpty = false;
    this.weatherService.getWeatherGeo(this.city2, this.country2).subscribe(
      (data) => {
        if (data.length > 0) {
          this.isEmpty = true;
          latitud = data[0].lat;
          longitud = data[0].lon;
          this.alert.type = successAlert;
          this.alert.complement = GetCity;
          this.getWeatherInfo(latitud, longitud, this.city2, this.alert);
          this.country.reset();
          this.city.reset();
        } else {
          this.alert.type = warningAlert;
          this.alert.complement = errorGetCity;
          this.sendAlert.emit(this.alert);
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
        this.alert.type = errorAlert;
        this.alert.complement = errorGetApi;
        this.sendAlert.emit(this.alert);
      }
    );
    this.country.reset();
    this.city.reset();
  }

  getWeatherInfo(latitud: any, longitud: any, city: string, alert: any) {
    this.weatherService.getWeather(latitud, longitud).subscribe(
      (data) => {
        if (data) {
          const updatedData = {
            ...data, // Copiar propiedades existentes del objeto data
            city: city, //propiedad city
          };
          this.cityWeather.emit(updatedData);
          this.sendAlert.emit(alert);
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }
  firstLetterMayus(country: any) {
    if (country.length === 0) return country;
    return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  }
}
