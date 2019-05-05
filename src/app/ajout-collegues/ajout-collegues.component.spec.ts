import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutColleguesComponent } from './ajout-collegues.component';

describe('AjoutColleguesComponent', () => {
  let component: AjoutColleguesComponent;
  let fixture: ComponentFixture<AjoutColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
