import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprovComponent } from './editprov.component';

describe('EditprovComponent', () => {
  let component: EditprovComponent;
  let fixture: ComponentFixture<EditprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
