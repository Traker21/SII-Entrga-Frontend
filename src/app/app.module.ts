import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MaskPipe, creditNPipe, datePipe } from './Pipes/CreditCardMask';
import { CustomLabelDirective } from './Directivas/errorDirectiva';
import {HttpClientModule} from '@angular/common/http';
import { TablaComponent } from './tabla-component/tabla-component.component'
import { RegistroComponent } from './registro/registro.component';





@NgModule({
  declarations: [
    AppComponent,
    MaskPipe,
    CustomLabelDirective,
    TablaComponent,
    RegistroComponent,
    datePipe,
    creditNPipe

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    HttpClientModule

  ],


  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
