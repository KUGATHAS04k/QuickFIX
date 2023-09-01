import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfirstComponent } from './sectionfirst.component';

describe('SectionfirstComponent', () => {
  let component: SectionfirstComponent;
  let fixture: ComponentFixture<SectionfirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionfirstComponent]
    });
    fixture = TestBed.createComponent(SectionfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
