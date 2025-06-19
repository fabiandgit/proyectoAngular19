import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrlGeocodificacion =
    'https://api.openweathermap.org/geo/1.0/direct';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '162a61d90dcfe0cd3b3002d538f1dfa7';

  constructor(private http: HttpClient) {}

  //api para saber cual es la latitud y longitud de la ciudad
  getWeatherGeo(city: string, country: string): Observable<any> {
    const url = `${this.apiUrlGeocodificacion}?q=${city},${country}&limit=1&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  ///api para saber el clima
  getWeather(latitud: string, longitud: string): Observable<any> {
    const url = `${this.apiUrl}?lat=${latitud}&lon=${longitud}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
