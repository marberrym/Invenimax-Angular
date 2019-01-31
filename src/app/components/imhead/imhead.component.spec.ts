import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImheadComponent } from './imhead.component';

describe('ImheadComponent', () => {
  let component: ImheadComponent;
  let fixture: ComponentFixture<ImheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
