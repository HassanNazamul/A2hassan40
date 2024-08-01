import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHassan40Component } from './books-hassan40.component';

describe('BooksHassan40Component', () => {
  let component: BooksHassan40Component;
  let fixture: ComponentFixture<BooksHassan40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksHassan40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksHassan40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
