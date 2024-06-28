import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocioPage } from './socio.page';

describe('SocioPage', () => {
  let component: SocioPage;
  let fixture: ComponentFixture<SocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
