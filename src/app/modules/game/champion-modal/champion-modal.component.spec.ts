import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionModalComponent } from './champion-modal.component';

describe('ChampionModalComponent', () => {
  let component: ChampionModalComponent;
  let fixture: ComponentFixture<ChampionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
