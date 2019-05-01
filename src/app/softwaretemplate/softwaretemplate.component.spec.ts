import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaretemplateComponent } from './softwaretemplate.component';

xdescribe('SoftwaretemplateComponent', () => {
  let component: SoftwaretemplateComponent;
  let fixture: ComponentFixture<SoftwaretemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwaretemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaretemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
