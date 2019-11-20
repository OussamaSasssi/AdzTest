import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzRechercheComponent } from './adz-recherche.component';

describe('AdzRechercheComponent', () => {
  let component: AdzRechercheComponent;
  let fixture: ComponentFixture<AdzRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
