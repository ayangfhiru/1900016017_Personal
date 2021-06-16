import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukComponent } from './produk.component';

describe('ProdukComponent', () => {
  let component: ProdukComponent;
  let fixture: ComponentFixture<ProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
