import { Component, OnInit,ViewChild, Injectable } from '@angular/core';
import { MainContent } from 'src/app/model/maincontent.model';
import { MainContentService } from './maincontent.service';


@Component({
  selector: 'main-content',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})


export class MaincontentComponent implements OnInit {

  response :any;
  errormsg:any;
  mainCont : MainContent = {
    selectDT:null,
    state:null
   
  }
  constructor(private _maincontentserrvice:MainContentService) {}

  
  ngOnInit() {
    
    
  this.getResponse();
    
  
   /*  let obs = this.httpClient.get('assets/customer.json');
    obs.subscribe((res)=> {
      console.log(res+"-------------- saddsdsad")
      this.response = res;
    }) */
  }

  getResponse(){
    this._maincontentserrvice.getDeviceTypeList().
    subscribe(data=> {
      // console.log(res+"-------------- saddsdsad")
       console.log("this.response  "+JSON.stringify(data));
       this.response = data
    },
       error => {
         console.log("this.response  "+JSON.stringify(error));
       this.errormsg = error
       });
      
  }

 /*  onSubmit(mcForm:NgForm):void { 

    console.log(mcForm.value)
   }
  */
 onSubmit(mcForm:MainContent):void { 

  console.log(mcForm)
 }

  
  

}
