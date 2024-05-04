import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderRegistComponent } from './reader-regist.component';

describe('ReaderRegistComponent', () => {
  let component: ReaderRegistComponent;
  let fixture: ComponentFixture<ReaderRegistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderRegistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
