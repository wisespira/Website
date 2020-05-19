import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePageComponent } from './phone-page.component';

describe('PhonePageComponent', () => {
  let component: PhonePageComponent;
  let fixture: ComponentFixture<PhonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
