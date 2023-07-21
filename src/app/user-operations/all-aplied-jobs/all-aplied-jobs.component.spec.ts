import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApliedJobsComponent } from './all-aplied-jobs.component';

describe('AllApliedJobsComponent', () => {
  let component: AllApliedJobsComponent;
  let fixture: ComponentFixture<AllApliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApliedJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
