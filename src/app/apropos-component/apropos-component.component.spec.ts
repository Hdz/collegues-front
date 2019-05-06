import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposComponentComponent } from './apropos-component.component';

describe('AproposComponentComponent', () => {
  let component: AproposComponentComponent;
  let fixture: ComponentFixture<AproposComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
