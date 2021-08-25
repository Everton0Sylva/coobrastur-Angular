import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { PanelClientComponent } from './client/panel-client/panel-client.component';
import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views.component';


const routes: Routes = [
  {
    path: '', component: ViewsComponent,
    children: [{
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'clients',
      component: PanelClientComponent,
    },
    {
      path: 'client',
      component: AddClientComponent,
    },
    ]
  }, {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
