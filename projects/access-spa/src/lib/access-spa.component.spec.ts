import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSpaComponent } from './access-spa.component';

describe('AccessSpaComponent', () => {
  let component: AccessSpaComponent;
  let fixture: ComponentFixture<AccessSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
