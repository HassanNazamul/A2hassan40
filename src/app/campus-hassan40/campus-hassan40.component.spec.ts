import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHassan40Component } from './campus-hassan40.component';

describe('CampusHassan40Component', () => {
  let component: CampusHassan40Component;
  let fixture: ComponentFixture<CampusHassan40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusHassan40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusHassan40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
