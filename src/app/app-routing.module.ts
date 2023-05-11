import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  //all contacts
  {
    path:'',component:AllContactsComponent
  },
  //add contact :path :http://localhost:4200/add-contacts
  {
    path:'add-contacts',component:AddContactComponent
  },
    //view contact :path :http://localhost:4200/view-contacts/id

  {
    path:'view-contacts/:id',component:ViewContactComponent
  },
    //edit contact :path :http://localhost:4200/edit-contacts/id

  {
    path:'edit-contacts/:id',component:EditContactComponent
 },
 //page not found
 {
  path:"**",component:PageNotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }