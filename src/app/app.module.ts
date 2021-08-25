import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from "angular-datatables";
import { NgxMaskModule } from 'ngx-mask'
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from './layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { InterceptorModule } from './services/interceptor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgSelectModule,
    DataTablesModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    ToasterModule.forRoot(),
    TranslateModule.forRoot(),
    ViewsModule,
    LayoutModule,
  ],
  providers: [ToasterService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }