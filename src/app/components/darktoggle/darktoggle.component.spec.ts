import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarktoggleComponent } from './darktoggle.component';

describe('DarktoggleComponent', () => {
  let component: DarktoggleComponent;
  let fixture: ComponentFixture<DarktoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarktoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarktoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
