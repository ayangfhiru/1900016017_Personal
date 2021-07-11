import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdukComponent } from './detail-produk.component';

describe('DetailProdukComponent', () => {
  let component: DetailProdukComponent;
  let fixture: ComponentFixture<DetailProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProdukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
