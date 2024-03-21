import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeature2Component } from './lazy-feature2.component';

describe('LazyFeature2Component', () => {
  let component: LazyFeature2Component;
  let fixture: ComponentFixture<LazyFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyFeature2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
