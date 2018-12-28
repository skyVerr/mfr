import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMfrComponent } from './single-mfr.component';

describe('SingleMfrComponent', () => {
  let component: SingleMfrComponent;
  let fixture: ComponentFixture<SingleMfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
