import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDetails } from './week-details';

describe('WeekDetails', () => {
  let component: WeekDetails;
  let fixture: ComponentFixture<WeekDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
