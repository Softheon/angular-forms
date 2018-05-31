import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';

import { RelationshipComponent } from './relationship.component';

describe('EnrollForm/RelationshipComponent', () => {
  let component: RelationshipComponent;
  let fixture: ComponentFixture<RelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipComponent],
      imports: [
        FormsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
