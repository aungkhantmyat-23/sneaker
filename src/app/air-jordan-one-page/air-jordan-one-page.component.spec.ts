import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirJordanOnePageComponent } from './air-jordan-one-page.component';

describe('AirJordanOnePageComponent', () => {
  let component: AirJordanOnePageComponent;
  let fixture: ComponentFixture<AirJordanOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirJordanOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirJordanOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
