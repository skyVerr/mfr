import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { CategoryComponent } from './pages/category/category.component';
import { TypeComponent } from './pages/type/type.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home' ,component: HomeComponent },
  { path: 'contacts' ,component: ContactsComponent },
  { path: 'category' ,component: CategoryComponent },
  { path: 'type' ,component: TypeComponent },
  { path: 'project' ,component: ProjectComponent },
  { path: 'contacts/new' ,component: NewContactComponent },
  { path: 'contacts/:id' ,component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
