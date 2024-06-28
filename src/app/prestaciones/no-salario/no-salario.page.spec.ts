import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoSalarioPage } from './no-salario.page';

describe('NoSalarioPage', () => {
  let component: NoSalarioPage;
  let fixture: ComponentFixture<NoSalarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSalarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
