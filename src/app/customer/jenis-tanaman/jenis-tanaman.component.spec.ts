import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisTanamanComponent } from './jenis-tanaman.component';

describe('JenisTanamanComponent', () => {
  let component: JenisTanamanComponent;
  let fixture: ComponentFixture<JenisTanamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenisTanamanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisTanamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
