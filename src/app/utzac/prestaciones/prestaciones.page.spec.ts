import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestacionesPage } from './prestaciones.page';

describe('PrestacionesPage', () => {
  let component: PrestacionesPage;
  let fixture: ComponentFixture<PrestacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
