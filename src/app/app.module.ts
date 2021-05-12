import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// *** Angular Material
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PseudoUiModule } from "./modules/pseudo-ui/pseudo-ui.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DummyContentComponent } from './pages/dummy-content/dummy-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    AppRoutingModule,
    LayoutsModule,
    PseudoUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
