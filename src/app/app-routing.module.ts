import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingEditorComponent } from './listing-editor/listing-editor.component';


const routes: Routes = [
  {path:'',component:HomeEditorComponent},
  {path: 'home',component: HomeEditorComponent},
  {path: 'contactform', component:ProfileEditorComponent},
  {path: 'listing', component:ListingEditorComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeEditorComponent,ProfileEditorComponent,ListingEditorComponent,PageNotFoundComponent]
