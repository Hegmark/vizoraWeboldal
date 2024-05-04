import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDataComponent } from './civil-data.component';

describe('CivilDataComponent', () => {
  let component: CivilDataComponent;
  let fixture: ComponentFixture<CivilDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CivilDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
