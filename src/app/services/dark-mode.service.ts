import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor() {
    this.listenToSystemTheme();
  }

  // Método para activar el modo oscuro
  enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  }

  // Método para desactivar el modo oscuro
  disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }

  // Comprobar el estado actual del modo oscuro
  isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  // Método para escuchar los cambios en el modo del sistema
  listenToSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.applySystemTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (event) => {
      this.applySystemTheme(event.matches);
    });
  }

  // Aplicar el tema basado en la preferencia del sistema
  applySystemTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
}
