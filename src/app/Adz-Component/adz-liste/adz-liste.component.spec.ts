import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzListeComponent } from './adz-liste.component';

describe('AdzListeComponent', () => {
  let component: AdzListeComponent;
  let fixture: ComponentFixture<AdzListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
