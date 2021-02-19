import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedaComponent } from './ayurveda.component';

describe('AyurvedaComponent', () => {
  let component: AyurvedaComponent;
  let fixture: ComponentFixture<AyurvedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurvedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
