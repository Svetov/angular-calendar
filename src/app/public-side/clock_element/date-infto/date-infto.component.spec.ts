import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInftoComponent } from './date-infto.component';

describe('DateInftoComponent', () => {
  let component: DateInftoComponent;
  let fixture: ComponentFixture<DateInftoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInftoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInftoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
