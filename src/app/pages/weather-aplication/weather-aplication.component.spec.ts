import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAplicationComponent } from './weather-aplication.component';

describe('WeatherAplicationComponent', () => {
  let component: WeatherAplicationComponent;
  let fixture: ComponentFixture<WeatherAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
