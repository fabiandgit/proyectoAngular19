import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoAplicationComponent } from './pages/todo-aplication/todo-aplication.component';
import { WeatherAplicationComponent } from './pages/weather-aplication/weather-aplication.component';

export const routes: Routes = [
  // { path: '/', component: namecomponent }
  { path: '', component: HomeComponent },
  { path: 'Task', component: TodoAplicationComponent },
  { path: 'Weather', component: WeatherAplicationComponent },
];
