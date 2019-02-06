import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesTailsComponent } from './policies-tails.component';

describe('PoliciesTailsComponent', () => {
  let component: PoliciesTailsComponent;
  let fixture: ComponentFixture<PoliciesTailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesTailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
