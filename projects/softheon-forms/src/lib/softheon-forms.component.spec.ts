import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftheonFormsComponent } from './softheon-forms.component';

describe('SoftheonFormsComponent', () => {
  let component: SoftheonFormsComponent;
  let fixture: ComponentFixture<SoftheonFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftheonFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftheonFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
