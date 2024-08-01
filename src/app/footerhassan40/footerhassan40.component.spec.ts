import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerhassan40Component } from './footerhassan40.component';

describe('Footerhassan40Component', () => {
  let component: Footerhassan40Component;
  let fixture: ComponentFixture<Footerhassan40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footerhassan40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerhassan40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
