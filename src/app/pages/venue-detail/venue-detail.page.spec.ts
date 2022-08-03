import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailPage } from './venue-detail.page';

describe('VenueDetailPage', () => {
  let component: VenueDetailPage;
  let fixture: ComponentFixture<VenueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
