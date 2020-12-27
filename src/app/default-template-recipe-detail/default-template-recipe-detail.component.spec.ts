import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplateRecipeDetailComponent } from './default-template-recipe-detail.component';

describe('DefaultTemplateRecipeDetailComponent', () => {
  let component: DefaultTemplateRecipeDetailComponent;
  let fixture: ComponentFixture<DefaultTemplateRecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTemplateRecipeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTemplateRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
