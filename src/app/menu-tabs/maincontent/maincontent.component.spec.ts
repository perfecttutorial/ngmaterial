import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentComponent } from './maincontent.component';
import { DeviceTypeList } from 'src/app/model/devicetype.model';
import { MainContentService } from './maincontent.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('MaincontentComponent', () => {
  let component: MaincontentComponent;
  let fixture: ComponentFixture<MaincontentComponent>;
  //let response:DeviceTypeList[];
  let dummyData;
  let maincontentService: MainContentService;
  let mockService;
  /*  */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [MaincontentComponent],
      providers: [MainContentService]
    })

    mockService = jasmine.createSpyObj(['getDeviceTypeList']);
    dummyData = {
      "customers": "Angular customers",
      "selectoptiontype": [
        { "Id": "ATM", "name": "ATM" },
        { "Id": "VTM", "name": "VTM" }
      ]
    }
    fixture = TestBed.createComponent(MaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    maincontentService = TestBed.get(MainContentService);
  }));
  /* 
    it('canLogin returns false when the user is not authenticated', () => {
      
      spyOn(maincontentService, 'getDeviceTypeList').and.returnValue(dummyData);
      expect(component.getResponse()).toBeTruthy();
  
      component.ngOnInit();
      expect(component.response).toBe(dummyData);
      //expect(maincontentService.getDeviceTypeList).toHaveBeenCalled();
  
   
      /* maincontentService.getDeviceTypeList().subscribe(data=> {
        expect(data.length).toBe(2);
        console.log(" devicelist ---- ",data)
        expect(data).toEqual(this.response);
      })
   
  
    }); */

  it('should return device type in response variable', () => {
    // mockService.


    mockService.getDeviceTypeList.and.returnValue(of(true));

    component.ngOnInit();
    console.log(" dummydar",typeof dummyData);
    console.log("resposne",typeof component.response)
    expect(component.response).toEqual(dummyData);
    
  });
});

