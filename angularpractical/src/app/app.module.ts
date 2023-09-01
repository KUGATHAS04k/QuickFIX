import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFormComponent } from './Home/home-form/home-form.component';
import { FeatureListComponent } from './Features/feature-list/feature-list.component';
import { HeaderComponent } from './header/header/header.component';
import { SectionfirstComponent } from './HowWork/sectionfirst/sectionfirst.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFormComponent,
    FeatureListComponent,
    HeaderComponent,
    SectionfirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
