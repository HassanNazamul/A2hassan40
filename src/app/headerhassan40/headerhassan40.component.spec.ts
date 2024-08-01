import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerhassan40Component } from './headerhassan40.component';

describe('Headerhassan40Component', () => {
  let component: Headerhassan40Component;
  let fixture: ComponentFixture<Headerhassan40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Headerhassan40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerhassan40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
