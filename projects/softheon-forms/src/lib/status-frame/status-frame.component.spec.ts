import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StatusFrameComponent } from './status-frame.component';

describe('StatusFrameComponent', () => {
  let component: StatusFrameComponent;
  let fixture: ComponentFixture<StatusFrameComponent>;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ StatusFrameComponent ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        FlexLayoutModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
