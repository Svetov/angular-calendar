import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockRowComponent } from './clock-row.component';

describe('ClockRowComponent', () => {
  let component: ClockRowComponent;
  let fixture: ComponentFixture<ClockRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
