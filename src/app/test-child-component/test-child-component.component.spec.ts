import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChildComponentComponent } from './test-child-component.component';

describe('TestChildComponentComponent', () => {
  let component: TestChildComponentComponent;
  let fixture: ComponentFixture<TestChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChildComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
