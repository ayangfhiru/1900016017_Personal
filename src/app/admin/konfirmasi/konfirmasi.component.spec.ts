import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiComponent } from './konfirmasi.component';

describe('KonfirmasiComponent', () => {
  let component: KonfirmasiComponent;
  let fixture: ComponentFixture<KonfirmasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonfirmasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
