import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderDataComponent } from './reader-data.component';

describe('ReaderDataComponent', () => {
  let component: ReaderDataComponent;
  let fixture: ComponentFixture<ReaderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
