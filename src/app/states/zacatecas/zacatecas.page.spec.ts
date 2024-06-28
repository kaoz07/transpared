import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZacatecasPage } from './zacatecas.page';

describe('ZacatecasPage', () => {
  let component: ZacatecasPage;
  let fixture: ComponentFixture<ZacatecasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZacatecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
