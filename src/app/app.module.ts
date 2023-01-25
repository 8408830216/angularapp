import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Server1Component } from './server1/server1.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirectiveassignComponent } from './directiveassign/directiveassign.component';
import { NgassignmentComponent } from './ngassignment/ngassignment.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { ChildassignComponent } from './childassign/childassign.component';
import { OutputassignComponent } from './outputassign/outputassign.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirectassignComponent } from './directassign/directassign.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { FormassignmentComponent } from './formassignment/formassignment.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformassignComponent } from './templateformassign/templateformassign.component';
import { AddremoveassignComponent } from './addremoveassign/addremoveassign.component';
import { ReactivepracticeComponent } from './reactivepractice/reactivepractice.component';
import { TemplatepracticeComponent } from './templatepractice/templatepractice.component';
import { PracticeComponent } from './practice/practice.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import {HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Emp2Component } from './emp2/emp2.component';
import { Emp1Component } from './emp1/emp1.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { PipepracticeComponent } from './pipepractice/pipepractice.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { FilterpracticeComponent } from './filterpractice/filterpractice.component';
import { FilterassPipe } from './filterass.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TechstackComponent } from './techstack/techstack.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { FirebaseapiComponent } from './firebaseapi/firebaseapi.component';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { NewoneComponent } from './newone/newone.component';
import { Practice1Component } from './practice1/practice1.component';
import { RapidgetComponent } from './rapidget/rapidget.component';
import { PracticeReactiveComponent } from './practice-reactive/practice-reactive.component';
import { PracticeTemplateComponent } from './practice-template/practice-template.component';







@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent,
    ServersComponent,
    Server1Component,
    DemodirectivesComponent,
    NgswitchComponent,
    DirectiveassignComponent,
    NgassignmentComponent,
    AttriComponent,
    DemoComponent,
    ChildassignComponent,
    OutputassignComponent,
    HooksComponent,
    DirectassignComponent,
    AddassignmentComponent,
    SimpletemplateformComponent,
    FormassignmentComponent,
    ReactiveformComponent,
    TemplateformassignComponent,
    AddremoveassignComponent,
    ReactivepracticeComponent,
    TemplatepracticeComponent,
    PracticeComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Emp1Component,
    Emp2Component,
    PipedemoComponent,
    CountPipe,
    PipepracticeComponent,
    FilterpipeComponent,
    FilterPipe,
    FilterpracticeComponent,
    FilterassPipe,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    TechstackComponent,
    EducationComponent,
    ProjectComponent,
    PersonaldetailComponent,
    PagenotfoundComponent,
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidapiComponent,
    FirebaseapiComponent,
    CrudoperationComponent,
    NewoneComponent,
    Practice1Component,
    RapidgetComponent,
    PracticeReactiveComponent,
    PracticeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('AppModule module call');
    
  }
 }
