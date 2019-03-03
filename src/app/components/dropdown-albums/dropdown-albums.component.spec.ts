import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAlbumsComponent } from './dropdown-albums.component';

describe('DropdownAlbumsComponent', () => {
  let component: DropdownAlbumsComponent;
  let fixture: ComponentFixture<DropdownAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
