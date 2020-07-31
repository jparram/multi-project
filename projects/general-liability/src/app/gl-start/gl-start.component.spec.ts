import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlStartComponent } from './gl-start.component';

describe('GlStartComponent', () => {
  let component: GlStartComponent;
  let fixture: ComponentFixture<GlStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
