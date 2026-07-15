import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoFormatadoPipe } from './preco-formatado-pipe';

describe('PrecoFormatadoPipe', () => {
  let component: PrecoFormatadoPipe;
  let fixture: ComponentFixture<PrecoFormatadoPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecoFormatadoPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(PrecoFormatadoPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
