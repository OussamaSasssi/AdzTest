import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzPopupComponent } from './adz-popup.component';

describe('AdzPopupComponent', () => {
  let component: AdzPopupComponent;
  let fixture: ComponentFixture<AdzPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
