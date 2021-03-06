import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
//import { Md2Module } from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { TextMaskModule } from 'angular2-text-mask';

import { ErrorMessageComponent } from './components/error-message.component';
import { HideByDirective } from './directives/hide-by.directive';
import { FormDebugComponent } from './components/form-debug.component';
// import { InputMaskDirective } from './input-mask.directive';
import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CurrencyBrlPipe } from './pipes/currency-brl.pipe';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DateTimePipe } from './pipes/dateTime.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //MaterialModule,
    //Md2Module,
    FlexLayoutModule,
    //TextMaskModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    FormDebugComponent,
    ErrorMessageComponent,
    HideByDirective,
    // InputMaskDirective,
    CpfPipe,
    CnpjPipe,
    CurrencyBrlPipe,
    DateTimePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //MaterialModule,
   // Md2Module,
    FlexLayoutModule,
    //TextMaskModule,
    FormDebugComponent,
    ErrorMessageComponent,
    HideByDirective,
    // InputMaskDirective,
    CpfPipe,
    CnpjPipe,
    CurrencyBrlPipe
  ]
})
export class SharedModule { }
