import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialesComponent } from './footer-sociales.component';

describe('FooterSocialesComponent', () => {
  let component: FooterSocialesComponent;
  let fixture: ComponentFixture<FooterSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
