import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthLayoutComponent } from './un-auth-layout.component';

describe('UnAuthLayoutComponent', () => {
  let component: UnAuthLayoutComponent;
  let fixture: ComponentFixture<UnAuthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnAuthLayoutComponent]
    });
    fixture = TestBed.createComponent(UnAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
