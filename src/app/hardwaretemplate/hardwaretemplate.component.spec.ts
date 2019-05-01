import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwaretemplateComponent } from './hardwaretemplate.component';

xdescribe('HardwaretemplateComponent', () => {
  let component: HardwaretemplateComponent;
  let fixture: ComponentFixture<HardwaretemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwaretemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwaretemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
