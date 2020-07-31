import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStartComponent } from './property-start.component';

describe('PropertyStartComponent', () => {
  let component: PropertyStartComponent;
  let fixture: ComponentFixture<PropertyStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
