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
  city: FormControl;
  titleButton: string = buttonSearch;
  country2: string = '';
  city2: string = '';
  isEmpty: boolean = false;
  typeAlert: string = '';
  complement: string = '';
  countryErrorField: string = countryErrorField;
  cityErrorField: string = cityErrorField;

  constructor(public weatherService: WeatherService) {
    this.country = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.weatherform = new FormGroup({
      country: this.country,
      city: this.city,
    });
  }

  sendInfo() {
    this.weatherform.value.pais.toLowerCase();
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
          this.getWeatherInfo(latitud, longitud, this.city2);
          this.country.reset();
          this.city.reset();
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
    this.city.reset();
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
  firstLetterMayus(country: any) {
    if (country.length === 0) return country;
    return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  }
}
