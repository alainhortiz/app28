import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewItemComponent } from './form-new-item.component';

describe('FormNewItemComponent', () => {
  let component: FormNewItemComponent;
  let fixture: ComponentFixture<FormNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
