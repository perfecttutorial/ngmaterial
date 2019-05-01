import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule, Routes} from '@angular/router';
import { HardwaretemplateComponent } from './hardwaretemplate/hardwaretemplate.component';
import { SoftwaretemplateComponent } from './softwaretemplate/softwaretemplate.component';
import { MaincontentComponent } from './menu-tabs/maincontent/maincontent.component';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainContentService } from './menu-tabs/maincontent/maincontent.service';
const appRoutes: Routes = [

  {

    path: " ",
    component: SoftwaretemplateComponent
   
  },
  {

    path: "/menubarone",
    component: HardwaretemplateComponent
   
  },
  {
    path: "/menubarone2",
    component: SoftwaretemplateComponent
  }
];


const appRoutes1: Routes = [
  { path: 'Add', component: MenuTabsComponent },
  { path: 'Search', component: SoftwaretemplateComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MenuTabsComponent,
    HardwaretemplateComponent,
    SoftwaretemplateComponent,
    MaincontentComponent,   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes1,{ enableTracing: true } )
      ],
  providers: [MainContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

