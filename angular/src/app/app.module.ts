import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard} from "@angular/material/card";
import {MaterialModule} from "./material/material.module";
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({ declarations: [
        AppComponent,
        PostsListComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        MaterialModule,
        CommonModule], providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
