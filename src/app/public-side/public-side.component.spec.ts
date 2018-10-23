import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSideComponent } from './public-side.component';

describe('PublicSideComponent', () => {
  let component: PublicSideComponent;
  let fixture: ComponentFixture<PublicSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
