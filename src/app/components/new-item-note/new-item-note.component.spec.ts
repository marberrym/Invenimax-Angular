import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemNoteComponent } from './new-item-note.component';

describe('NewItemNoteComponent', () => {
  let component: NewItemNoteComponent;
  let fixture: ComponentFixture<NewItemNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
