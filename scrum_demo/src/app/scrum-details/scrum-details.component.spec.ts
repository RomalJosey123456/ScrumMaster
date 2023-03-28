import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumDetailsComponent } from './scrum-details.component';

describe('ScrumDetailsComponent', () => {
  let component: ScrumDetailsComponent;
  let fixture: ComponentFixture<ScrumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
