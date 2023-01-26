import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubservComponent } from './subserv.component';

describe('SubservComponent', () => {
  let component: SubservComponent;
  let fixture: ComponentFixture<SubservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
