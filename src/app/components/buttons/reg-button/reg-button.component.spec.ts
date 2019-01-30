import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegButtonComponent } from './reg-button.component';

describe('RegButtonComponent', () => {
  let component: RegButtonComponent;
  let fixture: ComponentFixture<RegButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
