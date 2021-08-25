import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ToasterModule } from 'angular2-toaster';
import { LoginComponent } from './login/login.component';
import { LayoutRoutingModule } from './layout.routing';
import { TranslateModule } from '@ngx-translate/core';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    LoginComponent,
    TopnavComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule,
    ToasterModule,
    FormsModule,
    LayoutRoutingModule,
    TranslateModule,
  ],
  providers: [],
  exports: [
    TopnavComponent
  ],
})
export class LayoutModule { }