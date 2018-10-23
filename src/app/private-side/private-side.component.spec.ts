import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSideComponent } from './private-side.component';

describe('PrivateSideComponent', () => {
  let component: PrivateSideComponent;
  let fixture: ComponentFixture<PrivateSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
