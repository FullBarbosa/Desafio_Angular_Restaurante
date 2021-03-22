import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaidComponent } from './mesaid.component';

describe('MesaidComponent', () => {
  let component: MesaidComponent;
  let fixture: ComponentFixture<MesaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
