import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicoPage } from './academico.page';

describe('AcademicoPage', () => {
  let component: AcademicoPage;
  let fixture: ComponentFixture<AcademicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
