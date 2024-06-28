import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtzacPage } from './utzac.page';

describe('UtzacPage', () => {
  let component: UtzacPage;
  let fixture: ComponentFixture<UtzacPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtzacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
