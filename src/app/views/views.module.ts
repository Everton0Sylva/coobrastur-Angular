import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from "angular-datatables";
import { NgxMaskModule } from 'ngx-mask'
import { ToasterModule } from 'angular2-toaster';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LayoutModule } from '../layout/layout.module';
import { PanelClientComponent } from './client/panel-client/panel-client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ViewsComponent,
    PanelClientComponent,
    AddClientComponent,
    HomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    DataTablesModule,
    NgxMaskModule,
    ToasterModule,
    FormsModule,
    ViewsRoutingModule,
    LayoutModule,
    TranslateModule,
    NgbModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Sem Dados para listar.',
        totalMessage: ' Total',
        selectedMessage: 'false'
      }
    }),
  ],
  providers: []
})
export class ViewsModule { }