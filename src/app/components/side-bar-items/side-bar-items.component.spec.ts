import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarItemsComponent } from './side-bar-items.component';

describe('SideBarItemsComponent', () => {
  let component: SideBarItemsComponent;
  let fixture: ComponentFixture<SideBarItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarItemsComponent]
    });
    fixture = TestBed.createComponent(SideBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
