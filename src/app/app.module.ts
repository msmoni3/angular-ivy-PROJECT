import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookService } from './book.service';
// import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './testdata';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { FormarraySampleComponent } from './formarray-sample/formarray-sample.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  FormsModule ,
                  HttpClientModule,
                  ReactiveFormsModule
                  // InMemoryWebApiModule.forRoot(TestData)
                  ],
  declarations: [ AppComponent, HelloComponent, TemplateDrivenComponent, ReactiveFormComponent, ReactiveFormBuilderComponent, FormarraySampleComponent, Child1Component ],
  bootstrap:    [ AppComponent ],
  providers: [BookService]
})
export class AppModule { }
