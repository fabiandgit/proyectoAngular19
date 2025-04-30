import { Component, EventEmitter, Output } from '@angular/core';
import { InputsComponent } from '../../../shared/inputs/inputs.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather-form',
  imports: [InputsComponent, ButtonsComponent, ReactiveFormsModule],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  @Output() cityWeather = new EventEmitter<{}>();
  weatherform: FormGroup;
  country: FormControl;
  titleButton: string = 'Buscar';
  city: string = '';

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
    this.weatherService.getWeatherGeo(this.city).subscribe(
      (data) => {
        if (data) {
          latitud = data[0].lat;
          longitud = data[0].lon;
          this.getWeatherInfo(latitud, longitud, this.city);
          this.country.reset();
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }

  getWeatherInfo(latitud: any, longitud: any, city: string) {
    this.weatherService.getWeather(latitud, longitud).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          const updatedData = {
            ...data, // Copiar propiedades existentes del objeto data
            city: city, // Añadir la nueva propiedad 'city'
          };
          console.log(updatedData);
          this.cityWeather.emit(updatedData);
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }
}
