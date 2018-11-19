import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
   {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
   },
   {
      path: 'seller',
      loadChildren: './seller/seller.module#SellerModule'
   },
   {
      path: 'buyer',
      loadChildren: './buyer/buyer.module#BuyerModule'
   },
   {
      path: '**',
      loadChildren: './auth/auth.module#AuthModule'
   }
];

@NgModule({
   declarations: [],
   imports: [
      RouterModule.forRoot(
         appRoutes,
         {
            enableTracing: false // <-- debugging purposes only
            //  preloadingStrategy: SelectivePreloadingStrategyService,
         }
      )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
