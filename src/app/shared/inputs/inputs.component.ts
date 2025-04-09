import { Component, forwardRef, input, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
})
export class InputsComponent implements ControlValueAccessor {
  name = input();
  type = input();
  placeHolder = input();
  class = input();
  value: any = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  // Métodos de la interfaz ControlValueAccessor
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Opcional, en caso de que quieras manejar el estado deshabilitado
  }
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }
}

// import { Component, forwardRef, Input } from '@angular/core';
// import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// @Component({
//   selector: 'app-inputs',
//   templateUrl: './inputs.component.html',
//   styleUrls: ['./inputs.component.css'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => InputsComponent),
//       multi: true,
//     },
//   ],
// })
// export class InputsComponent implements ControlValueAccessor {
//   @Input() name!: string;
//   @Input() type: string = 'text';

// value: any = '';
// onChange = (value: any) => {};
// onTouched = () => {};

// // Métodos de la interfaz ControlValueAccessor
// writeValue(value: any): void {
//   this.value = value;
// }

// registerOnChange(fn: any): void {
//   this.onChange = fn;
// }

// registerOnTouched(fn: any): void {
//   this.onTouched = fn;
// }

// setDisabledState?(isDisabled: boolean): void {
//   // Opcional, en caso de que quieras manejar el estado deshabilitado
// }
// }
