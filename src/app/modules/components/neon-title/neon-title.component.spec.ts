import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonTitleComponent } from './neon-title.component';

describe('NeonTitleComponent', () => {
  let component: NeonTitleComponent;
  let fixture: ComponentFixture<NeonTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
