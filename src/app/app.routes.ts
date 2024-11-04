import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './component/guard/auth.guard';  
import { OverviewComponent } from './page/overview/overview.component';
import { DashboardComponent } from './page/dashboard/dashboard.component'; 
import { Login1Component } from './page/login-1/login-1.component';

export const routes: Routes = [ 
        { path:'', component:Login1Component, pathMatch: 'full'},
        {path:'login', component:Login1Component},
        // { path: 'Admin', component:OverviewComponent,canActivate: [AuthGuard], children: [ 
            { path: 'Admin', component:OverviewComponent,children: [    
          {path:'overview',component:OverviewComponent},  
          {path:'dashboard',component:DashboardComponent},   
        ]}
      ]; 
