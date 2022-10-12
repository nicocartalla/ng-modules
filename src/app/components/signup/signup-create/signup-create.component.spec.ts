import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCreateComponent } from './signup-create.component';

describe('SignupCreateComponent', () => {
  let component: SignupCreateComponent;
  let fixture: ComponentFixture<SignupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
