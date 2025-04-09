import { Component } from '@angular/core';
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
  weatherform: FormGroup;
  country: FormControl;
  titleButton: string = 'Buscar';

  constructor(public weatherService: WeatherService) {
    this.country = new FormControl('');
    this.weatherform = new FormGroup({
      country: this.country,
    });
  }

  sendInfo() {
    const city = this.weatherform.value.country;
    let latitud = '';
    let longitud = '';
    this.weatherService.getWeatherGeo(city).subscribe(
      (data) => {
        if (data) {
          latitud = data[0].lat;
          longitud = data[0].lon;
          this.getWeatherInfo(latitud, longitud);
        }
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }

  getWeatherInfo(latitud: any, longitud: any) {
    this.weatherService.getWeather(latitud, longitud).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('problema al obtener los datos', error);
      }
    );
  }
}
