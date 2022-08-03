import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListPage } from './venue-list.page';

describe('VenueListPage', () => {
  let component: VenueListPage;
  let fixture: ComponentFixture<VenueListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
