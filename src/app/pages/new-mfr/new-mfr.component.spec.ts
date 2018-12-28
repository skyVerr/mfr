import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMfrComponent } from './new-mfr.component';

describe('NewMfrComponent', () => {
  let component: NewMfrComponent;
  let fixture: ComponentFixture<NewMfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
