import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  imports: [],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  @Input() typeAlert = '';
  @Input() complement = '';

  typeText: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showAlert();
  }

  showAlert() {
    let alertBox = document.createElement('div');
    alertBox.style.width = '20%';
    if (this.typeAlert == '¡Éxito!') {
      this.typeText = 'text-green';
      alertBox.classList.add('bg-green-100', this.typeText + '-800');
    } else if (this.typeAlert == '¡Error!') {
      this.typeText = 'text-red';
      alertBox.classList.add('bg-red-100', this.typeText + '-800');
    } else if (this.typeAlert == '¡Alerta!') {
      this.typeText = 'text-yellow';
      alertBox.classList.add('bg-yellow-100', this.typeText + '-800');
    } else {
      this.typeText = 'text-blue';
      alertBox.classList.add('bg-blue-100', this.typeText + '-800');
    }
    alertBox.classList.add(
      'p-4',
      'rounded-md',
      'flex',
      'items-center',
      'justify-between',
      'mx-auto'
    );
    alertBox.setAttribute('role', 'alert');
    alertBox.innerHTML = `
      <span class="font-semibold">${this.typeAlert}</span> ${this.complement}.
      <button onclick="this.parentElement.style.display='none'" class="ml-4 ${this.typeText}-500 hover:${this.typeText}-700">
        &times;
      </button>
    `;
    document.body.appendChild(alertBox);

    // Desaparecer la alerta después de 3 segundos
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }
}
