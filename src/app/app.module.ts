import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { FormService } from './form.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingEditorComponent } from './listing-editor/listing-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {ListingService} from './listing.service';







@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    NavigationbarComponent,
    HomeEditorComponent,
    PageNotFoundComponent,
    ListingEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormService,ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
