import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SueldosPage } from './sueldos.page';

describe('SueldosPage', () => {
  let component: SueldosPage;
  let fixture: ComponentFixture<SueldosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SueldosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
