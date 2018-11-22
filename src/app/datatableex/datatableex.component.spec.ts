import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableexComponent } from './datatableex.component';

describe('DatatableexComponent', () => {
  let component: DatatableexComponent;
  let fixture: ComponentFixture<DatatableexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
