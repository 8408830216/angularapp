import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes: Routes = [
  {
    path: '', component: ProductComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'tablet', component: TabletComponent },
      { path: 'tv', component: TvComponent },
      { path: 'washingmachine', component: WashingmachineComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,   //we implement this comp here and remove this comp from the app.module.ts file
  ],
  imports: [
    CommonModule,   //CommonModule export all the basic angular directive,pipes,services etc
    RouterModule.forChild(prodRoutes),
    UtilityModule    //shared module
  ],
  exports: [
    RouterModule
  ]

})
export class ProductsModule {
  constructor() {
    console.log('produ module call');

  }
}
