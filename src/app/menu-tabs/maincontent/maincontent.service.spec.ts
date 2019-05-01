import { MainContentService } from "./maincontent.service";
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, getTestBed } from "@angular/core/testing";
import { DeviceTypeList } from "src/app/model/devicetype.model";
// import { HttpParams } from '@angular/common/http';


describe('MainContentService', () => {

    let injector;
    let service: MainContentService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MainContentService]
        });

        injector = getTestBed();
        service = injector.get(MainContentService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(()=>{
        httpMock.verify();
    });

describe('#getDeviceTypeList', () => {
    it('should return an Observable<DeviceTypeList[]>', () => {
      const dummyUsers: DeviceTypeList[] = [
        new DeviceTypeList('0', 'John'),
        new DeviceTypeList('1', 'Doe')
      ];

      service.getDeviceTypeList().subscribe(devicelist => {
        expect(devicelist.length).toBe(2);
        console.log(" devicelist ---- ",devicelist)
        expect(devicelist).toEqual(dummyUsers);
      });

      

      const req = httpMock.expectOne(`${service.url}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

})