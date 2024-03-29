import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResultsComponent } from './form-results.component';

describe('FormResultsComponent', () => {
  let component: FormResultsComponent;
  let fixture: ComponentFixture<FormResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
