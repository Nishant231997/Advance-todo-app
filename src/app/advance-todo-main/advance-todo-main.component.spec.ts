import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTodoMainComponent } from './advance-todo-main.component';

describe('AdvanceTodoMainComponent', () => {
  let component: AdvanceTodoMainComponent;
  let fixture: ComponentFixture<AdvanceTodoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceTodoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTodoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
