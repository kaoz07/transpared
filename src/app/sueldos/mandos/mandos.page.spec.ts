import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandosPage } from './mandos.page';

describe('MandosPage', () => {
  let component: MandosPage;
  let fixture: ComponentFixture<MandosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MandosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
