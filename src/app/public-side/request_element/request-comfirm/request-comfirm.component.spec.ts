import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComfirmComponent } from './request-comfirm.component';

describe('RequestComfirmComponent', () => {
  let component: RequestComfirmComponent;
  let fixture: ComponentFixture<RequestComfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestComfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
