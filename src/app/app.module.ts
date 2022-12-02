import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
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
    CustdirDirective,
    DemoComponent,
    ChildassignComponent,
    OutputassignComponent,
    HooksComponent,
    DirectassignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
