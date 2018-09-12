import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFdtransactionComponent } from './create-fdtransaction.component';

describe('CreateFdtransactionComponent', () => {
  let component: CreateFdtransactionComponent;
  let fixture: ComponentFixture<CreateFdtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFdtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFdtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
