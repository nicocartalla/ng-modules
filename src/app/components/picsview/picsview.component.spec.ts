import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsviewComponent } from './picsview.component';

describe('PicsviewComponent', () => {
  let component: PicsviewComponent;
  let fixture: ComponentFixture<PicsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
