import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDataComponent } from './tambah-data.component';

describe('TambahDataComponent', () => {
  let component: TambahDataComponent;
  let fixture: ComponentFixture<TambahDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
