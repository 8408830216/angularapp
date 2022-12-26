import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { ProjectComponent } from './project/project.component';
import { TechstackComponent } from './techstack/techstack.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },   //bydefault comp
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, //path name empty cause it is bydefault to show
  { path: 'aboutus', component: AboutusComponent }, //localhost//4200/aboutus if we use this address then this path comp loads 
  { path: 'product',component:ProductComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmachine',component:WashingmachineComponent}
  ] }, //nested router outlet
  { path: 'contactus', component: ContactusComponent },  //localhost//4200/contactus
  { path: 'techstack', component: TechstackComponent },
  { path: 'education', component: EducationComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'details', component: PersonaldetailComponent},
  { path: '**', component: PagenotfoundComponent}  //pagenot found path,error path always in last(wildCard)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
