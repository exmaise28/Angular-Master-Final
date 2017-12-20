import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import{ HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import{RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrophiesComponent } from './trophies/trophies.component';
import { TipsComponent } from './tips/tips.component';
import { WaterChartsComponent } from './water-charts/water-charts.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { FishBioComponent } from './fish-bio/fish-bio.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService } from './_services/index';
import { UserService } from './register/user.service';
import { FilterPipe} from './water-charts/filter.pipe';
import { FishService } from './fish-bio/fish.service';
import { SearchPipe } from './fish-bio/search.pipe';
import { ImageUploadModule } from "angular2-image-upload";
import {FilesService} from './trophies/files.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrophiesComponent,
    TipsComponent,
    WaterChartsComponent,
    MemberLoginComponent,
    FishBioComponent,
    AppComponent,
    AlertComponent,
    RegisterComponent,
    FilterPipe,
    SearchPipe 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , redirectTo:'home', pathMatch:'full'},
      {path:'fish-bio',component:FishBioComponent},
      {path:'home',component:HomeComponent},
      {path:'member-login',component:MemberLoginComponent},
      {path:'tips',component:TipsComponent},
      {path:'trophies',component:TrophiesComponent},
      {path:'water-charts',component:WaterChartsComponent},
      {path:'register',component:RegisterComponent}
    ])
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    FishService,
    FilesService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
