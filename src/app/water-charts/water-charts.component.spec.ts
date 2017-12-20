import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChartsComponent } from './water-charts.component';

describe('WaterChartsComponent', () => {
  let component: WaterChartsComponent;
  let fixture: ComponentFixture<WaterChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
