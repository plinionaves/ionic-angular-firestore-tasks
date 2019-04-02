import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSavePage } from './task-save.page';

describe('TaskSavePage', () => {
  let component: TaskSavePage;
  let fixture: ComponentFixture<TaskSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
