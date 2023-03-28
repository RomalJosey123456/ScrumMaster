import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumCreationComponent } from './scrum-creation.component';

describe('ScrumCreationComponent', () => {
  let component: ScrumCreationComponent;
  let fixture: ComponentFixture<ScrumCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
