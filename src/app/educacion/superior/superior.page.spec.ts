import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperiorPage } from './superior.page';

describe('SuperiorPage', () => {
  let component: SuperiorPage;
  let fixture: ComponentFixture<SuperiorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
