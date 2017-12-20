import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishBioComponent } from './fish-bio.component';

describe('FishBioComponent', () => {
  let component: FishBioComponent;
  let fixture: ComponentFixture<FishBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
