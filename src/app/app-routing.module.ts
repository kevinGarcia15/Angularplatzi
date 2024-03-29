import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',    
      },
      {
        path: 'home',
        /**paso 6 para modularizar */
        loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren:()=> import('./product/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        //canActivate:[AdminGuard],
        component: ContactComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
